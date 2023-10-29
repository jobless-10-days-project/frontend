"use client";

export default function Dropdown(props: any) {
  const lists = [...props.lists];

  const isEmpty = () => {
    if (props.value == "") {
      return false;
    }
    return true;
  };
  return (
    <div
      className="relative flex flex-col w-full mb-3 "
      style={{ zIndex: Number(props.zIndex) }}
    >
      <p className="text-base font-bold">{props.section}</p>

      <select
        className="bg-white text-[#ABA3A3] text-base font-medium pl-4 rounded-lg p-2 w-full border-2 border-[#C2BEBE]"
        onChange={props.onChange}
        name={props.name}
      >
        <option
          value={props.value}
          className=" bg-gray-300 text-[#ABA3A3] rounded-lg text-left border-2 border-[#dedbdb] border-b-[#C2BEBE] "
        >
          {isEmpty() ? props.value : props.text}
        </option>
        {lists.map((item, index) => (
          <option
            key={index}
            value={item}
            className="bg-white  text-[#ABA3A3] rounded-lg text-left border-2 border-[#dedbdb] border-b-[#C2BEBE] "
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
