import React, { useState, useEffect, useRef, ReactElement } from "react";
import "./Dropdown.scss";
import { ReactComponent as DropdownIcon } from "../../assets/icons/caret-down-solid.svg";

export type stylesType = {
  listStyle: React.CSSProperties;
};
export type DropdownProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  options: string[];
  icon?: ReactElement;
  styles?: stylesType;
  defaultOption?: string;
  onOptionSelect: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onOptionSelect,
  icon,
  styles,
  defaultOption,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    defaultOption || options[0]
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(!isOpen);
    onOptionSelect(option);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown">
      <button
        {...props}
        className={`${props.className} dropdown-btn`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        {selectedOption || options[0]}
        <DropdownIcon width={9} />
      </button>
      {isOpen && (
        <ul className="dropdown-options" style={styles?.listStyle}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`dropdown-option ${
                option === selectedOption ? "active" : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
