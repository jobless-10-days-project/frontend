import Link from "next/link"

export default function StudentCard(props: any) {
    return (
        <Link href={"/detail/" + props.id} className={`outline outline-2 ml-auto mr-auto mb-1 w-[8.5rem] h-[20rem] rounded-[20px]  overflow-hidden shadow-lg relative`} style={{ outlineColor: props.color }}>
            <img src={props.imageUrl} className="h-full align-top object-cover block" alt="student-card-image" />
            <div className="h-[9.5rem] w-full rounded-[15px] bg-white absolute bottom-0 z-10 font-['Sarabun'] overflow-hidden">
                <div className="max-w-fit ml-2 mt-3 text-[0.68rem] text-center text-white rounded-[9px] px-3 py-1 font-thin bg-blue-100" style={{ backgroundColor: props.color }}>{props.faculty}</div>
                <span className="pl-3  text-red-900 font-semibold">|</span><span className="ml-1 font-thin text-sm">{`${props.gender} ปี ${props.degree}`}</span>
                <p className="px-3 font-medium text-sm">{props.nickname}</p>
                <p className="px-3 font-thin text-xs">{props.description}</p>
            </div>
        </Link>

    )
}