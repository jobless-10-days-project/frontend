import ConfirmRes from "@/components/Response/ConfirmRes";
import SellerRes from "@/components/Response/SellerRes";

export default function page() {
  const Info = {
    image: "../meen.png",
    total: "10000",
  };

  const user = [
    {
      name: "Mode",
      image: "../meen2.jpeg",
      price: "10000",
      status: "Accepted",
    },
    {
      name: "Mean",
      image: "../meen3.jpeg",
      price: "20000",
      status: "Pending",
    },
    {
      name: "SD",
      image: "../meen3.jpeg",
      price: "30000",
      status: "Rejected",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="w-full h-full p-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold">Total bulbs</p>
            <p className="text-[#2DA926] text-4xl font-bold">{Info.total}</p>
          </div>
          <div className="flex justify-center items-center w-36 h-36">
            <img
              src={Info.image}
              className="rounded-full w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-3">Response Requests</h1>
          <div className="grid grid-cols-4">
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Picture
            </p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Nickname
            </p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">Price</p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Status
            </p>
          </div>
          <hr className="w-full h-[2px] bg-[#D9D9D9] my-4" />
          <div>
            {user.map((props, index) => (
              <SellerRes key={index} {...props} />
            ))}
            {user.map((props, index) => {
              if (props.status === "Accepted")
                return <ConfirmRes key={index} {...props} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
