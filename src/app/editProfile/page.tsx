"use client";

import Dropdown from "@/components/Input/Dropdown";
import InputBox from "@/components/Input/InputBox";
import { BsCheck } from "react-icons/bs";
import { useState, useContext, useEffect } from "react";
import { CapturedLink } from "@/routing/CapturedLink";
import axios from "axios";
import { userStore } from "@/model/User";
import { reaction } from "mobx";

export default function Page() {
  const [headers, setHeaders] = useState({
    "Content-Type": "application/json",
    Authorization: "Bearer " + userStore.token,
  });
  reaction(
    () => userStore.token,
    (token) =>
      setHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      })
  );

  const dropdown = [
    {
      id: 1,
      name: "faculty",
      section: "Faculty",
      text: "Please select your faculty",
      lists: [
        "Engineering",
        "Dentistry",
        "Vet",
        "Psychology",
        "Law",
        "Political",
      ],
      zIdex: "5",
    },
    {
      id: 2,
      name: "degree",
      section: "Degree",
      text: "Please select your degree",
      lists: ["1", "2", "3", "4"],
      zIdex: "4",
    },
    {
      id: 3,
      name: "gender",
      section: "Gender",
      text: "Please select your gender",
      lists: ["male", "female"],
      zIdex: "3",
    },
  ];

  const [values, setValues] = useState({
    nickname: "",
    age: "",
    faculty: "",
    degree: "",
    gender: "",
    description: "",
    balance: "",
    lineId: "",
    previewPicture: "",
    supplementPictures: [],
  });

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/find/me`, {
        headers: headers,
      })
      .then((data) => {
        console.log(data.data[0]);
        setValues(data.data[0]);
      });
  }, []);

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const fileSelectedHandler = async (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.files[0].name });
  };

  const supfileSelectedHandler = async (e: any) => {
    let index = 0;
    if (e.target.name === "supplementPictures1") {
      index = 0;
    } else if (e.target.name === "supplementPictures2") {
      index = 1;
    } else if (e.target.name === "supplementPictures3") {
      index = 2;
    }
    values.supplementPictures[index] = e.target.files[0].name;
  };

  const submitForm = () => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/update`,
        values,
        {
          headers: headers,
        }
      )
      .then((data) => {
        console.log(data);
      });
  };

  const [isCheck, setIsCheck] = useState(false);

  const inputbox = [
    {
      id: 1,
      name: "nickname",
      type: "text",
      placeholder: "Enter Nickname",
      label: "Nickname",
      required: true,
    },
    {
      id: 2,
      name: "age",
      type: "text",
      placeholder: "Enter Age",
      label: "Age",
      errorMessage: "Please only enter numeric characters only for your Age!",
      pattern: `^[0-9]+$`,
      required: true,
    },
    {
      id: 3,
      name: "description",
      type: "text",
      placeholder: "Enter Your Description / Bio",
      label: "Your Description / Bio",
      required: { isCheck },
    },
    {
      id: 4,
      name: "price",
      type: "text",
      placeholder: "Enter Your rent price",
      label: "Your Price",
      errorMessage: "Please only enter numeric characters only for your Price!",
      pattern: `^[0-9]+$`,
      required: { isCheck },
    },
    {
      id: 5,
      name: "lineId",
      type: "text",
      placeholder: "Enter Your LINE ID",
      label: "Your LINE ID",
      required: { isCheck },
    },
  ];
  console.log(values);
  return (
    <div className="w-full h-full">
      <div className="p-10 w-full">
        <p className="text-4xl font-bold mb-4">Edit Profile</p>
        <InputBox
          {...inputbox[0]}
          value={values.nickname}
          onChange={onChange}
        />
        <InputBox {...inputbox[1]} value={values.age} onChange={onChange} />

        <Dropdown
          name={dropdown[0].name}
          section={dropdown[0].section}
          text={dropdown[0].text}
          lists={dropdown[0].lists}
          zIndex={dropdown[0].zIdex}
          value={values.faculty}
          onChange={onChange}
        />

        <Dropdown
          name={dropdown[1].name}
          section={dropdown[1].section}
          text={dropdown[1].text}
          lists={dropdown[1].lists}
          zIndex={dropdown[1].zIdex}
          value={values.degree}
          onChange={onChange}
        />

        <Dropdown
          name={dropdown[2].name}
          section={dropdown[2].section}
          text={dropdown[2].text}
          lists={dropdown[2].lists}
          zIndex={dropdown[2].zIdex}
          value={values.gender}
          onChange={onChange}
        />
        <div className="relative flex flex-col w-full mb-3">
          <p className="text-base font-bold">Upload your preview picture</p>
          <form action="">
            <input
              type="file"
              onChange={(e) => fileSelectedHandler(e)}
              name="previewPicture"
              className="w-full  py-8 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
            />
          </form>
        </div>
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
            <InputBox
              {...inputbox[2]}
              value={values.description}
              onChange={onChange}
            />
            <InputBox
              {...inputbox[3]}
              value={values.balance}
              onChange={onChange}
            />
            <InputBox
              {...inputbox[4]}
              value={values.lineId}
              onChange={onChange}
            />
            <div className="relative flex flex-col w-full">
              <p className="text-base font-bold">
                Upload your supplement pictures <br /> (3 pictures)
              </p>
              <form action="">
                <input
                  type="file"
                  onChange={supfileSelectedHandler}
                  name="supplementPictures1"
                  className="w-full py-4 mb-2 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
                />
                <input
                  type="file"
                  onChange={supfileSelectedHandler}
                  name="supplementPictures2"
                  className="w-full py-4 mb-2 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
                />
                <input
                  type="file"
                  onChange={supfileSelectedHandler}
                  name="supplementPictures3"
                  className="w-full py-4 mb-2 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
                />
              </form>
            </div>
          </div>
        )}
        <div className="flex w-full justify-around mt-4">
          <CapturedLink href="/">
            <button className="bg-white text-[#ABA3A3] border-2 border-[#D9D9D9] py-2 w-[120px] flex items-center justify-center font-semibold text-2xl rounded-2xl">
              Cancel
            </button>
          </CapturedLink>
          <CapturedLink href="/">
            <button
              onClick={submitForm}
              className="bg-[#5AD94E] text-white border-none py-2 w-[120px] flex items-center justify-center font-semibold text-2xl rounded-2xl"
            >
              Save
            </button>
          </CapturedLink>
        </div>
      </div>
    </div>
  );
}