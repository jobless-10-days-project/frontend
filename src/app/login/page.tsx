import InputBox from "@/components/Input/InputBox";
import Link from "next/link";
export default function page() {
  const inputbox = [
    {
      section: "Username or Email",
      text: "Enter Username of Email",
    },
    {
      section: "Password",
      text: "Enter Password",
    },
  ];
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col justify-between px-10 pt-10 pb-24 w-full h-full">
        <div>
          <img src="Logo2.svg" className="w-66 mb-4" alt="CUGetLove" />
          <h1 className="text-[24px] font-bold mb-4">Let's Sign you in.</h1>
          <p className="leading-10 text-[#ABA3A3] text-[24px] font-base mb-16">
            Welcome back
            <br /> You've been missed!
          </p>
          <InputBox section={inputbox[0].section} text={inputbox[0].text} />
          <InputBox section={inputbox[1].section} text={inputbox[1].text} />
        </div>
        <div>
          <div className="w-full flex justify-center mb-2">
            <p className="text-[#ABA3A3] text-base font-medium">
              Don't have an account?
            </p>
            <Link href="/register">
              <p className="text-base font-bold ml-2">Register</p>
            </Link>
          </div>
          <Link href="/">
            <button className="bg-black text-white border-none py-3 w-full flex items-center justify-center font-semibold text-2xl rounded-xl">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
