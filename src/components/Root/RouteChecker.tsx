import { userEditedProfile } from "@/api";
import { UserContext } from "@/contexts/User";
import { beforeRouteChange } from "@/routing/routing";
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

export default function RouteChecker({
  children,
  userInitialized,
  setChecking,
}: {
  children: ReactNode;
  userInitialized: boolean;
  setChecking: (b: boolean) => void;
}) {
  const { token } = useContext(UserContext);
  const pathname = usePathname();
  const router = useRouter();

  /**
   * use router.push here to avoid checking in this function again when pushed.
   */
  const checkAuthRoute = async (target: string, push: boolean) => {
    if (skipCheckRoutes.some((r) => target.startsWith(r))) return true;

    if (!token) {
      if (mustAuthRoutes.some((r) => r(target))) {
        toast("Please login first.");
        if (push) router.push("/first");
        else return "/first";
      }
      return true;
    }

    const result = await userEditedProfile(token);
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
        else return "/editProfile";
      }
      return true;
    }
  };

  // check first time when user has just initialized
  useEffect(() => {
    if (userInitialized) {
      setChecking(true);
      checkAuthRoute(pathname, true);
      setChecking(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInitialized]);

  useEffect(() => {
    beforeRouteChange(async (target: string) => {
      if (userInitialized) {
        setChecking(true);
        const result = await checkAuthRoute(target, false);
        setChecking(false);
        return result;
      }
    });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
