"use client"
import { UserContextProvider } from "@/contexts/User";
import { ReactNode, useState } from "react";
import Navbar from "../Navbar";

export default function Root({ children }: { children: ReactNode }) {
  const [userInitialized, setUserInitialized] = useState(false);

  return (
    <UserContextProvider finishedInitialize={() => setUserInitialized(true)}>
      {userInitialized ? (
        <>
          <Navbar profileImage="/meen.png" />
          <div className="mt-[4rem]"></div>

          {children}
        </>
      ) : (
        <h1>Loading..</h1>
      )}
    </UserContextProvider>
  );
}
