
export default function FacultyButton(props: any) {
    return (
        <button className="w-[5.33975rem] h-[3.3125rem] bg-red-50 focus:hover:bg-white rounded-[7px] flex-col mr-auto ml-auto items-center drop-shadow-md">
            <div className="pt-2">{props.icon}</div>
            <div className="text-center text-pink-600 text-xs font-semibold font-['Sarabun']">{props.name}</div>
        </button>
    )
}
