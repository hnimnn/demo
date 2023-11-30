import { createPortal } from "react-dom";
import "./Modal.scss";
import { ReactComponent as XMark } from "../../assets/icons/xmark-solid.svg";
import { ReactNode } from "react";

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  showModal: Boolean;
  children: ReactNode;
  onClose?: () => void;
};
export default function Modal({
  showModal,
  children,
  onClose,
  ...props
}: ModalProps) {
  console.log(showModal);

  return (
    <>
      {showModal &&
        createPortal(
          <div
            className="modal-portal-cover"
            onClick={(e) => {
              if (e.target !== e.currentTarget) return;
              if (onClose) onClose();
            }}
          >
            <div className="modal-portal" {...props}>
              <button className="cancel-btn" onClick={onClose}>
                <XMark />
              </button>
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
