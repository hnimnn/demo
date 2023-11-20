import React, {
  useState,
  useEffect,
  useRef,
  ReactElement,
  StyleHTMLAttributes,
} from "react";
import "./Dropdown.scss";
import { ReactComponent as DropdownIcon } from "../../assets/icons/caret-down-solid.svg";

interface DropdownProps {
  options: string[];
  icon?: ReactElement;
  styles?: React.CSSProperties;
  onOptionSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onOptionSelect,
  icon,
  styles,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    options[0]
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
        style={styles || {}}
        className="dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        {selectedOption || options[0]}
        <DropdownIcon width={9} />
      </button>
      {isOpen && (
        <ul className="dropdown-options">
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
