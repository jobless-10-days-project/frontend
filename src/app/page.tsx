import StudentCard from "@/components/Homepage/StudentCard"
import FacultyButton from "@/components/Homepage/FacultyButton"

export default function Home() {
  const facultyButtons = [
    { name: 'ครุศาสตร์', icon: '👨‍🏫' },
    { name: 'ทันตแพทย์', icon: '🦷' },
    { name: 'สัตวแพทย์', icon: '🐶' },
    { name: 'จิตวิทยา', icon: '😵‍💫' },
    { name: 'นิติศาสตร์', icon: '👩‍⚖️' },
    { name: 'รัฐศาสตร์', icon: '🤵' }
  ]

  const studentCards = [
    { faculty: 'วิศวกรรมศาสตร์', gender: 'ชาย', year: 1, desc: 'คุณชายสุดหล่อรวยหนุ่มวิศวะสุดฮอตที่มาพร้อมกับความเย็นชาที่จะทำให้คุณหลงรัก', imageUrl: '/meen.png', color: "#00FF00", id: 1 },
    { faculty: 'วิศวกรรมศาสตร์', gender: 'ชาย', year: 2, desc: 'คุณชายสุดหล่อรวยหนุ่มวิศวะสุดฮอตที่มาพร้อมกับความเย็นชาที่จะทำให้คุณหลงรัก', imageUrl: '/meen2.jpeg', color: "#FF0000", id: 2 },
    { faculty: 'วิศวกรรมศาสตร์', gender: 'Helicopter', year: 3, desc: 'เอเลี่ยนประหลาด', imageUrl: '/meen3.jpeg', color: "#000000", id: 3 },
    { faculty: 'วิศวกรรมศาสตร์', gender: 'ชาย', year: 1, desc: 'คุณชายสุดหล่อรวยหนุ่มวิศวะสุดฮอตที่มาพร้อมกับความเย็นชาที่จะทำให้คุณหลงรัก', imageUrl: '/meen2.jpeg', color: "#32EF03", id: 4 },
  ]

  return (
    <main>
      <div className="w-full h-[11.125rem] shrink-0 bg-gradient-to-b from-[#E23A7A] to-[#FFB5D1] font-['Montserrat']">
        <h2 className="text-white pt-10 pl-10 font-[700] text-xl">CU GET LOVE</h2>
        <p className="text-white pl-10 font-[400]">Lorem ipsum dolorque delectus dolores voluptatibus suscipit</p>
      </div>
      <div className="w-full h-[12.82rem] bg-gradient-to-r from-[#F7E0E0] from-52.4% to-[#FFF3D4] to-97.19%">
        <h1 className="flex justify-center items-center text-center text-[#E23A7A] text-2xl font-[600] pt-2">Faculty</h1>
        <div className="ml-7 mr-7 mt-4 grid grid-cols-3 gap-5">
          {facultyButtons.map((props, index) => (<FacultyButton key={index} {...props} />))}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-5 content-center">
        {studentCards.map((props, index) => (<StudentCard key={index} {...props} />))}
      </div>
    </main>
  )
}