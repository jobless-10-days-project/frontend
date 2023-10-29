"use client";
import Link from "next/link";
import { CSSProperties, PropsWithChildren } from "react";
import { fireBeforeRouteChange } from "./routing";

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

  return (
    <>
      <Link
        style={style}
        className={className}
        href={href}
        onClick={() => fireBeforeRouteChange(href)}
      >
        {children}
      </Link>
    </>
  );
};
