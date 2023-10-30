"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import Searchbox from "./Searchbox";
import { CapturedLink } from "@/routing/CapturedLink";
import { observer } from "mobx-react";
import { userStore } from "@/model/User";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const navlinks = [
  {
    title: "Edit profile",
    link: "/editProfile",
  },
  {
    title: "Incoming request",
    link: "/incoming",
  },
  {
    title: "Response request",
    link: "/response",
  },
  {
    title: "Purchase history",
    link: "/history",
  },
];

const Navbar = observer((props: any) => {
  const { push } = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const colorlink = ["bg-[#F1367D]", "bg-[#BE2E65]"];

  const logout = async () => {
    await userStore.logout();
    toast("Logged out successfully.");
    push("/first");
  };
  // const { token, logout } = useContext(UserContext);
  return (
    <>
      <Searchbox state={searchOpen} closePopup={() => setSearchOpen(false)} />
      <main className="font-['Montserrat']">
        <div className="bg-[#E23A7A] fixed w-full z-50 top-0">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 "
                >
                  <FaBars />
                </button>
              </div>

              <CapturedLink href="/" className="md:block">
                <div className="flex items-baseline">
                  <img src="/Logo.svg" className="w-44" alt="CUGetLove" />
                </div>
              </CapturedLink>
              <div className="flex w-20 justify-between">
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-100"
                >
                  <img src="/SearchIcon.svg" alt="search-icon" />
                </button>

                <CapturedLink
                  href="/login"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-100"
                >
                  <img src="/Login.svg" alt="login-icon" />
                </CapturedLink>
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
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-100"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="flex justify-center items-center w-24 h-24">
                <img
                  src={userStore.profile?.previewPicture??''}
                  alt="profile picture"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center mt-2 pr-9">
                <div className="p-2 rounded-md text-gray-100">
                  <BsPersonFill />
                </div>
                <p className="text-gray-100 text-base font-medium">
                  {userStore.profile?.nickname}
                </p>
              </div>
              <div>
                <p className="text-gray-100 text-base font-medium">
                  Bulbs balance {userStore.profile?.balance}
                </p>
              </div>
            </div>

            <div className="ox-2 pt-2 pb-3 ">
              <div onClick={() => setOpen(false)}>
                {navlinks.map((link, index) => (
                  <CapturedLink
                    key={index}
                    className={`${
                      colorlink[index % 2]
                    } text-gray-100 block px-4 py-2 text-base font-medium`}
                    href={link.link}
                  >
                    {link.title}
                  </CapturedLink>
                ))}
                <div onClick={logout}>
                  <CapturedLink
                    className={`${
                      colorlink[colorlink.length % 2]
                    } text-gray-100 block px-4 py-2 text-base font-medium`}
                    href="/first"
                  >
                    Logout
                  </CapturedLink>
                </div>
              </div>
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
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-100"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="flex justify-center items-center w-24 h-24">
                <img
                  src={userStore.profile?.previewPicture??''}
                  alt="profile picture"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center mt-2 pr-9">
                <div className="p-2 rounded-md text-gray-100">
                  <BsPersonFill />
                </div>
                <p className="text-gray-100 text-base font-medium">
                  {userStore.profile?.nickname}
                </p>
              </div>
              <div>
                <p className="text-gray-100 text-base font-medium">
                  Bulbs balance {userStore.profile?.balance}
                </p>
              </div>
            </div>

            <div className="ox-2 pt-2 pb-3 ">
              {navlinks.map((link, index) => (
                <CapturedLink
                  key={index}
                  className={`${
                    colorlink[index % 2]
                  } text-gray-100 block px-4 py-2 text-base font-medium`}
                  href={link.link}
                >
                  {link.title}
                </CapturedLink>
              ))}
              <CapturedLink
                className={`${
                  colorlink[colorlink.length % 2]
                } text-gray-100 block px-4 py-2 text-base font-medium`}
                href="/first"
              >
                Logout
              </CapturedLink>
            </div>
          </div>
        )}
        {open || searchOpen ? (
          <div className="bg-gray-900 opacity-60 z-[1000] fixed top-0 left-0 w-full h-full duration-1000"></div>
        ) : (
          <div className="bg-gray-900 opacity-0 -z-50 fixed top-0 left-0 w-full h-full duration-1000"></div>
        )}
      </main>
    </>
  );
});

export default Navbar;
