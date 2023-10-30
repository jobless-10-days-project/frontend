"use client";
import { FindMeDto } from "@/api/type";
import { makeAutoObservable, reaction } from "mobx";
import { observer } from "mobx-react";
import { useEffect } from "react";

export class UserStore {
  public token: string | null = null;
  public profile: FindMeDto | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public initialize() {
    this.setToken(localStorage.getItem("cugetloveJWT"));
  }

  public setToken(val: string | null) {
    this.token = val;
  }

  public setProfile(val: FindMeDto | null) {
    this.profile = val;
  }

  public logout() {
    this.setToken(null);
    localStorage.removeItem("cugetloveJWT");
  }
}

export const userStore = new UserStore();

// export type UserContextData = {
//   token: string | null;
//   setToken: (
//     newValue: string | null,
//     callback?: ((val: string | null) => void) | undefined
//   ) => void;
//   logout: () => void;
// };

// export const UserContext = createContext<UserContextData>({
//   token: null,
//   setToken: () => {},
//   logout: () => {},
// });

export const UserContextProvider = observer(
  ({
    children,
    store,
    finishedInitialize,
  }: {
    children: React.ReactNode;
    store: UserStore;
    finishedInitialize: () => void;
  }) => {
    // const { finishedInitialize } = props;
    // const router = useCapturedRouting();
    // const [token, setToken] = useStateCallback<string | null>(null);
    // const oldToken = usePrevious(token);

    // const logout = () => {
    //   router.push("/first");
    // };

    // load from local storage on mount
    useEffect(() => {
      reaction(
        () => store.token,
        (token, prevToken) => {
          if (prevToken !== token && token !== null)
            localStorage.setItem("cugetloveJWT", token);
        }
      );

      store.initialize();
      finishedInitialize();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    // if (oldToken !== token && token !== null)
    //   localStorage.setItem("cugetloveJWT", token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [token]);

    // const value = { token, setToken, logout };

    return <>{children}</>;
  }
);
