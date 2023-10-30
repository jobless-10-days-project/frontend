"use client";
import React, { useContext, useEffect } from "react";
import ProfileBlock from "@/components/Detail/ProfileBlock";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Review from "@/components/Detail/Review";
import { useState } from "react";
import RentConfirm from "@/components/Detail/RentConfirm";
import axios from "axios";
import { UserDto, ReviewDto } from "@/api/type";
import { UserContext } from "@/contexts/User";
import LoadingUser from "@/components/LoadingUser";

export default function ProfileDetail({ params }: { params: any }) {
    const { token } = useContext(UserContext)
    const id = params.id;
    const star = [...Array(5)];

    const [details, setDetails] = useState<UserDto>();
    const [userReview, setUserReview] = useState({});
    const [userRequest, setUserRequest] = useState({});
    const [submit, setSubmit] = useState<boolean>(false);

    const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
    };

    // TODO: useContext later
    const studentId = "1"

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/detail/${id}`, {
                headers: headers,
            })
            .then((data) => {
                console.log(data.data[0])
                setDetails(data.data[0]);
                setUserReview(data.data[0].reviews.find(val => val.studentId == studentId))
            });
    }, [submit]);

    const [open, setOpen] = useState<Number>(0);
    const [review, setReview] = useState({
        score: 0,
        text: ""
    });

    const submitReview = () => {
        setDetails(undefined)
        axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/review/${details._id}`, review, {
                headers: headers,
            })
            .then(data => {
                setSubmit(!submit)
                console.log(data)
            })
    }
    const deleteReview = () => {
        setDetails(undefined)
        axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/review/remove/${details._id}`, {}, {
                headers: headers,
            })
            .then(data => {
                setSubmit(!submit)
                console.log(data)
            })
    }
    const sentRequest = () => {
        setDetails(undefined)
        axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/request/send/${details._id}`, {}, {
                headers: headers,
            })
            .then(data => {
                setSubmit(!submit)
                console.log(data)
            })
    }

    return details ? (
        <main className="mt-[4.3rem] w-[20rem] mx-auto">
            {open ? (
                <div className="bg-gray-900 opacity-60 z-[1000] fixed top-0 left-0 w-full h-full duration-1000"></div>
            ) : (
                <div className="bg-gray-900 opacity-0 -z-50 fixed top-0 left-0 w-full h-full duration-1000"></div>
            )}
            <RentConfirm
                closePopup={() => setOpen(0)}
                confirm={sentRequest}
                {...{ ...details, state: open }}
            />
            {/* <ProfileBlock image={images} /> */}
            <div className="ml-auto mr-auto mt-2  font-['Sarabun']">
                <p className="font-bold inline"> {details.nickname} </p>
                <div className="inline max-w-fit ml-1 mt-3 text-[0.68rem] text-center text-white bg-red-900 rounded-[9px] px-3 py-1 font-thin">{`${details?.faculty} ปี ${details?.degree}`}</div>
                {details.sellingStatus ? (
                    <div className="my-2">
                        <p className="inline font-bold mr-1">Status:</p>
                        <p className="inline font-bold text-[#229318]">พร้อมบริการ</p>
                    </div>
                ) : (
                    <div className="my-2">
                        <p className="inline font-bold mr-1">Status:</p>
                        <p className="inline font-bold text-red-600">ไม่พร้อมบริการ</p>
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
                {
                    !userReview ? (<main>
                        <div className="flex mx-8">
                            <p className="font-bold mr-3 py-3">Add a review</p>
                            {star.map((_, index) => (
                                <button key={index} onClick={() => setReview({ ...review, score: index + 1 })}>
                                    {index < review.score ? (
                                        <AiFillStar size={20} color="#EEBD5C" />
                                    ) : (
                                        <AiOutlineStar size={20} color="#EEBD5C" />
                                    )}
                                </button>
                            ))}
                        </div>
                        <form className="mx-8 mb-2 pb-1 flex-col relative" action="?">
                            <textarea
                                className="w-full p-2 box-border outline outline-1 outline-gray-200 rounded-lg resize-none text-sm font-light"
                                name="Review"
                                rows={4}
                                placeholder="Was it good?"
                                onChange={(e) => setReview({ ...review, text: e.target.value })}
                            ></textarea>
                            <input
                                className="bg-[#E23A7A] mr-0 ml-auto block my-1 py-1 px-3 rounded-xl text-white font-['Montserrat'] font-[500]"
                                type="submit"
                                value="Submit"
                                onClick={() => submitReview()}
                            />
                        </form>
                    </main>
                    ) :
                        (
                            <main>
                                <div className="flex mx-8">
                                    <p className="font-bold mr-3 py-3">Your review</p>
                                    {star.map((_, index) => (
                                        <button key={index} >
                                            {index < userReview.score ? (
                                                <AiFillStar size={20} color="#EEBD5C" />
                                            ) : (
                                                <AiOutlineStar size={20} color="#EEBD5C" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                                <form className="mx-8 mb-2 pb-1 flex-col relative" action="">
                                    <p
                                        className="w-full min-h-[5rem] p-2 mb-5 box-border outline outline-1 outline-gray-200 rounded-lg resize-none text-sm font-light"
                                    >{userReview.text}</p>
                                    <input
                                        className="bg-red-500 mr-0 ml-auto block my-1 py-1 px-3 rounded-xl text-white font-['Montserrat'] font-[500]"
                                        type="submit"
                                        value="Delete Review"
                                        onClick={() => deleteReview()}
                                    />
                                </form>
                            </main>
                        )
                }
            </div>
            <div className="flex ml-4">
                <p className="font-bold mr-3 py-3">{`Average: ${details.averageScore.toFixed(2)}`}</p>
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
                    (props.studentId == studentId) || <Review key={index} {...props} />
                ))}
            </div>
        </main>
    ) : (
        <LoadingUser />
    );
}
