import { CiGlobe } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export function Header(){
    return(
        <div className="flex flex-col w-full border-b border-pink-400 ">
            <div className="flex flex-row items-center justify-around">
                <img src="../yagotka.png" className="w-[250px] h-[100px] cursor-pointer"/>
                <div className="flex flex-row gap-2">
                    <a 
                        className="group cursor-pointer flex flex-row items-center gap-1 hover:text-pink-400 duration-300 ease-in-out"
                    >
                        Женщинам
                        <MdOutlineKeyboardArrowDown className="group-hover:text-black text-black"/>
                    </a>
                    <a 
                        className="group cursor-pointer flex flex-row items-center gap-1 hover:text-pink-400 duration-300 ease-in-out"
                    >
                        Мужчинам
                        <MdOutlineKeyboardArrowDown className="group-hover:text-black text-black"/>
                    </a>
                    <a 
                        className="group cursor-pointer flex flex-row items-center gap-1 hover:text-pink-400 duration-300 ease-in-out"
                    >
                        Детям
                        <MdOutlineKeyboardArrowDown className="group-hover:text-black text-black"/>
                    </a>
                    <a 
                        className="group cursor-pointer flex flex-row items-center gap-1 hover:text-pink-400 duration-300 ease-in-out"
                    >
                        Акции
                        <MdOutlineKeyboardArrowDown className="group-hover:text-black text-black"/>
                    </a>
                    <a 
                        className="group cursor-pointer flex flex-row items-center gap-1 hover:text-pink-400 duration-300 ease-in-out"
                    >
                        Контакты
                        <MdOutlineKeyboardArrowDown className="group-hover:text-black text-black"/>
                    </a>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <IoIosSearch className="w-7 h-7 cursor-pointer hover:text-pink-400 duration-300 ease-in-out"/>
                    <FaShoppingCart className="w-7 h-7 cursor-pointer hover:text-pink-400 duration-300 ease-in-out"/>
                    <VscAccount className="w-7 h-7 cursor-pointer hover:text-pink-400 duration-300 ease-in-out"/>
                    <CiGlobe className="w-7 h-7 cursor-pointer hover:text-pink-400 duration-300 ease-in-out"/>
                </div>
                
            </div>
            
        </div>
    )
}