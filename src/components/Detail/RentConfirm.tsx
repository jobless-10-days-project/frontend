
function Child(props: any) {
    return (
        <div className="flex-col h-full justify-between">
            <p className="font-bold text-xl">Are you sure?</p>
            <div className="flex justify-between mt-5">
                <p className="mt-5 font-bold text-2xl font-['Sarabun']">{props.name}</p>
                <div className="w-24 h-24 overflow-hidden rounded-full">
                    <img className="object-hidden" src={props.images[0]} alt="nasImage" />
                </div>
            </div>
            <div className="mt-3 py-2">
                <span className="text-3xl font-bold mr-5">Price</span>
                <span className="text-3xl font-semibold text-gray-300">{props.cost}</span>
            </div>
            <div className="w-full h-[0.1px] bg-gray-200"></div>

            <div className="w-full flex justify-between mt-auto items-end font-['Montserrat'] font-[600] absolute bottom-4 left-9">
                <button className="text-white bg-[#5AD94E] my-auto py-2 px-5 rounded-xl mr-10">Confirm</button>
                <button onClick={props.closePopup} className="p-4 text-gray-400 mr-auto">Cancel</button>
            </div>
        </div>
    )
}
export default function RentConfirm(props: any) {
    return props.state ?
        (
            <div className="z-[100000] top-[50%] left-[50%] -mt-60 -ml-40  w-[20rem] h-[25rem] fixed rounded-xl p-5 bg-white drop-shadow-md font-['Montserrat'] duration-1000 overflow-hidden">
                <Child {...props} />
            </div>
        ) :
        (
            <div className="z-[100000] top-[150%] left-[50%] -mt-60 -ml-40  w-[20rem] h-[25rem] fixed rounded-xl p-5 bg-white drop-shadow-md font-['Montserrat'] duration-1000 overflow-hidden">
                <Child {...props} />
            </div>
        )
}

