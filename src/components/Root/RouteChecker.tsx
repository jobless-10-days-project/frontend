import { userEditedProfile } from "@/api";
import { UserContext } from "@/contexts/User";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useContext, useEffect } from "react";
import { toast } from "react-toastify";

const mustAuthRoutes = [
  "/history",
  "/editProfile",
  "/incoming",
  "/response",
  "/detail",
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

  const checkAuthRoute = async () => {
    if (skipCheckRoutes.some((r) => pathname.startsWith(r))) return;

    if (!token) {
      if (mustAuthRoutes.some((r) => pathname.startsWith(r))) {
        toast("Please login first.");
        router.push("/first");
      }
      return;
    }

    const result = await userEditedProfile(token);
    const edited = result.result;
    if (edited === undefined) {
      toast("Your token has expired, please login again.");
      router.push("/first");
      return;
    }

    if (!edited) {
      if (!pathname.startsWith("/editProfile")) {
        toast("Please edit your profile first");
        router.push("/editProfile");
      }
      return;
    }
  };

  const checkRoutes = () => {
    setChecking(true);
    checkAuthRoute();
    setChecking(false);
  };

  // check first time when user has just initialized and every time pathname changes.
  useEffect(() => {
    if (userInitialized) checkRoutes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInitialized, pathname]);

  return <>{children}</>;
}
