import { FaFacebook } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export function Footer(){
    const {t} = useTranslation();
    return(
        <div className="flex flex-row items-center justify-around bg-pink-400 p-4 mt-10">
            <p className="select-none text-white">{t('copyright')}</p>
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
                    {t('policy')}
                </p>
            </div>
        </div>
    )
}