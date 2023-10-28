export default function SellerRes(props: any) {
  let statusColor = "";
  let btnColor = "";
  let btnText = "";
  let isRejected = false;
  if (props.status === "Accepted") {
    statusColor = "#2DA926";
    btnColor = "#5AD94E";
    btnText = "Check & Confirm";
  } else if (props.status === "Pending") {
    statusColor = "#267AA9";
    btnColor = "#ABA3A3";
    btnText = "Confirm";
  } else if (props.status === "Rejected") {
    statusColor = "#DE005D";
    btnColor = "#DE0043";
    btnText = "Delete";
    isRejected = true;
  }
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

        <p
          className="m-auto px-3 py-1 rounded-lg text-white text-sm font-medium"
          style={{ background: statusColor }}
        >
          {props.status}
        </p>
      </div>
      <div className="ml-2 flex">
        <button
          className="text-white border-none py-1 px-2 font-semibold text-sm rounded-lg mr-2"
          style={{ background: btnColor }}
        >
          {btnText}
        </button>
        {!isRejected ? (
          <button className="text-[#ABA3A3] bg-white border-[#ABA3A3] border-[1.5px] py-1 px-2 font-semibold text-sm rounded-lg">
            Cancel
          </button>
        ) : null}
      </div>
      <hr className="w-full h-[2px] bg-[#D9D9D9] my-4" />
    </div>
  );
}
