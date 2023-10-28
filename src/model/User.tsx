"use client";
import usePrevious from "@/app/hooks/usePrevious";
import { createContext, useEffect, useState } from "react";

export type UserContextData = {
  token: string | null;
  setToken: (s: string | null) => void;
};
export const UserContext = createContext<UserContextData>({
  token: null,
  setToken: () => {},
});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState<string | null>(null);
  const oldToken = usePrevious(token);

  // load from local storage on mount
  useEffect(() => {
    setToken(localStorage.getItem("cugetloveJWT"));
  }, []);

  useEffect(() => {
    if (oldToken !== token && token !== null) {
      localStorage.setItem("cugetloveJWT", token);
      console.log("saved to local storage");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const value = { token, setToken };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
