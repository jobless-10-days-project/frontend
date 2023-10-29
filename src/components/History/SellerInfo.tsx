export default function SellerInfo(props: any) {
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
        <p className="m-auto text-[#ABA3A3] text-base font-medium">
          {props.name}
        </p>
        <p className="m-auto  text-[#ABA3A3] text-base font-medium">
          {props.price}
        </p>
        <p className="m-auto  text-[#ABA3A3] text-base font-medium">
          {props.date}
        </p>
      </div>
      <div className="ml-2">
        <button className="bg-white border-[1.5px] border-[#ABA3A3] py-1 px-2 text-[#ABA3A3] font-semibold text-sm rounded-lg">
          Delete
        </button>
      </div>
      <hr className="w-full h-[2px] bg-[#D9D9D9] my-4" />
    </div>
  );
}
