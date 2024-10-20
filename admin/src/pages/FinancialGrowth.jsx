import { LineChart } from "../components/LineChart"
import { NavBar } from "../navbar/NavBar"
export function FinancialGrowth(){
    return<div>
         <NavBar/>
        Financial Growth
        <div className="md:flex grid grid-rows-2 grid-flow-col gap-4 p-5">
        <LineChart values={[45,56,78,32,12,46]} title="Reliance"/>
        <LineChart values={[80, 70, 90, 75, 85,90]} title="Vijaya Sales"/>
        <LineChart values={[145,56,78,32,12,146]} title="Poojara"/>
        <LineChart values={[80, 70, 190, 75, 185]} title="Aditya Vision"/>
        </div>
    </div>
}