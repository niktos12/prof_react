import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
export function Header(){
    const {t} = useTranslation();
    return(
        <div className="flex flex-col w-full border-b border-pink-400 sticky top-0 bg-white z-50">
            <div className="flex flex-row items-center justify-around">
                <img src={process.env.PUBLIC_URL + t('logo')} className="w-[250px] h-[150px] cursor-pointer"/>
                <div className="flex flex-row gap-2 font-fedraSansPro">
                    <a 
                        className="group cursor-pointer flex flex-row items-center gap-1 
                        hover:text-pink-400 duration-300 ease-in-out"
                    >
                        {t('forwomen')}
                        <MdOutlineKeyboardArrowDown 
                            className="group-hover:text-black text-black"
                        />
                    </a>
                    <a 
                        className="group cursor-pointer flex flex-row items-center gap-1 hover:text-pink-400 
                        duration-300 ease-in-out"
                    >
                        {t('formen')}
                        <MdOutlineKeyboardArrowDown 
                            className="group-hover:text-black text-black"
                        />
                    </a>
                    <a 
                        className="group cursor-pointer flex flex-row items-center gap-1 
                        hover:text-pink-400 duration-300 ease-in-out"
                    >
                        {t('forkids')}
                        <MdOutlineKeyboardArrowDown 
                            className="group-hover:text-black text-black"
                        />
                    </a>
                    <a 
                        className="group cursor-pointer flex flex-row items-center gap-1 
                        hover:text-pink-400 duration-300 ease-in-out"
                    >
                        {t('promotions')}
                        <MdOutlineKeyboardArrowDown 
                            className="group-hover:text-black text-black"
                        />
                    </a>
                    <a 
                        className="group cursor-pointer flex flex-row items-center gap-1 
                        hover:text-pink-400 duration-300 ease-in-out"
                    >
                        {t('contacts')}
                        <MdOutlineKeyboardArrowDown 
                            className="group-hover:text-black text-black"
                        />
                    </a>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <IoIosSearch 
                        className="w-7 h-7 cursor-pointer hover:text-pink-400 duration-300 ease-in-out"
                    />
                    <FaShoppingCart 
                        className="w-7 h-7 cursor-pointer hover:text-pink-400 duration-300 ease-in-out"
                    />
                    <VscAccount 
                        className="w-7 h-7 cursor-pointer hover:text-pink-400 duration-300 ease-in-out"
                    />
                    <LanguageSwitcher/>
                </div>
                
            </div>
            
        </div>
    )
}