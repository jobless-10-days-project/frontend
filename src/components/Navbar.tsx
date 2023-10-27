"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import Link from "next/link";

const navlinks = [
  {
    title: "Edit profile",
    link: "/editProfile",
  },
  {
    title: "Incoming request",
    link: "/",
  },
  {
    title: "Response request",
    link: "/",
  },
  {
    title: "Purchase history",
    link: "/",
  },
  {
    title: "Logout",
    link: "/first",
  },
];

export default function Navbar(props: any) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const colorlink = ["bg-[#F1367D]", "bg-[#BE2E65]"];
  return (
    <>
      <main className="font-['Montserrat']">
        <div className="bg-[#E23A7A] fixed w-full z-50 top-0">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={handleOpen}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 "
                >
                  <FaBars />
                </button>
              </div>

              <Link href="/" className="md:block">
                <div className="flex items-baseline">
                  <img src="/Logo.svg" className="w-44" alt="CUGetLove" />
                </div>
              </Link>
              <div className="flex w-20 justify-between">
                <button
                  type="button"
                  onClick={handleOpen}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-100"
                >
                  <img src="/SearchIcon.svg" alt="search-icon" />
                </button>

                <button
                  type="button"
                  onClick={handleOpen}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-100"
                >
                  <img src="/Login.svg" alt="login-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {open ? (
          <div className="bg-pink-600 z-[1050] fixed duration-1000 w-7/12 h-full top-0 left-0">
            <div className="flex items-center flex-col mb-10">
              <div className="flex justify-between px-3 py-2 w-full mb-3">
                <p className="text-gray-100  px-3 py-2  text-2xl font-medium">
                  Menu
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-100"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="rounded-full overflow-hidden w-24 h-24">
                <Image
                  src={props.profileImage}
                  alt="profile picture"
                  width={100}
                  height={100}
                />
              </div>

              <div className="flex items-center mt-2 pr-9">
                <div className="p-2 rounded-md text-gray-100">
                  <BsPersonFill />
                </div>
                <p className="text-gray-100 text-base font-medium">
                  Wiroonpuri
                </p>
              </div>
              <div>
                <p className="text-gray-100 text-base font-medium">
                  Bulbs balance 100000
                </p>
              </div>
            </div>

            <div className="ox-2 pt-2 pb-3 ">
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  className={`${colorlink[index % 2]
                    } text-gray-100 block px-4 py-2 text-base font-medium`}
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-pink-600 z-[1050] fixed duration-1000 w-7/12 top-0 -left-1 h-full -translate-x-full ">
            <div className="flex items-center flex-col mb-10">
              <div className="flex justify-between px-3 py-2 w-full mb-3">
                <p className="text-gray-100  px-3 py-2  text-2xl font-medium">
                  Menu
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-100"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="rounded-full overflow-hidden w-24 h-24">
                <Image
                  src={props.profileImage}
                  alt="profile picture"
                  width={100}
                  height={100}
                />
              </div>

              <div className="flex items-center mt-2 pr-9">
                <div className="p-2 rounded-md text-gray-100">
                  <BsPersonFill />
                </div>
                <p className="text-gray-100 text-base font-medium">
                  Wiroonpuri
                </p>
              </div>
              <div>
                <p className="text-gray-100 text-base font-medium">
                  Bulbs balance 100000
                </p>
              </div>
            </div>

            <div className="ox-2 pt-2 pb-3 ">
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  className={`${colorlink[index % 2]
                    } text-gray-100 block px-4 py-2 text-base font-medium`}
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
        {open ? (
          <div className="bg-gray-900 opacity-60 z-[1000] fixed top-0 left-0 w-full h-full duration-1000"></div>
        ) : (
          <div className="bg-gray-900 opacity-0 -z-50 fixed top-0 left-0 w-full h-full duration-1000"></div>
        )}
      </main>
    </>
  );
}
