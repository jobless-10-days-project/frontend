"use client";
import Link from "next/link";
import { CSSProperties, PropsWithChildren } from "react";
import { fireBeforeRouteChange } from "./routing";
import { useRouter } from "next/navigation";

/**
 *
 * @see https://github.com/vercel/next.js/discussions/41934#discussioncomment-5377088
 */
export const CapturedLink: React.FC<
  PropsWithChildren<{ href: string; className?: string; style?: CSSProperties }>
> = ({ href, children, className, style }) => {
  //   useEffect(() => {
  //     return () => {
  //       NProgress.done();
  //     };
  //   }, []);
  const router = useRouter();

  const navigate = async () => {
    const next = await fireBeforeRouteChange(href);
    console.log('next', next)
    if (next === true) router.push(href); // must be boolean true
    else if (typeof next === "string") router.push(next);
  };

  return (
    <a style={style} className={className} onClick={navigate}>
      {children}
    </a>
  );
};
