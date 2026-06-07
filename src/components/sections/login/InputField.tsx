import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  rightElement?: React.ReactNode;
  error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  rightElement,
  id,
  error,
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
        className={`w-full py-2 border-b text-gray-800 placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
          error
            ? "border-red-500 focus:border-red-600"
            : "border-gray-400 focus:border-black"
        }`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
};
