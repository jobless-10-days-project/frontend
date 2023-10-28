export default function ConfirmRes(props: any) {
  return (
    <div>
      <div className="mb-6 grid grid-cols-4">
        <div className="m-auto flex justify-center items-center w-16 h-16">
          <img
            src={props.image}
            className="rounded-full w-full h-full"
            alt=""
          />
        </div>
        <p className="m-auto  text-[#ABA3A3] text-base font-medium">
          {props.name}
        </p>
        <p className="m-auto  text-[#ABA3A3] text-base font-medium">
          {props.price}
        </p>

        <p className="bg-[#77F515] m-auto px-3 py-1 rounded-lg text-white text-sm font-medium">
          Confirmed
        </p>
      </div>
      <div className="ml-2 flex">
        <button className="bg-[#06C755] text-white border-none py-1 px-4 font-semibold text-sm rounded-lg mr-2">
          LINE
        </button>
      </div>
      <hr className="w-full h-[2px] bg-[#D9D9D9] my-4" />
    </div>
  );
}
