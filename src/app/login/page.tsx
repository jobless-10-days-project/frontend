"use client";

import { signin } from "@/api";
import InputBox from "@/components/Input/InputBox";
import { UserContext } from "@/model/User";
import axios from "axios";
import Link from "next/link";
import { FormEventHandler, useContext, useState } from "react";

export default function Page() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { setToken } = useContext(UserContext);

  const inputbox = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Enter Username of Email",
      label: "Username or Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { result: token, error } = await signin(
      values.email,
      values.password
    );
    if (token) {
      console.log(token);
      setToken(token);
    } else {
      alert("An error occurred: " + error);
    }
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col px-10 pt-10 pb-24 w-full h-full">
        <div>
          <img src="Logo2.svg" className="w-66 mb-4" alt="CUGetLove" />
          <h1 className="text-[24px] font-bold mb-4">Let's Sign you in.</h1>
          <p className="leading-10 text-[#ABA3A3] text-[24px] font-base mb-16">
            Welcome back
            <br /> You've been missed!
          </p>
          <form onSubmit={handleSubmit}>
            {inputbox.map((input, index) => (
              <InputBox key={input.id} {...input} onChange={onChange} />
            ))}

            <div className="w-full flex justify-center mb-2 pt-4">
              <p className="text-[#ABA3A3] text-base font-medium">
                Don't have an account?
              </p>
              <Link href="/register">
                <p className="text-base font-bold ml-2">Register</p>
              </Link>
            </div>

            <button
              type="submit"
              className="bg-black text-white border-none py-3 w-full flex items-center justify-center font-semibold text-2xl rounded-xl"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
