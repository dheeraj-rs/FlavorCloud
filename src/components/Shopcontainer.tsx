import FoodCard from "./Foodcard"

function Shopcontainer() {
  return (
    <div className="w-full h-[calc(100vh-80px)]  p-5 bg-slate-400 flex flex-wrap gap-y-10  gap-x-10 justify-center overflow-x-scroll">
    <FoodCard/>
   
  
  </div>
  
  )
}

export default Shopcontainer