import { Header } from "./Header"
import { useTranslation } from "react-i18next"
export function Main(){
    const {t} = useTranslation();
    return(
        <div className="flex flex-col justify-center items-center">
                <h1 
                    className="flex flex-row text-pink-400 text-4xl mt-4"
                >
                    {t('yagotki')}&#160;
                    <span 
                        className="text-black"
                    >
                      {t('online-shop')}
                    </span>
                </h1>
                <div className="flex flex-row items-center gap-20 mt-10">
                    <div className="flex flex-col items-center">
                        <img 
                        src={process.env.PUBLIC_URL + '/summercol.jpg'}
                        alt="" 
                        className="max-w-[500px] rounded-3xl"
                    />
                    <p className="text-xl">☀ {t('summercol')} ⛱</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                        src={process.env.PUBLIC_URL + '/wintercol.jpg'}
                        alt="" 
                        className="max-w-[500px] rounded-3xl"
                    />
                    <p className="text-xl">☃ {t('wintercol')} ❄</p>
                    </div>
                    
                </div>
        </div>
    )
}