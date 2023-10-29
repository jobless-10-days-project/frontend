export default function SellerRes(props: any) {
  return (
    <div>
      <div className="mb-6 grid grid-cols-4">
        <div className="m-auto flex justify-center items-center w-16 h-16">
          <img
            src={props.image}
            className="rounded-full w-full h-full object-cover"
            alt=""
          />
        </div>
        <p className="m-auto  text-[#ABA3A3] text-base font-medium">
          {props.name}
        </p>
        <p className="m-auto  text-[#ABA3A3] text-base font-medium">
          {props.price}
        </p>

        <p className="m-auto  text-[#ABA3A3] text-base font-medium">
          {props.status}
        </p>
      </div>
      <div className="ml-2 flex justify-between w-5/12">
        <button className="bg-[#5AD94E] text-white border-none py-1 px-2 font-semibold text-sm rounded-lg">
          Accept
        </button>
        <button className="bg-[#FF4545] text-white border-none py-1 px-2 font-semibold text-sm rounded-lg">
          Decline
        </button>
      </div>
      <hr className="w-full h-[2px] bg-[#D9D9D9] my-4" />
    </div>
  );
}
