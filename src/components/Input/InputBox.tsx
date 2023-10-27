export default function InputBox(props: any) {
  return (
    <div className="relative flex flex-col w-full mb-3">
      <p className="text-base font-bold">{props.section}</p>
      <form action="">
        <input
          type="text"
          autoComplete="off"
          placeholder={props.text}
          className="w-full py-3 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-3xl border-2 border-[#C2BEBE] "
        />
      </form>
    </div>
  );
}
