"use client";

import { FilterUserDto, UserDto } from "@/api/type";
import StudentCard from "@/components/Homepage/StudentCard";
import LoadingUser from "@/components/LoadingUser";
import { userStore } from "@/model/User";
import axios from "axios";
import { reaction } from "mobx";
import { observer } from "mobx-react";
import { useParams, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Search = observer(() => {
  // const { token } = useContext(UserContext);
  const searchParams = useSearchParams();
  const degree = searchParams.get("degree");
  const age = searchParams.get("age");
  const filter_search: FilterUserDto = {
    nickname: searchParams.get("nickname") || undefined,
    faculty: searchParams.get("faculty") || undefined,
    degree: degree ? parseInt(degree) : undefined,
    age: age ? parseInt(age) : undefined,
    gender: searchParams.get("gender") || undefined,
  };

  const [filteredStudent, setFilteredStudent] = useState<
    UserDto[] | undefined
  >();

  const [headers, setHeaders] = useState({
    "Content-Type": "application/json",
    Authorization: "Bearer " + userStore.token,
  });
  reaction(
    () => userStore.token,
    (token) =>
      setHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      })
  );

  const param = useParams();
  useEffect(() => {
    setFilteredStudent(undefined);
    axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/find/filter`,
      headers: headers,
      data: filter_search,
    }).then((data) => {
      console.log(data.data);
      setFilteredStudent(
        data.data.filter((v) => {
          for (let prop in filter_search) {
            if (filter_search[prop] == undefined) continue;
            if (v[prop] != filter_search[prop]) return false;
          }
          return true;
        })
      );
    });
  }, [param]);

  return filteredStudent ? (
    filteredStudent.length ? (
      <main>
        <div className="grid grid-cols-2 gap-5 content-center mt-[8rem]">
          {filteredStudent.map((props, index) => (
            <StudentCard key={index} {...props} />
          ))}
        </div>
      </main>
    ) : (
      <main className="font-['Montserrat']">
        <p className="text-4xl font-bold text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] preline ">
          {" "}
          <pre>4🩷4</pre> Your 😘💗 Not Found
        </p>
      </main>
    )
  ) : (
    <LoadingUser />
  );
});
export default Search;
