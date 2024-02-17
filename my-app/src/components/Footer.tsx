import { FaFacebook } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
export function Footer(){
    return(
        <div className="flex flex-row items-center justify-around bg-pink-400 p-4 mt-10">
            <p className="select-none text-white">© ООО "Ягодка" 2024</p>
            <div className="flex flex-row gap-3 text-4xl text-white items-center">
                <FaFacebook 
                    className="cursor-pointer hover:scale-125 duration-500"/>
                <SlSocialVkontakte 
                    className="cursor-pointer hover:scale-125 duration-500"/>
                <FaInstagram 
                    className="cursor-pointer hover:scale-125 duration-500"/>
                <p 
                    className="select-none text-black text-lg"
                >
                    Политика конфидециальности
                </p>
            </div>
        </div>
    )
}