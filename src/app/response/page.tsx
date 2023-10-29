"use client";

import CheckConfirm from "@/components/Response/CheckConfirm";
import ConfirmRes from "@/components/Response/ConfirmRes";
import SellerRes from "@/components/Response/SellerRes";
import { useState } from "react";

export default function page() {
  const Info = {
    image: "../meen.png",
    total: "10000",
  };

  const [seller, setSeller] = useState([
    {
      nickname: "Mode",

      image: "../meen2.jpeg",
      price: "10000",
      status: "Accepted",
      lineId: "modemode",
    },
    {
      nickname: "Moden",
      image: "../meen3.jpeg",
      price: "30000",
      status: "Accepted",
      lineId: "modenmoden",
    },
    {
      nickname: "Mean",
      image: "../meen3.jpeg",
      price: "20000",
      status: "Pending",
      lineId: "meanmean",
    },
    {
      nickname: "SD",
      image: "../meen3.jpeg",
      price: "30000",
      status: "Rejected",
      lineId: "sdsd",
    },
  ]);

  const [open, setOpen] = useState<Number>(0);
  const [confirm, setConfirm] = useState({});
  const [confirmList, setConfirmList] = useState<any[]>([]);
  const getBtnText = (props: any) => {
    let btnText = "";
    if (props.status === "Accepted") {
      btnText = "Check & Confirm";
    } else if (props.status === "Pending") {
      btnText = "Confirm";
    } else if (props.status === "Rejected") {
      btnText = "Delete";
    }
    return btnText;
  };

  const getBtnColor = (props: any) => {
    let btnColor = "";
    if (props.status === "Accepted") {
      btnColor = "#5AD94E";
    } else if (props.status === "Pending") {
      btnColor = "#ABA3A3";
    } else if (props.status === "Rejected") {
      btnColor = "#DE0043";
    }
    return btnColor;
  };

  const getIsRejected = (props: any) => {
    let isRejected = false;

    if (props.status === "Rejected") {
      isRejected = true;
    }
    return isRejected;
  };

  const getIsAccepted = (props: any) => {
    let isAccepted = false;

    if (props.status === "Accepted") {
      isAccepted = true;
    }
    return isAccepted;
  };

  const Accepted = (props: any) => {
    const update = seller.filter((element) => {
      return element !== props;
    });
    setSeller(update);
  };
  const cancelAccepted = (props: any, index: Number) => {
    const newseller = seller.filter((_, i) => i !== index);
    setSeller(newseller);
  };

  const cancelPending = (props: any, index: Number) => {
    const newseller = seller.filter((_, i) => i !== index);
    setSeller(newseller);
  };

  const Delete = (props: any, index: Number) => {
    const newseller = seller.filter((_, i) => i !== index);
    setSeller(newseller);
  };

  const addConfirm = (props: any) => {
    const isFound = confirmList.some((element) => {
      if (element === props) {
        return true;
      }
      return false;
    });
    if (!isFound) {
      setConfirmList([...confirmList, props]);
    }
    Accepted(props);
  };
  console.log(confirmList);
  return (
    <div className="w-full h-full">
      {open ? (
        <div className="bg-gray-900 opacity-60 z-[1000] fixed top-0 left-0 w-full h-full duration-1000"></div>
      ) : (
        <div className="bg-gray-900 opacity-0 -z-50 fixed top-0 left-0 w-full h-full duration-1000"></div>
      )}
      <CheckConfirm
        closePopup={() => setOpen(0)}
        confirmPopup={() => (addConfirm(confirm), setOpen(0))}
        {...{ ...confirm, state: open }}
      />
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
            {seller.map((props, index) => (
              <div key={index}>
                <SellerRes key={index} {...props} />
                <div className="ml-2 flex">
                  {getIsAccepted(props) ? (
                    <div>
                      <button
                        onClick={() => (setConfirm(props), setOpen(1))}
                        className="text-white border-none py-1 px-2 font-semibold text-sm rounded-lg mr-2"
                        style={{ background: getBtnColor(props) }}
                      >
                        {getBtnText(props)}
                      </button>

                      <button
                        onClick={() => cancelAccepted(props, index)}
                        className="text-[#ABA3A3] bg-white border-[#ABA3A3] border-[1.5px] py-1 px-2 font-semibold text-sm rounded-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : null}
                  {getIsRejected(props) ? (
                    <button
                      onClick={() => Delete(props, index)}
                      className="text-white border-none py-1 px-2 font-semibold text-sm rounded-lg mr-2"
                      style={{ background: getBtnColor(props) }}
                    >
                      {getBtnText(props)}
                    </button>
                  ) : null}
                  {!getIsRejected(props) && !getIsAccepted(props) ? (
                    <div>
                      <button
                        className="text-white border-none py-1 px-2 font-semibold text-sm rounded-lg mr-2"
                        style={{ background: getBtnColor(props) }}
                      >
                        {getBtnText(props)}
                      </button>
                      <button
                        onClick={() => cancelPending(props, index)}
                        className="text-[#ABA3A3] bg-white border-[#ABA3A3] border-[1.5px] py-1 px-2 font-semibold text-sm rounded-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : null}
                </div>
                <hr className="w-full h-[2px] bg-[#D9D9D9] my-4" />
              </div>
            ))}
            {confirmList.map((props, index) => {
              return <ConfirmRes key={index} {...props} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
