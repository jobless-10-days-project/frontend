"use client";

import BuyerInfo from "@/components/Incoming/BuyerInfo";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Loadable from "next/dist/shared/lib/loadable.shared-runtime";
import LoadingUser from "@/components/LoadingUser";
import { reaction } from "mobx";
import { userStore } from "@/model/User";

export default function page() {
  const Info = {
    image: "../meen.png",
    price: "10000",
  };

  // const [user, setUser] = useState([
  //   {
  //     name: "Mode",
  //     image: "../meen2.jpeg",
  //     age: "20",
  //     gender: "ชาย",
  //   },
  //   {
  //     name: "Mean",
  //     image: "../meen3.jpeg",
  //     age: "21",
  //     gender: "ชาย",
  //   },
  // ]);

  const decline = (index: Number) => {
    const newuser = user.filter((_, i) => i !== index);
    setUser(newuser);
  };

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


  // 6532043021
  const [user, setUser] = useState()
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/find/me`, {
        headers: headers,
      })
      .then((data) => {
        console.log(data.data[0])
        setUser(data.data[0].incomingRequests);
      });
  }, []);

  const acceptRequest = (id: string) => {
    console.log(id)
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/request/accept/${id}`, {}, {
        headers: headers,
      })
      .then((data) => {
        console.log(data.data[0])
      });
  }
  const rejectRequest = (id: string) => {
    console.log(id)
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/request/reject/${id}`, {}, {
        headers: headers,
      })
      .then((data) => {
        console.log(data.data[0])
      });
  }

  return user ? (
    <div className="w-full h-full">
      <div className="w-full h-full p-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold">Your Price is</p>
            <p className="text-[#2DA926] text-4xl font-bold">{Info.price}</p>
            <p className="text-2xl font-bold">bulbs/request</p>
          </div>
          <div className="flex justify-center items-center w-36 h-36">
            <img
              src={Info.image}
              className="rounded-full w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-3">Incoming Requests</h1>
          <div className="grid grid-cols-4">
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Picture
            </p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Nickname
            </p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">Age</p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Gender
            </p>
          </div>
          <hr className="w-full h-[2px] bg-[#D9D9D9] my-4" />
          <div>
            {user.map((props, index) => (
              <div key={index}>
                <BuyerInfo key={index} {...props} />
                <div className="ml-2 flex justify-between w-5/12">
                  <button onClick={() => { decline(index), acceptRequest(props.userId) }} className="bg-[#5AD94E] text-white border-none py-1 px-2 font-semibold text-sm rounded-lg">
                    Accept
                  </button>
                  <button
                    onClick={() => { decline(index), rejectRequest(props.userId) }}
                    className="bg-[#FF4545] text-white border-none py-1 px-2 font-semibold text-sm rounded-lg"
                  >
                    Decline
                  </button>
                </div>
                <hr className="w-full h-[2px] bg-[#D9D9D9] my-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <LoadingUser />
  )
}
