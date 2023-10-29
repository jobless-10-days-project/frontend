"use client";
import { FilterUserDto } from "@/api/type";
import { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import InputBox from "./Input/InputBox";
import Dropdown from "./Input/Dropdown";
import { CapturedLink } from "@/routing/CapturedLink";
import { useParams } from "next/navigation";

function Child(props: any) {
    const [values, setValues] = useState({});
    const onChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        // name faculty degree age gender
        <div className="flex-col h-full justify-between mx-5">
            <div className="flex w-full my-2">
                <button onClick={props.closePopup} className="ml-auto">
                    <FaTimes size={20} />
                </button>
            </div>
            <p className="font-['Montserrat'] font-bold text-[1rem] text-center my-1">
                Let us help you find your person
            </p>
            <div className="w-full h-[2px] my-1 bg-gray-200"></div>
            <InputBox
                onChange={onChange}
                id={1}
                name="nickname"
                type="text"
                placeholder="Enter Nickname"
                label="Nickname"
                required={false}
            />
            <Dropdown
                onChange={onChange}
                id={2}
                name="faculty"
                value=""
                section="Faculty"
                text="Please select your faculty"
                lists={["Engineering", "วิทยาศาสตร์", "นิติศาสตร์"]}
                zIndex={5}
            />
            <InputBox
                onChange={onChange}
                id={3}
                name="degree"
                type="text"
                placeholder="Enter Degree"
                label="Degree"
                errorMessage="Please only enter numeric characters only for your Degree!"
                pattern={`^[0-9]+$`}
                required={false}
            />
            <InputBox
                onChange={onChange}
                id={4}
                name="age"
                type="text"
                placeholder="Enter Age"
                label="Age"
                errorMessage="Please only enter numeric characters only for your Age!"
                pattern={`^[0-9]+$`}
                required={false}
            />
            <Dropdown
                onChange={onChange}
                id={2}
                name="gender"
                value=""
                section="Gender"
                text="Please select your gender"
                lists={["Male", "Female"]}
                zIndex={5}
            />
            <CapturedLink href={`/search?${new URLSearchParams(values).toString()}`}>
                <div
                    onClick={props.closePopup}
                    className="w-full bg-[#E23A7A] h-[3rem] rounded-2xl text-white flex justify-center mt-10"
                >
                    <div className="my-auto mr-2">
                        <FaSearch size={25} />
                    </div>
                    <p className="font-['Montserrat'] text-2xl font-bold text-center my-auto">
                        Search
                    </p>
                </div>
            </CapturedLink>
        </div>
    );
}
export default function Searchbox(props: any) {
    return props.state ? (
        <div className="z-[100000] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[80vw] h-[40rem] fixed rounded-xl p-5 bg-white drop-shadow-md font-['Montserrat'] duration-1000 overflow-hidden">
            <Child {...props} />
        </div>
    ) : (
        <div className="z-[100000] top-[150%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80vw] h-[30rem] fixed rounded-xl p-5 bg-white drop-shadow-md font-['Montserrat'] duration-1000 overflow-hidden">
            <Child {...props} />
        </div>
    );
}