export default function SellerRes(props: any) {
  let statusColor = "";

  if (props.status === "Accepted") {
    statusColor = "#2DA926";
  } else if (props.status === "Pending") {
    statusColor = "#267AA9";
  } else if (props.status === "Rejected") {
    statusColor = "#DE005D";
  }
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
          {props.price}
        </p>

        <p
          className="m-auto px-3 py-1 rounded-lg text-white text-sm font-medium"
          style={{ background: statusColor }}
        >
          {props.status}
        </p>
      </div>
    </div>
  );
}
