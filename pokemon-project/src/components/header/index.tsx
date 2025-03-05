import { FC } from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    isNeedSearch :boolean;
}
const Header: FC<HeaderProps>= ({isNeedSearch}) => {
    const navigate = useNavigate()

  return (
    <header className="border-b-2 border-[#3D4466] w-full flex items-center justify-between pr-10 pl-7 pt-4 pb-4">
      <div className="w-24 h-9" onClick={()=>navigate("/")} >
        <img src="/image 29.png" alt="Logo" />
      </div>
      {isNeedSearch?
        <SearchBar/>:<></>}
    </header>
  );
};

export default Header;
