import StudentCard from "@/components/Homepage/StudentCard"
import FacultyButton from "@/components/Homepage/FacultyButton"

export default function Home() {
  return (
    <main>
      <div className="w-full h-[11.125rem] shrink-0 bg-gradient-to-b from-[#E23A7A] to-[#FFB5D1] mt-[4.0rem]">
        <h2 className="text-white pt-10 pl-10 font-[700] text-xl">CU GET LOVE</h2>
        <p className="text-white pl-10 font-[400]">Lorem ipsum dolorque delectus dolores voluptatibus suscipit</p>
      </div>
      <div className="w-full h-[12.82rem] bg-gradient-to-r from-[#F7E0E0] from-52.4% to-[#FFF3D4] to-97.19%">
        <h1 className="flex justify-center items-center text-center text-[#E23A7A] text-2xl font-[600] pt-2">Faculty</h1>
        <div className="ml-7 mr-7 mt-4 grid grid-cols-3 gap-5">
          <FacultyButton name='ครุศาสตร์' icon='👨‍🏫' />
          <FacultyButton name='ทันตแพทย์' icon='🦷' />
          <FacultyButton name='สัตวแพทย์' icon='🐶' />
          <FacultyButton name='จิตวิทยา' icon='😵‍💫' />
          <FacultyButton name='นิติศาสตร์' icon='👩‍⚖️' />
          <FacultyButton name='รัฐศาสตร์' icon='🤵' />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-5 content-between content-center">
        <StudentCard faculty='วิศวกรรมศาสตร์' gender='ชาย' year={1} name='มีน' desc='คุณชายสุดหล่อรวยหนุ่มวิศวะสุดฮอตที่มาพร้อม' imageUrl='/meen2.jpeg' color="#00FF00" id={5} />
        <StudentCard faculty='วิศวกรรมศาสตร์' gender='ชาย' year={1} name='มีน' desc='คุณชายสุดหล่อรวยหนุ่มวิศวะสุดฮอตที่มาพร้อมกับความเย็นชาที่จะทำให้คุณหลงรัก' imageUrl='/meen2.jpeg' color="#FE0000" id={1234} />
        <StudentCard faculty='วิศวกรรมศาสตร์' gender='ชาย' year={1} name='มีน' desc='คุณชายสุดหล่อรวยหนุ่มวิศวะสุดฮอตที่มาพร้อมกับความเย็นชาที่จะทำให้คุณหลงรัก' imageUrl='/meen2.jpeg' color="#FE00FF" id={1234} />
        <StudentCard faculty='วิศวกรรมศาสตร์' gender='ชาย' year={1} name='มีน' desc='คุณชายสุดหล่อรวยหนุ่มวิศวะสุดฮอตที่มาพร้อมกับความเย็นชาที่จะทำให้คุณหลงรัก' imageUrl='/meen.png' color="#FEFF00" id={1234} />
        <StudentCard faculty='วิศวกรรมศาสตร์' gender='ชาย' year={1} name='มีน' desc='คุณชายสุดหล่อรวยหนุ่มวิศวะสุดฮอตที่มาพร้อมกับความเย็นชาที่จะทำให้คุณหลงรัก' imageUrl='/meen.png' color="#FEEF00" id={1234} />
        <StudentCard faculty='วิศวกรรมศาสตร์' gender='ชาย' year={1} name='มีน' desc='คุณชายสุดหล่อรวยหนุ่มวิศวะสุดฮอตที่มาพร้อมกับความเย็นชาที่จะทำให้คุณหลงรัก' imageUrl='/meen.png' color="#FE00E0" id={1234} />
        <StudentCard faculty='วิศวกรรมศาสตร์' gender='ชาย' year={1} name='มีน' desc='คุณชายสุดหล่อรวยหนุ่มวิศวะสุดฮอตที่มาพร้อมกับความเย็นชาที่จะทำให้คุณหลงรัก' imageUrl='/meen.png' color="#FE0F00" id={1234} />
        <StudentCard faculty='วิศวกรรมศาสตร์' gender='ชาย' year={1} name='มีน' desc='คุณชายสุดหล่อรวยหนุ่มวิศวะสุดฮอตที่มาพร้อมกับความเย็นชาที่จะทำให้คุณหลงรัก' imageUrl='/meen.png' color="#FE00E0" id={1234} />
      </div>
    </main>
  )
}