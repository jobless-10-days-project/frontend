
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
export default function Review(props: any) {
    const star = [...Array(5)]
    return (
        <div className="p-5 rounded-xl flex-col my-5 bg-white min-h-[8rem]">
            <div className="flex justify-between">
                <div className="flex">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                        {/* <img src={props.profileImage} alt={`comment of ${props.name}`} /> */}
                    </div>
                    <span className="my-auto">{props.reviewerNickname}</span>
                </div>
                <div className="flex">
                    {
                        star.map((_, index) => {
                            if (index < props.reviewScore) return (<div className='my-auto' key={index}><AiFillStar size={20} color='#EEBD5C' /></div>)
                            return (<div className='my-auto' key={index}><AiOutlineStar size={20} color='#EEBD5C' /></div>)
                        })
                    }
                </div>
            </div>
            <p className="mt-3 font-light text-sm">
                {props.reviewerText}
            </p>
        </div>
    )
}
