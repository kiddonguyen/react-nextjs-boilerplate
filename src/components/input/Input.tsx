import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
// import { useController } from 'react-hook-form';
import { useState } from 'react';
import { IconEyeClose, IconEyeOpen } from "../icons";
// Add React Hook Form
// const Input = ({ name = "", type = "text", children, control, ...props }) => {
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: string;
  children?: React.ReactNode;
  hasIcon?: boolean;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputIconClassName?: string;
};

/**
 * Renders an input component with optional icon and toggle password functionality.
 *
 * @param {Object} props - The properties for the Input component.
 * @param {string} [props.name] - The name of the input element.
 * @param {string} [props.type="text"] - The type of the input element (default: "text").
 * @param {ReactNode} [props.children] - Optional children to be rendered inside the input component.
 * @param {string} [props.className] - Optional class name for additional styling.
 * @param {boolean} [props.hasIcon=false] - Flag indicating whether the input has an icon (default: false).
 * @param {string} [props.placeholder="Enter your password"] - The placeholder text for the input element (default: "Enter your password").
 * @param {function} [props.onChange] - Callback function to be called when the input value changes (default: empty function).
 * @param {object} [props.props] - Additional props to be spread onto the input element.
 * @return {ReactElement} - The rendered input component.
 */
const Input = ({
  name = "",
  type = "text",
  children,
  className,
  hasIcon = false,
  placeholder = "Enter your password",
  onChange = () => {},
  ...props
}: InputProps): ReactElement => {
  // const { field } = useController({
  //   control,
  //   name,
  //   defaultValue: '',
  // });
  const [togglePassword, setTogglePassword] = useState(false);
  // const hasIcon                             = children ? true : false;
  const inputClasses       = twMerge(
    `px-${hasIcon ? "5" : "5"} py-5 ${hasIcon ? "pr-15" : ""}`,
    className,
    "bg-white border rounded-lg font-medium transition-all duration-200 ease-linear border-transparent",
    `focus:bg-white focus:border-primary w-full outline-none`
  );
  const inputIconClassName = `absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer`;
  const isInputHasIcon     = type === 'password' && hasIcon;
  if (isInputHasIcon) {
    // if input has icon, togglePassword false will set type is password, text otherwise
    type = togglePassword ? 'text' : 'password';
  }
  return (
    <div className="relative w-full">
      <input
        className={inputClasses}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        {...props}
      />
      {isInputHasIcon && (
        <div className={inputIconClassName}>
          {!togglePassword ? (
            <IconEyeClose onClick={() => setTogglePassword(true)} />
          ) : (
            <IconEyeOpen onClick={() => setTogglePassword(false)} />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
