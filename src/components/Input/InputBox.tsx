"use client";

import { useState } from "react";
import "./Input.css";

export default function InputBox(props: any) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: any) => {
    setFocused(true);
  };
  return (
    <div className="relative flex flex-col w-full mb-3">
      <label className="text-base font-bold">{label}</label>
      <form action="">
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
          className="w-full py-3 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-3xl border-2 border-[#C2BEBE] "
        />
        <span className="text-red-700 text-[13px] font-medium pl-1">
          {errorMessage}
        </span>
      </form>
    </div>
  );
}
