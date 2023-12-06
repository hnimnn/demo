import React from "react";
import "./ButtonCheckbox.scss";
export type OptionType = {
  value: string | number;
  name: string | number;
};
export type ButtonCheckboxProps = {
  options: OptionType[];
  onChange?: (value: string | number) => void;
  styles?: StylesType;
  disabled?: boolean;
};
export type StylesType = {
  block: React.CSSProperties;
  button: React.CSSProperties;
  activeTab: React.CSSProperties;
};

export default function ButtonCheckbox({
  options,
  onChange,
  styles,
  disabled,
}: ButtonCheckboxProps) {
  const [active, setActive] = React.useState(0);
  const [positionActiveTab, setPositionActiveTab] = React.useState({
    left: NaN,
    right: NaN,
    top: NaN,
    bottom: NaN,
  });

  React.useLayoutEffect(() => {
    const activeElement = document.querySelector(".option-btn.active");
    if (activeElement) {
      const parent = activeElement.parentElement;
      if (parent) {
        const buttonRect = activeElement.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
        const position = {
          top: buttonRect.top - parentRect.top,
          bottom: parentRect.bottom - buttonRect.bottom,
          left: buttonRect.left - parentRect.left,
          right: parentRect.right - buttonRect.right,
        };
        setPositionActiveTab(position);
      }
    }
  }, [active]);
  return (
    <div
      style={styles?.block}
      className={`button-checkbox ${disabled ? "disabled" : ""}`}
    >
      {options.map((option, index) => (
        <button
          disabled={disabled}
          onClick={(e) => {
            setActive(index);
            if (onChange) onChange(option.value);
          }}
          style={{ width: `${100 / options.length}%`, ...styles?.button }}
          key={index}
          className={`option-btn ${active === index ? "active" : ""}`}
        >
          {option.name}
        </button>
      ))}
      <div
        style={{
          left: `calc(${positionActiveTab.left}px + 5px)`,
          right: `calc(${positionActiveTab.right}px + 5px)`,
          top: `5px`,
          bottom: `5px`,
          ...styles?.activeTab,
        }}
        className="active-tab"
      ></div>
    </div>
  );
}
