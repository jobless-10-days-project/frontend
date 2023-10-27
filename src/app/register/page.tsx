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
    {
      section: "Confirm Password",
      text: "Confirm Password",
    },
  ];
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col justify-between px-10 pt-10 pb-24 w-full h-full">
        <div>
          <img src="Logo2.svg" className="w-66 mb-4" alt="CUGetLove" />
          <h1 className="text-[24px] font-bold mb-16">Create Account</h1>
          <InputBox section={inputbox[0].section} text={inputbox[0].text} />
          <InputBox section={inputbox[1].section} text={inputbox[1].text} />
          <InputBox section={inputbox[2].section} text={inputbox[2].text} />
        </div>
        <div>
          <div className="w-full flex justify-center mb-2">
            <p className="text-[#ABA3A3] text-base font-medium">
              Already have an account?
            </p>
            <Link href="/login">
              <p className="text-base font-bold ml-2">Login</p>
            </Link>
          </div>
          <Link href="/">
            <button className="bg-[#E23A7A] text-white border-none py-3 w-full flex items-center justify-center font-semibold text-2xl rounded-xl">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
