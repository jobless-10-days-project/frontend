import { getUserProfile, userEditedProfile } from "@/api";
import { userStore } from "@/model/User";
import { beforeRouteChange } from "@/routing/routing";
import { reaction, when } from "mobx";
import { observer } from "mobx-react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useContext, useEffect } from "react";
import { toast } from "react-toastify";

const startsWith = (path: string) => (target: string) =>
  target.startsWith(path);

const mustAuthRoutes = [
  (target: string) => target === "/",
  startsWith("/history"),
  startsWith("/editProfile"),
  startsWith("/incoming"),
  startsWith("/response"),
  startsWith("/detail"),
];

const skipCheckRoutes = ["/first", "/login", "/register"];

const RouteChecker = observer(
  ({
    children,
    userInitialized,
    setChecking,
  }: {
    children: ReactNode;
    userInitialized: boolean;
    setChecking: (b: boolean) => void;
  }) => {
    // const { token } = useContext(UserContext);
    const pathname = usePathname();
    const router = useRouter();

    /**
     * use router.push here to avoid checking in this function again when pushed.
     */
    const checkAuthRoute = async (
      target: string,
      push: boolean,
      initial: boolean
    ) => {
      if (skipCheckRoutes.some((r) => target.startsWith(r))) return true;

      if (!userStore.token) {
        if (mustAuthRoutes.some((r) => r(target))) {
          toast("Please login first.");
          if (push) router.push("/first");
          return "/first";
        }
        return true;
      }

      const result = await userEditedProfile(userStore.token);
      const edited = result.result;
      if (edited === undefined) {
        toast("Your token has expired, please login again.");
        if (push) router.push("/first");
        return "/first";
      }

      if (!edited) {
        if (!target.startsWith("/editProfile")) {
          toast("Please edit your profile first");
          if (push) router.push("/editProfile");
          return "/editProfile";
        }
      }

      if (initial) {
        const result = await getUserProfile(userStore.token);
        const profile = result.result;
        if (profile) {
          const adding = when(() => userStore.profile != null);
          userStore.setProfile(profile);
          await adding;
        }
      }
      return true;
    };

    // check first time when user has just initialized
    useEffect(() => {
      if (userInitialized) {
        // reaction(
        //   () => userStore.profile, ,
        //   (profile) => console.log("profile now", JSON.stringify(profile))
        // );

        setChecking(true);
        checkAuthRoute(pathname, true, true).then(() => setChecking(false));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInitialized]);

    useEffect(() => {
      beforeRouteChange(async (target: string) => {
        // do not need to check for user initialization because any interaction involving
        // changing route would need user initialization to finish loading before interacting
        // anyway
        setChecking(true);
        const result = await checkAuthRoute(target, false, false);
        setChecking(false);
        return result;
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
  }
);

export default RouteChecker;
