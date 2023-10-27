"use client";

import Dropdown from "@/components/Input/Dropdown";
import InputBox from "@/components/Input/InputBox";
import { BsCheck } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";

function page() {
  const inputbox = [
    {
      section: "Nickname",
      text: "Enter Nickname",
    },
    {
      section: "Age",
      text: "Enter Age",
    },
    {
      section: "Your Description / Bio",
      text: "Enter Your Description / Bio",
    },
    {
      section: "Your price",
      text: "Enter Your rent price",
    },
    {
      section: "Your LINE ID",
      text: "Enter Your LINE ID",
    },
  ];

  const dropdown = [
    {
      section: "Faculty",
      text: "Please select your faculty",
      lists: ["วิศวกรรมศาสตร์", "วิทยาศาสตร์", "นิติศาสตร์"],
    },
    {
      section: "Degree",
      text: "Please select your degree",
      lists: ["1", "2", "3", "4"],
    },
    {
      section: "Gender",
      text: "Please select your gender",
      lists: ["ชาย", "หญิง"],
    },
  ];

  const [isCheck, setIsCheck] = useState(false);
  return (
    <div className="w-full h-full">
      <div className="p-10 w-full">
        <p className="text-4xl font-bold mb-4">Edit Profile</p>
        <InputBox section={inputbox[0].section} text={inputbox[0].text} />
        <InputBox section={inputbox[1].section} text={inputbox[1].text} />
        <Dropdown
          section={dropdown[0].section}
          text={dropdown[0].text}
          lists={dropdown[0].lists}
          zIndex="5"
        />
        <Dropdown
          section={dropdown[1].section}
          text={dropdown[1].text}
          lists={dropdown[1].lists}
          zIndex="4"
        />
        <Dropdown
          section={dropdown[2].section}
          text={dropdown[2].text}
          lists={dropdown[2].lists}
          zIndex="3"
        />
        <div className="flex w-full pt-3">
          <div className="relative">
            {!isCheck ? (
              <div>
                <button
                  onClick={() => setIsCheck((prev) => !prev)}
                  className="bg-transparent w-8 h-8 cursor-pointer rounded-lg border-2 border-[#C2BEBE]"
                />
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setIsCheck((prev) => !prev)}
                  className="bg-transparent w-8 h-8 cursor-pointer rounded-lg border-2 border-black"
                />
                <BsCheck
                  onClick={() => setIsCheck((prev) => !prev)}
                  className="absolute -top-1 -left-1 opacity-100 cursor-pointer"
                  size={40}
                />
              </div>
            )}
          </div>
          <p className="text-base font-bold pl-4 pt-1">will you sell?</p>
        </div>
        {!isCheck ? null : (
          <div className="mt-4">
            <InputBox section={inputbox[2].section} text={inputbox[2].text} />
            <InputBox section={inputbox[3].section} text={inputbox[3].text} />
            <div className="relative flex flex-col w-full mb-3">
              <p className="text-base font-bold">Upload your preview picture</p>
              <form action="">
                <input
                  type="file"
                  className="w-full  py-8 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
                />
              </form>
            </div>
            <div className="relative flex flex-col w-full">
              <p className="text-base font-bold">
                Upload your supplement pictures <br /> (3 pictures)
              </p>
              <form action="">
                <input
                  type="file"
                  className="w-full py-4 mb-2 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
                />
                <input
                  type="file"
                  className="w-full py-4 mb-2 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
                />
                <input
                  type="file"
                  className="w-full py-4 mb-2 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
                />
              </form>
            </div>
          </div>
        )}
        <div className="flex w-full justify-around mt-4">
          <Link href="/">
            <button className="bg-white text-[#ABA3A3] border-2 border-[#D9D9D9] py-2 w-[120px] flex items-center justify-center font-semibold text-2xl rounded-2xl">
              Cancle
            </button>
          </Link>
          <Link href="/">
            <button className="bg-[#5AD94E] text-white border-none py-2 w-[120px] flex items-center justify-center font-semibold text-2xl rounded-2xl">
              Save
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
