export default function UploadBox() {
  return (
    <div className="relative flex flex-col w-full mb-3">
      <p className="text-base font-bold">Upload your preview picture</p>
      <form action="">
        <input
          type="file"
          className="w-full  py-8 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
        />
      </form>
    </div>
  );
}
