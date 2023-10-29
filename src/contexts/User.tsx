"use client";
import usePrevious from "@/hooks/usePrevious";
import useCapturedRouting from "@/routing/useCapturedRouting";
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
  finishedInitialize,
}: {
  children: React.ReactNode;
  finishedInitialize: () => void;
}) {
  // const { finishedInitialize } = props;
  const router = useCapturedRouting();
  const [token, setToken] = useState<string | null>(null);
  const oldToken = usePrevious(token);

  const logout = () => {
    setToken(null);
    localStorage.removeItem("cugetloveJWT");
    router.push("/first");
  };

  // load from local storage on mount
  useEffect(() => {
    setToken(localStorage.getItem("cugetloveJWT"));
    finishedInitialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (oldToken !== token && token !== null)
      localStorage.setItem("cugetloveJWT", token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const value = { token, setToken, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
