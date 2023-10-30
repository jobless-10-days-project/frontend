'use client';
import { CapturedLink } from "@/routing/CapturedLink"
import { useEffect } from "react"

export default function StudentCard(props: any) {
    const faculties = ['Engineering', 'Dentistry', 'Vet', 'Psychology', 'Law', 'Political']
    const colors = ['#640000', '#4DAED7', '#2DA926', '#EEBD5C', '#8A34CD', '#FF8E25', '#00069B']
    const color = colors[faculties.indexOf(props.faculty)]
    useEffect(() => console.log(props.previewPicture))
    return (
        <CapturedLink href={"/detail/" + props.studentId} className={`outline outline-2 ml-auto mr-auto mb-1 w-[8.5rem] h-[20rem] rounded-[20px]  overflow-hidden shadow-lg relative`} style={{ outlineColor: color }}>
            <img src={props.previewPicture} className="h-full align-top object-cover block" alt="student-card-image" />
            <div className="h-[9.5rem] w-full rounded-[15px] bg-white absolute bottom-0 z-10 font-['Sarabun'] overflow-hidden">
                <div className="max-w-fit ml-2 mt-3 text-[0.68rem] text-center text-white rounded-[9px] px-3 py-1 font-thin bg-blue-100" style={{ backgroundColor: color }}>{props.faculty}</div>
                <p className="pl-3 font-semibold z-50 inline" style={{ color: color }}>|</p><p className="ml-1 font-thin text-sm inline">{`${props.gender} ปี ${props.degree}`}</p>
                <p className="px-3 font-medium text-sm">{props.nickname}</p>
                <p className="px-3 font-thin text-xs">{props.description}</p>
            </div>
        </CapturedLink>

    )
}