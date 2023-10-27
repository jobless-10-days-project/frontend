"use client";

import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export default function Dropdown(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const lists = [...props.lists]
  return (
    <div
      className="relative flex flex-col w-full mb-3 "
      style={{ zIndex: Number(props.zIndex) }}
    >
      <p className="text-base font-bold">{props.section}</p>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" py-2 px-4 w-full flex items-center justify-between font-bold text-lg rounded-lg border-2 border-[#C2BEBE] "
      >
        <p className="text-[#ABA3A3] text-base font-medium pl-4">
          {selected ? selected : props.text}
        </p>

        {!isOpen ? (
          <AiOutlineCaretDown className="w-6 h-8 text-[#ABA3A3]" />
        ) : (
          <AiOutlineCaretUp className="w-6 h-8  text-[#ABA3A3]" />
        )}
      </button>

      {isOpen && (
        <div className="bg-white absolute top-20 flex flex-col items-start rounded-lg p-2 w-full border-2 border-[#C2BEBE]  ">
          {lists.map((item, index) => (
            <button key={index}
              onClick={() => (setSelected(item), setIsOpen(false))}
              className="bg-white w-full rounded-lg p-4 text-left border-2 border-[#dedbdb] border-b-[#C2BEBE] "
            >
              <h3 className="text-[#ABA3A3]">{item}</h3>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
