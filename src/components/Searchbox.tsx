'use client';
import { FilterUserDto } from "@/api/type";
import { useState } from "react";
import { FaTimes } from "react-icons/fa"

function Child(props: any) {
    const [values, setValues] = useState<FilterUserDto>({
        nickname: '',
        faculty: '',
        degree: 0,
        age: 0,
        gender: ''
    });
    const onChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        // name faculty degree age gender
        <div className="flex-col h-full justify-between">
            <div className="flex w-full mb-2">
                <button onClick={props.closePopup} className="ml-auto"><FaTimes size={20} /></button>
            </div>
            <p className="font-['Montserrat'] font-bold text-[1.2rem] text-center">Let us help you find your person</p>
            <div className="w-full h-[2px] my-1 bg-gray-200"></div>
            <p className="text-md font-bold mb-4">Name</p>
        </div>
    )
}
export default function Searchbox(props: any) {
    return props.state ?
        (
            <div className="z-[100000] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[80vw] h-[30rem] fixed rounded-xl p-5 bg-white drop-shadow-md font-['Montserrat'] duration-1000 overflow-hidden">
                <Child {...props} />
            </div>
        ) :
        (
            <div className="z-[100000] top-[150%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80vw] h-[30rem] fixed rounded-xl p-5 bg-white drop-shadow-md font-['Montserrat'] duration-1000 overflow-hidden">
                <Child {...props} />
            </div>
        )
}

