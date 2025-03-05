import { FC } from "react";
interface GridProps{
    isGrid:boolean;
    setIsGrid: (value: boolean) => void;
}
const GridOption:FC<GridProps>=({isGrid,setIsGrid})=>{
    return(
        <div className="flex">
            <div className={` ${!isGrid?"bg-[#3D4466]":"bg-[#0C1231]"} w-9 h-8 flex justify-center items-center rounded-l-lg`}
            onClick={()=>setIsGrid(false)}>
                <img src="Rectangle 54.png" alt="" className="w-2 h-2" />
            </div>
            <div className={` ${isGrid?"bg-[#3D4466]":"bg-[#0C1231]"} w-9 h-8 flex justify-center items-center rounded-r-lg border-l-2 border-[#97A0CC]`}
            onClick={()=>setIsGrid(true)}>
                <img src="Group 27.png" alt="" className="w-3 h-3" />
            </div>
           
        </div>
    )
}
export default GridOption;