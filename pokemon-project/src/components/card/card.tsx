import { FC } from "react";
import {  useNavigate } from "react-router-dom";

interface CardProps {
  name: string;
  id: number;
  type: string;
  image: string;
}
const getTypeColor = (type: string) => {
    switch (type) {
        case "normal":
            return "text-gray-500";
        case "fire":
            return "text-red-500";
        case "water":
            return "text-blue-500";
        case "electric":
            return "text-yellow-500";
        case "grass":
            return "text-green-500";
        case "ice":
            return "text-cyan-500";
        case "fighting":
            return "text-orange-700";
        case "poison":
            return "text-purple-500";
        case "ground":
            return "text-yellow-700";
        case "flying":
            return "text-indigo-500";
        case "psychic":
            return "text-pink-500";
        case "bug":
            return "text-lime-500";
        case "rock":
            return "text-gray-700";
        case "ghost":
            return "text-indigo-700";
        case "dragon":
            return "text-violet-700";
        case "dark":
            return "text-gray-900";
        case "steel":
            return "text-gray-400";
        case "fairy":
            return "text-pink-300";
        default:
            return "text-black"; 
    }
};


const Card: FC<CardProps> = ({ name, id, type, image }) => {
    const navigate= useNavigate();
  return (
    <div className="flex flex-col bg-[#F0F3FF] w-full h-auto mt-4 justify-center p-3 rounded-3xl shadow-2xl gap-0.5"
    onClick={()=>navigate(`/details/${id}`)}>
      <div className="flex justify-between text-sm">
        <p className={`capitalize ${getTypeColor(type)}`}>{type}</p>
        <p>#{id}</p>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <img src={image} alt={name} className="w-full h-auto" />
      </div>
      <p className="text-lg font-bold text-center capitalize">{name}</p>
    </div>
  );
};

export default Card;