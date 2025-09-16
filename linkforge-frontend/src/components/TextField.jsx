import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const TextField = ({
  label,
  id,
  type,
  errors,
  register,
  required,
  message,
  className,
  min,
  value,
  placeholder,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = isPasswordVisible ? "text" : type;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <input
          type={inputType}
          id={id}
          placeholder={placeholder}
          className={`
            w-full p-3 border rounded-md outline-none transition
            focus:border-blue-500 focus:shadow-sm 
            ${errors[id] ? "border-red-500" : "border-gray-300"}
          `}
          {...register(id, {
            required: { value: required, message },
            minLength: min
              ? { value: min, message: "Minimum 6 character is required" }
              : null,
            pattern:
              type === "email"
                ? {
                    value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+com+$/,
                    message: "Invalid email",
                  }
                : type === "url"
                ? {
                    value:
                      /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                    message: "Please enter a valid url",
                  }
                : null,
          })}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-800"
            aria-label="Toggle password visibility"
          >
            {isPasswordVisible ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </button>
        )}
      </div>

      {errors[id]?.message && (
        <p className="text-sm font-medium text-red-600 mt-1">
          {errors[id]?.message}
        </p>
      )}
    </div>
  );
};

export default TextField;
