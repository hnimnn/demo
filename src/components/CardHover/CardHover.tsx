import React, { ReactNode } from "react";
import "./CardHover.scss";
export type CardHoverProps = {
  children: ReactNode;
  content: ReactNode;
};

const CardHover = ({ children, content }: CardHoverProps) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const contentCoverRef = React.useRef<HTMLDivElement>(null);
  const [cursorPositionY, setCursorPositionY] = React.useState(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const tableRect = document.querySelector(".table")?.getBoundingClientRect();
    const cardHoverRect = contentCoverRef.current?.getBoundingClientRect();
    if (e.clientY - 30 < (tableRect?.top || 0) + 60) {
      setCursorPositionY(y);
    } else setCursorPositionY(y - 30);
    if (
      e.clientY + (cardHoverRect?.height || 0) - 30 >
      (tableRect?.bottom || 0)
    ) {
      setCursorPositionY(y - (cardHoverRect?.height || 0));
    }
  };
  React.useLayoutEffect(() => {
    setCursorPositionY(
      0 - (contentCoverRef.current?.getBoundingClientRect().height || 0)
    );
    const handleResize = () => {
      if (cardRef.current && contentCoverRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const cardHoverRect = contentCoverRef.current.getBoundingClientRect();
        const tableRect = document
          .querySelector(".table")
          ?.getBoundingClientRect();
        if (cardRect.right + cardHoverRect.width > (tableRect?.right || 0)) {
          contentCoverRef.current.style.right = `calc(${cardRef.current?.offsetWidth}px)`;
          contentCoverRef.current.style.left = `unset`;
        } else {
          contentCoverRef.current.style.left = `calc(${cardRef.current?.offsetWidth}px)`;
          contentCoverRef.current.style.right = `unset`;
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="card-cover">
      <div
        onMouseEnter={handleMouseMove}
        ref={cardRef}
        className="card-trigger"
      >
        {children}
        <div
          ref={contentCoverRef}
          style={{
            top: `calc(${cursorPositionY}px)`,
          }}
          className="card-hover-wrap"
        >
          <div className="content-cover">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default CardHover;
