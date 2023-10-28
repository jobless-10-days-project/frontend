"use client";
import React, { useEffect } from "react";
import ProfileBlock from "@/components/Detail/ProfileBlock";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Review from "@/components/Detail/Review";
import { useState } from "react";
import RentConfirm from "@/components/Detail/RentConfirm";
import axios from "axios";
import { UserDto } from "@/api/type";

export default function ProfileDetail({ params }: { params: any }) {
  const tmpToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjk4NDg0MDQ5LCJleHAiOjE2OTg0ODc2NDl9.dbWKptonm5YnidEHBIW2E2zfiUAlpLHYhgke386tMnc";
  const id = params.id;
  const star = [...Array(5)];

  const [details, setDetails] = useState<UserDto>();

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + tmpToken,
  };
  // 6532043021
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/stu/${id}`, {
        headers: headers,
      })
      .then((data) => {
        setDetails(data.data);
        console.log(data.data);
      });
  }, []);
  const [open, setOpen] = useState<Number>(0);
  const [reviewScore, setReviewScore] = useState<number>(0);

  return details ? (
    <main className="mt-[4.3rem] w-[20rem] mx-auto">
      {open ? (
        <div className="bg-gray-900 opacity-60 z-[1000] fixed top-0 left-0 w-full h-full duration-1000"></div>
      ) : (
        <div className="bg-gray-900 opacity-0 -z-50 fixed top-0 left-0 w-full h-full duration-1000"></div>
      )}
      <RentConfirm
        closePopup={() => setOpen(0)}
        {...{ ...details, state: open }}
      />
      {/* <ProfileBlock image={images} /> */}
      <div className="ml-auto mr-auto mt-2  font-['Sarabun']">
        <span className="font-bold"> {details.nickname} </span>
        <div className="inline max-w-fit ml-1 mt-3 text-[0.68rem] text-center text-white bg-red-900 rounded-[9px] px-3 py-1 font-thin">{`${details?.faculty} ปี ${details?.degree}`}</div>
        {details.sellingStatus ? (
          <div className="my-2">
            <span className="font-bold mr-1">Status:</span>
            <span className="font-bold text-[#229318]">พร้อมบริการ</span>
          </div>
        ) : (
          <div className="my-2">
            <span className="font-bold mr-1">Status:</span>
            <span className="font-bold text-red-600">ไม่พร้อมบริการ</span>
          </div>
        )}
        <p className="font-light text-xs my-1">{details.description}</p>
        <p className="font-light text-xs my-1">
          {" "}
          {`${details.price} bulbs / request`}
        </p>
        <p className="font-light text-xs my-1">{`Gender : ${details.gender}`}</p>
        <p></p>
      </div>
      <button
        onClick={() => setOpen(1)}
        className="my-5 h-[2rem] w-full bg-[#E23A7A] rounded-[10px] text-white font-[600] font-['Montserrat']"
      >
        Rent me
      </button>

      <div className="flex justify-center">
        <div className="bg-gray-200 w-[10rem] h-[1.5px] my-auto"></div>
        <p className="font-['Montserrat'] font-[600] mx-5">Reviews</p>
        <div className="bg-gray-200 w-[10rem] h-[1.5px] my-auto"></div>
      </div>

      <div className="outline outline-[0.5px] outline-gray-200 rounded-2xl my-2 font-['Sarabun'] flex-col">
        <div className="flex mx-8">
          <p className="font-bold mr-3 py-3">Add a review</p>
          {star.map((_, index) => (
            <button key={index} onClick={() => setReviewScore(index + 1)}>
              {index < reviewScore ? (
                <AiFillStar size={20} color="#EEBD5C" />
              ) : (
                <AiOutlineStar size={20} color="#EEBD5C" />
              )}
            </button>
          ))}
        </div>
        <form className="mx-8 mb-2 pb-1 flex-col relative" action="">
          <textarea
            className="w-full p-2 box-border outline outline-1 outline-gray-200 rounded-lg resize-none text-sm font-light"
            name="Review"
            rows={4}
            placeholder="Was it good?"
          ></textarea>
          <input
            className="bg-[#E23A7A] mr-0 ml-auto block my-1 py-1 px-3 rounded-xl text-white font-['Montserrat'] font-[500]"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <div className="flex ml-4">
        <p className="font-bold mr-3 py-3">{`Average: ${details.averageScore.toFixed(
          2
        )}`}</p>
        {star.map((_, index) => {
          if (index < details.averageScore)
            return (
              <div className="my-auto" key={index}>
                <AiFillStar size={20} color="#EEBD5C" />
              </div>
            );
          return (
            <div className="my-auto" key={index}>
              <AiOutlineStar size={20} color="#EEBD5C" />
            </div>
          );
        })}
      </div>
      <div className="bg-gray-100 rounded-xl p-5 flex-col font-['Sarabun']">
        <p className="font-bold">{`${details.reviews.length} reviews`}</p>
        {details.reviews.map((props, index) => (
          <Review key={index} {...props} />
        ))}
      </div>
    </main>
  ) : (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full h-[20rem] mx-auto mt-[13rem]">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
