import SellerInfo from "@/components/History/SellerInfo";

export default function page() {
  const user = [
    {
      name: "Median",
      image: "../meen2.jpeg",
      price: "10000",
      date: "20/08/2023",
    },
    {
      name: "Mode",
      image: "../meen3.jpeg",
      price: "30000",
      date: "21/08/2023",
    },
    {
      name: "SD",
      image: "../meen2.jpeg",
      price: "20000",
      date: "22/08/2023",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="w-full h-full p-8">
        <div className="flex justify-end mb-4">
          <div className=" flex justify-center items-center w-36 h-36">
            <img
              src="../meen.png"
              className="rounded-full w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-3">Purchase History</h1>
          <div className="grid grid-cols-4">
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Picture
            </p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">
              Nickname
            </p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">Price</p>
            <p className="m-auto text-[#ABA3A3] text-base font-medium">Date</p>
          </div>
          <hr className="w-full h-[2px] bg-[#D9D9D9] my-4" />
          <div>
            {user.map((props, index) => (
              <SellerInfo key={index} {...props} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
