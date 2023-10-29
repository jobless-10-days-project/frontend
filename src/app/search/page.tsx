"use client";

import { FilterUserDto, UserDto } from "@/api/type";
import StudentCard from "@/components/Homepage/StudentCard";
import LoadingUser from "@/components/LoadingUser";
import { UserContext } from "@/contexts/User";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Search() {
    const { token } = useContext(UserContext);
    const searchParams = useSearchParams();
    const degree = searchParams.get('degree')
    const age = searchParams.get('age')
    const filter_search: FilterUserDto = {
        nickname: searchParams.get('nickname') || undefined,
        faculty: searchParams.get('faculty') || undefined,
        degree: degree ? parseInt(degree) : undefined,
        age: age ? parseInt(age) : undefined,
        gender: searchParams.get('gender') || undefined,
    }

    const [filteredStudent, setFilteredStudent] = useState<UserDto[] | undefined>();

    const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
    };

    const param = useParams()
    useEffect(() => {
        setFilteredStudent(undefined);
        axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/user/find/filter`,
            headers: headers,
            data: filter_search
        }).then(data => {
            setFilteredStudent(data.data.filter(v => {
                for (let prop in filter_search) {
                    if (filter_search[prop] == undefined) continue;
                    if (v[prop] != filter_search[prop]) return false;
                }
                return true;
            })
            )
        });
    }, [param]);

    return filteredStudent ? (
        <main>
            <div className="grid grid-cols-2 gap-5 content-center mt-[8rem]">
                {filteredStudent.map((props, index) => (<StudentCard key={index} {...props} />))}
            </div>
        </main>
    ) : (
        <LoadingUser />
    )


}
