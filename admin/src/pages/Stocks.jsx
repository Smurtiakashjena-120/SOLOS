import { Radar } from "react-chartjs-2";
import { LineChart } from "../components/LineChart";
import { RadarChart } from "../components/RadarChart";
import { NavBar } from "../navbar/NavBar";
export function Stocks(){
    return (
        <div className="flex flex-col items-center w-full h-full">
             <NavBar/>
        <div className="w-full my-5">
            <h1 className="text-5xl font-bold text-center">Stocks</h1>
        </div>
        <div className="md:flex grid grid-rows-2 grid-flow-col gap-10 p-5 overflow-x-auto w-[90%] h-auto my-10">
        <LineChart values={[45,56,78,32,12,46]} title="Reliance"/>
        <LineChart values={[80, 70, 90, 75, 85,90]} title="Vijaya Sales"/>
        <LineChart values={[145,56,78,32,12,146]} title="Poojara"/>
        <LineChart values={[80, 70, 190, 75, 185]} title="Aditya Vision"/>
        </div>
    </div>
    )
}