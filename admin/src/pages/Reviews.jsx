import { DoughnutChart } from "../components/Doughnut";
import { NavBar } from "../navbar/NavBar";
export function Reviews(){
    return(
        <div className="flex flex-col items-center w-full h-full">
             <NavBar/>
        <div className="w-full my-5">
            <h1 className="text-5xl font-bold text-center">Reviews</h1>
        </div>
        <div className="flex gap-14 h-[40%]">
        <DoughnutChart values={[14,23,15,10]} title="Reliance"/>
        <DoughnutChart values={[23,24,13,9]} title="Vijaya Sales"/>
        <DoughnutChart values={[14,23,15,10]} title="Bajaj Electronics"/>
        <DoughnutChart values={[23,24,13,9]} title="Poojara"/>
        </div>
    </div>
    )

}