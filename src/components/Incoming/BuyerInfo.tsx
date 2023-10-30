export default function BuyerInfo(props: any) {
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
          {props.nickname}
        </p>
        <p className="m-auto  text-[#ABA3A3] text-base font-medium">
          {props.age}
        </p>
        <p className="m-auto  text-[#ABA3A3] text-base font-medium">
          {props.gender}
        </p>
      </div>
    </div>
  );
}
