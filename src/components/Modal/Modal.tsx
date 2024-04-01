import { createPortal } from "react-dom";
import "./Modal.scss";
import { ReactComponent as XMark } from "../../assets/icons/xmark-solid.svg";
import React, { ReactNode } from "react";

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  showModal: Boolean;
  children: ReactNode;
  title?: string;
  onClose?: () => void;
};
export default function Modal({
  showModal,
  children,
  title,
  onClose,
  ...props
}: ModalProps) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const timeoutRender = setTimeout(() => {
      console.log("run");

      if (showModal) {
        setShow(true);
      } else setShow(false);
    }, 200);
    return () => clearTimeout(timeoutRender);
  }, [showModal]);
  return (
    <>
      {show &&
        createPortal(
          <div
            className={`modal-portal-cover ${showModal ? "show" : ""}`}
            onClick={(e) => {
              if (e.target !== e.currentTarget) return;
              if (onClose) onClose();
            }}
          >
            <div
              className={`modal-portal ${showModal ? "show" : ""}`}
              {...props}
            >
              <div className="header">
                <p>{title}</p>
                <button className="cancel-btn" onClick={onClose}>
                  <XMark />
                </button>
              </div>
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
