import { NavLink } from "react-router-dom";
import { DoughnutChart } from "../components/Doughnut";
import { NavBar } from "../navbar/NavBar";
import ReactTypingEffect from 'react-typing-effect';
export function DashBoard(){
    return <div className="w-full h-full">
      <div className="h-[70px] flex justify-between" >
      <h1 className="text-5xl font-extrabold m-3">SOLOS.</h1>
      <div className="w-[30%] h-full flex justify-end px-5 items-center">
        <p className="text-lg font-light m-3 cursor-pointer">About Us</p>
        <p className="text-lg font-light m-3 cursor-pointer">Contact</p>
      </div>
      </div>
       <div className="text-center h-[40%] flex flex-col justify-evenly">
       <p className="text-7xl font-semibold">Welcome.</p>
       <ReactTypingEffect className="text-4xl" speed={50} eraseSpeed={150} eraseDelay={3000} text={['What can I help you with?']}/>
        {/* <p className="text-4xl ">What Can I Help With?</p> */}
       </div>

       <div className="pt-10 h-[160px] m-5 flex gap-10 justify-evenly w-[60%] mx-auto">
         <Card link="/stocks" mainTitle="Analyse Stocks" bottomMsg="Let's Analyse stocks" color={"#73bff5"}/>
         <Card link="/finance" mainTitle="Financial Growth" bottomMsg="Let's see our financial growth" color={"#347547"}/>
         <Card link="/reviews" mainTitle="Customer's Reviews" bottomMsg="Let's analyse customer's reviews" color={"#cf8a30"}/>
         <Card link="/news" mainTitle="News" bottomMsg="Let's see latest news around." color={"#c74650"}/>
       </div>
    </div>
    
      
      
  
}

function Card({link, mainTitle, bottomMsg, color}){
  return <NavLink to={link} className="cursor-pointer"> <div className="h-full w-[180px] flex hover:bg-slate-100 items-center rounded-xl border-solid border-2 border-gray-300  justify-center shadow-md hover:shadow-xl transition-all delay-75">
 
 <button className="px-4">
   <div className="flex flex-col justify-between h-full">
      <p className="text-md font-semibold mb-3" style={{color: color}}>{mainTitle}</p>
      <p className="text-sm text-gray-400 font-semibold">{bottomMsg}</p>
    </div>
   </button>
 
  </div>
  </NavLink>
}



 
