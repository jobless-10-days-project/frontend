import { CapturedLink } from "@/routing/CapturedLink";

export default function Page() {
  return (
    <div className="w-full h-full">
      <div className="p-10 w-full flex flex-col items-center">
        <p className="text-[42px] font-bold mb-4">Welcome to</p>
        <img src="Logo2.svg" className="w-66 mb-4" alt="CUGetLove" />
        <p className="text-[#ABA3A3] text-center w-3/4 mb-16">
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt
        </p>
        <div className="w-full h-32 flex flex-col justify-between">
          <CapturedLink href="/login">
            <button className="bg-black text-white border-none py-3 w-full flex items-center justify-center font-semibold text-2xl rounded-xl">
              Login
            </button>
          </CapturedLink>
          <CapturedLink href="/register">
            <button className="bg-[#E23A7A] text-white border-none py-3 w-full flex items-center justify-center font-semibold text-2xl rounded-xl">
              Register
            </button>
          </CapturedLink>
        </div>
      </div>
    </div>
  );
}
