"use client";

import { UserDto } from "@/api/type";
import SellerInfo from "@/components/History/SellerInfo";
import { UserContext } from "@/contexts/User";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function page() {
  const [history, setHistory] = useState([
    {
      name: "Median",
      image: "../meen2.jpeg",
      price: "10000",
      date: "20/08/2023",
    },
    {
      name: "Mode",
      image: "../meen3.jpeg",
      price: "30000",
      date: "21/08/2023",
    },
    {
      name: "SD",
      image: "../meen2.jpeg",
      price: "20000",
      date: "22/08/2023",
    },
  ]);

  const removeElement = (index: Number) => {
    const newhistory = history.filter((_, i) => i !== index);
    setHistory(newhistory);
  };

  const { token } = useContext(UserContext)

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  // 6532043021
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/find/me`, {
        headers: headers,
      })
      .then((data) => {
        console.log(data.data[0])
        setHistory(data.data[0].purchaseHistories);
      });
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full p-8">
        <div className="flex justify-end mb-4">
          <div className=" flex justify-center items-center w-36 h-36">
            <img
              src="../meen.png"
              className="rounded-full w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-3">Purchase History</h1>
          <div className="grid grid-cols-4">
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Picture
            </p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Nickname
            </p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">Price</p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">Date</p>
          </div>
          <hr className="w-full h-[2px] bg-[#D9D9D9] my-4" />
          <div>
            {history.map((props, index) => (
              <div key={index}>
                <SellerInfo {...props} />
                <div className="ml-2">
                  <button
                    onClick={() => removeElement(index)}
                    className="bg-white border-[1.5px] border-[#ABA3A3] py-1 px-2 text-[#ABA3A3] font-semibold text-sm rounded-lg"
                  >
                    Delete
                  </button>
                </div>
                <hr className="w-full h-[2px] bg-[#D9D9D9] my-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
