"use client";

import { signup } from "@/api";
import InputBox from "@/components/Input/InputBox";
import { userStore } from "@/model/User";
import { CapturedLink } from "@/routing/CapturedLink";
import useCapturedRouting from "@/routing/useCapturedRouting";
import { when } from "mobx";
import { observer } from "mobx-react";
import { useState } from "react";
import { toast } from "react-toastify";
const Page = observer(() => {
  // const { setToken } = useContext(UserContext);
  const { push } = useCapturedRouting();
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputbox = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Enter Student ID",
      errorMessage: "It should be a valid email address!",
      label: "Student ID",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "text",
      placeholder: "Enter Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { result: token, error } = await signup(
      values.email,
      values.password
    );
    if (token) {
      when(() => userStore.token === token).then(() => push("/editProfile"));
      userStore.setToken(token);
    } else {
      toast("An error occurred: " + error);
    }
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col justify-between px-10 pt-10 pb-24 w-full h-full">
        <div>
          <img src="Logo2.svg" className="w-66 mb-4" alt="CUGetLove" />
          <h1 className="text-[24px] font-bold mb-16">Create Account</h1>
          <form onSubmit={handleSubmit}>
            {inputbox.map((input) => (
              <InputBox key={input.id} {...input} onChange={onChange} />
            ))}
            <div className="w-full flex justify-center mb-2 pt-4">
              <p className="text-[#ABA3A3] text-base font-medium">
                Already have an account?
              </p>
              <CapturedLink href="/login">
                <p className="text-base font-bold ml-2">Login</p>
              </CapturedLink>
            </div>
            <button
              type="submit"
              className="bg-[#E23A7A] text-white border-none py-3 w-full flex items-center justify-center font-semibold text-2xl rounded-xl"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});
export default Page;
