export function Card({title,values,Component}){
   return  <div className="w-96 h-96 ">
    <h2 className="text-lg font-bold ml-0">{title}</h2>
   <div className="w-80 h-80 bg-white rounded-lg shadow-lg  p-4"> 
   <h2 className="text-lg font-bold ml-0">{title}</h2>
      <Component/>
   </div>
   </div>
}