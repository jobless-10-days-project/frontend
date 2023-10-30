"use client";

import Dropdown from "@/components/Input/Dropdown";
import InputBox from "@/components/Input/InputBox";
import { BsCheck } from "react-icons/bs";
import { useState, useContext, useEffect } from "react";
import { CapturedLink } from "@/routing/CapturedLink";
import axios from "axios";
import { userStore } from "@/model/User";
import { reaction, when } from "mobx";
import { observer } from "mobx-react";
import { getUserProfile, updateUserProfile } from "@/api";
import { toast } from "react-toastify";
import useCapturedRouting from "@/routing/useCapturedRouting";

const Page = observer(() => {
  const router = useCapturedRouting();

  const [headers, setHeaders] = useState({
    "Content-Type": "application/json",
    Authorization: "Bearer " + userStore.token,
  });
  const [updating, setUpdating] = useState(false);

  const dropdown = [
    {
      id: 1,
      name: "faculty",
      section: "Faculty",
      text: "Please select your faculty",
      lists: [
        "Engineering",
        "Dentistry",
        "Vet",
        "Psychology",
        "Law",
        "Political",
      ],
      zIdex: "5",
    },
    {
      id: 2,
      name: "degree",
      section: "Degree",
      text: "Please select your degree",
      lists: ["1", "2", "3", "4"],
      zIdex: "4",
    },
    {
      id: 3,
      name: "gender",
      section: "Gender",
      text: "Please select your gender",
      lists: [
        "Ambigender",
        "Androgyne",
        "Androgynous",
        "Aporagender",
        "Autigender",
        "Bakla",
        "Bigender",
        "Binary",
        "Bissu",
        "Butch",
        "Calabai",
        "Calalai",
        "Cis",
        "Cisgender",
        "Cis female",
        "Cis male",
        "Cis man",
        "Cis woman",
        "Demi-boy",
        "Demiflux",
        "Demigender",
        "Demi-girl",
        "Demi-guy",
        "Demi-man",
        "Demi-woman",
        "Dual gender",
        "Faʻafafine",
        "Female",
        "Female to male",
        "Femme",
        "FTM",
        "Gender bender",
        "Gender diverse",
        "Gender gifted",
        "Genderfae",
        "Genderfluid",
        "Genderflux",
        "Genderfuck",
        "Genderless",
        "Gender nonconforming",
        "Genderqueer",
        "Gender questioning",
        "Gender variant",
        "Graygender",
        "Hijra",
        "Intergender",
        "Intersex",
        "Kathoey",
        "Māhū",
        "Male",
        "Male to female",
        "Man",
        "Man of trans experience",
        "Maverique",
        "Meta-gender",
        "MTF",
        "Multigender",
        "Muxe",
        "Neither",
        "Neurogender",
        "Neutrois",
        "Non-binary",
        "Non-binary transgender",
        "Omnigender",
        "Other",
        "Pangender",
        "Person of transgendered experience",
        "Polygender",
        "Sekhet",
        "Third gender",
        "Trans",
        "Trans*",
        "Trans female",
        "Trans male",
        "Trans man",
        "Trans person",
        "Trans woman",
        "Transgender",
        "Transgender female",
        "Transgender male",
        "Transgender man",
        "Transgender person",
        "Transgender woman",
        "Transfeminine",
        "Transmasculine",
        "Transsexual",
        "Transsexual female",
        "Transsexual male",
        "Transsexual man",
        "Transsexual person",
        "Transsexual woman",
        "Travesti",
        "Trigender",
        "Tumtum",
        "Two spirit",
        "Ultimate Humungousaur",
        "Vakasalewalewa",
        "Waria",
        "Winkte",
        "Woman",
        "Woman of trans experience",
        "X-gender",
        "X-jendā",
        "Xenogende",
      ],
      zIdex: "3",
    },
  ];

  const [values, setValues] = useState({
    nickname: "",
    age: "",
    faculty: "",
    degree: "",
    gender: "",
    description: "",
    price: "",
    lineId: "",
    previewPicture: "",
    supplementPictures: [],
  });

  useEffect(() => {
    reaction(
      () => userStore.token,
      (token) =>
        setHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        })
    );
    setValues(userStore.profile!);
    setIsCheck(!!userStore.profile?.sellingStatus);

    // axios
    //   .get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/find/me`, {
    //     headers: headers,
    //   })
    //   .then((data) => {
    //     // console.log(data.data[0]);
    //     setValues(data.data[0]);
    //   });
  }, []);

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const fileSelectedHandler = async (e: any) => {
    const imageForm = new FormData();
    imageForm.append("file", e.target.files[0]);
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/file`,
      data: imageForm,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + userStore.token,
      },
    }).then((data) => {
      console.log(data);
      axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/file/${data.data}`,
        headers: headers,
      }).then((newData) => {
        setValues({ ...values, [e.target.name]: newData.data });
      });
    });
  };

  const supfileSelectedHandler = async (e: any) => {
    let index = 0;
    if (e.target.name === "supplementPictures1") {
      index = 0;
    } else if (e.target.name === "supplementPictures2") {
      index = 1;
    } else if (e.target.name === "supplementPictures3") {
      index = 2;
    }
    const imageForm = new FormData();
    imageForm.append("file", e.target.files[0]);
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/file`,
      data: imageForm,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + userStore.token,
      },
    }).then((data) => {
      console.log(data);
      axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/file/${data.data}`,
        headers: headers,
      }).then((newData) => {
        let temp = { ...values };
        temp.supplementPictures[index] = newData.data;
        setValues(temp);
      });
    });
  };

  const submitForm = async () => {
    setUpdating(true);

    const result = await updateUserProfile(userStore.token!, {
      ...values,
      sellingStatus: isCheck,
    });
    console.log("server sent", result);
    if (result.result) {
      await userStore.updateProfile(result.result);
      router.push("/");
    } else {
      toast("An error occured: " + result.error);
    }

    setUpdating(false);
  };

  const [isCheck, setIsCheck] = useState(false);

  const inputbox = [
    {
      id: 1,
      name: "nickname",
      type: "text",
      placeholder: "Enter Nickname",
      label: "Nickname",
      required: true,
    },
    {
      id: 2,
      name: "age",
      type: "text",
      placeholder: "Enter Age",
      label: "Age",
      errorMessage: "Please only enter numeric characters only for your Age!",
      pattern: `^[0-9]+$`,
      required: true,
    },
    {
      id: 3,
      name: "description",
      type: "text",
      placeholder: "Enter Your Description / Bio",
      label: "Your Description / Bio",
      required: { isCheck },
    },
    {
      id: 4,
      name: "price",
      type: "text",
      placeholder: "Enter Your rent price",
      label: "Your Price",
      errorMessage: "Please only enter numeric characters only for your Price!",
      pattern: `^[0-9]+$`,
      required: { isCheck },
    },
    {
      id: 5,
      name: "lineId",
      type: "text",
      placeholder: "Enter Your LINE ID",
      label: "Your LINE ID",
      required: { isCheck },
    },
  ];

  return (
    <div
      className={`w-full h-screen ${
        updating
          ? "opacity-50 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
    >
      <div className="p-10 w-full">
        <p className="text-4xl font-bold mb-4">Edit Profile</p>
        <InputBox
          {...inputbox[0]}
          value={values.nickname}
          onChange={onChange}
        />
        <InputBox {...inputbox[1]} value={values.age} onChange={onChange} />

        <Dropdown
          name={dropdown[0].name}
          section={dropdown[0].section}
          text={dropdown[0].text}
          lists={dropdown[0].lists}
          zIndex={dropdown[0].zIdex}
          value={values.faculty}
          onChange={onChange}
        />

        <Dropdown
          name={dropdown[1].name}
          section={dropdown[1].section}
          text={dropdown[1].text}
          lists={dropdown[1].lists}
          zIndex={dropdown[1].zIdex}
          value={values.degree}
          onChange={onChange}
        />

        <Dropdown
          name={dropdown[2].name}
          section={dropdown[2].section}
          text={dropdown[2].text}
          lists={dropdown[2].lists}
          zIndex={dropdown[2].zIdex}
          value={values.gender}
          onChange={onChange}
        />
        <div className="relative flex flex-col w-full mb-3">
          <p className="text-base font-bold">Upload your preview picture</p>
          <form action="">
            <input
              type="file"
              onChange={(e) => fileSelectedHandler(e)}
              name="previewPicture"
              className="w-full  py-8 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
            />
          </form>
        </div>
        <div className="flex w-full pt-3">
          <div className="relative">
            {!isCheck ? (
              <div>
                <button
                  onClick={() => setIsCheck((prev) => !prev)}
                  className="bg-transparent w-8 h-8 cursor-pointer rounded-lg border-2 border-[#C2BEBE]"
                />
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setIsCheck((prev) => !prev)}
                  className="bg-transparent w-8 h-8 cursor-pointer rounded-lg border-2 border-black"
                />
                <BsCheck
                  onClick={() => setIsCheck((prev) => !prev)}
                  className="absolute -top-1 -left-1 opacity-100 cursor-pointer"
                  size={40}
                />
              </div>
            )}
          </div>
          <p className="text-base font-bold pl-4 pt-1">will you sell?</p>
        </div>
        {!isCheck ? null : (
          <div className="mt-4">
            <InputBox
              {...inputbox[2]}
              value={values.description}
              onChange={onChange}
            />
            <InputBox
              {...inputbox[3]}
              value={values.price}
              onChange={onChange}
            />
            <InputBox
              {...inputbox[4]}
              value={values.lineId}
              onChange={onChange}
            />
            <div className="relative flex flex-col w-full">
              <p className="text-base font-bold">
                Upload your supplement pictures <br /> (3 pictures)
              </p>
              <form action="">
                <input
                  type="file"
                  onChange={supfileSelectedHandler}
                  name="supplementPictures1"
                  className="w-full py-4 mb-2 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
                />
                <input
                  type="file"
                  onChange={supfileSelectedHandler}
                  name="supplementPictures2"
                  className="w-full py-4 mb-2 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
                />
                <input
                  type="file"
                  onChange={supfileSelectedHandler}
                  name="supplementPictures3"
                  className="w-full py-4 mb-2 placeholder-[#ABA3A3] text-base font-medium pl-4 rounded-xl border-2 border-[#C2BEBE] "
                />
              </form>
            </div>
          </div>
        )}
        <div className="flex w-full justify-around mt-4">
          <CapturedLink href="/">
            <button className="bg-white text-[#ABA3A3] border-2 border-[#D9D9D9] py-2 w-[120px] flex items-center justify-center font-semibold text-2xl rounded-2xl">
              Cancel
            </button>
          </CapturedLink>
          <button
            onClick={submitForm}
            className="bg-[#5AD94E] text-white border-none py-2 w-[120px] flex items-center justify-center font-semibold text-2xl rounded-2xl"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
});

export default Page;
