import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  rightElement?: React.ReactNode;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  rightElement,
  id,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full mb-5">
      <div className="flex justify-between items-center mb-1">
        <label
          htmlFor={id}
          className="text-xs font-bold tracking-wider text-gray-500 uppercase"
        >
          {label}
        </label>
        {rightElement}
      </div>
      <input
        id={id}
        className="w-full py-2 border-b border-gray-400 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition-colors duration-200"
        {...props}
      />
    </div>
  );
};
