import BuyerInfo from "@/components/Incoming/BuyerInfo";

export default function page() {
  const Info = {
    image: "../meen.png",
    price: "10000",
  };

  const user = [
    {
      name: "Mode",
      image: "../meen2.jpeg",
      age: "20",
      gender: "ชาย",
    },
    {
      name: "Mean",
      image: "../meen3.jpeg",
      age: "21",
      gender: "ชาย",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="w-full h-full p-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold">Your Price is</p>
            <p className="text-[#2DA926] text-4xl font-bold">{Info.price}</p>
            <p className="text-2xl font-bold">bulbs/request</p>
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
          <h1 className="text-2xl font-bold mb-3">Incoming Requests</h1>
          <div className="grid grid-cols-4">
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Picture
            </p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Nickname
            </p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">Age</p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Gender
            </p>
          </div>
          <hr className="w-full h-[2px] bg-[#D9D9D9] my-4" />
          <div>
            {user.map((props, index) => (
              <BuyerInfo key={index} {...props} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
