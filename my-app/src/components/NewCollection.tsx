import { GrCatalog } from "react-icons/gr";
import { useTranslation } from "react-i18next";
export function NewCollection(){
    const {t} = useTranslation();
    return(
        <div className="background-animate flex flex-col justify-center items-center py-10 gap-4 mt-10">
            <h1 
                className="text-5xl text-white font-bold text-center mt-6 font-proxima"
            >
                {t('newcol')}
            </h1>
            <h3 
                className="text-3xl text-white font-bold text-center font-museoSlab"
            >
                {t('fashion')}
            </h3>
            <button 
                className="flex flex-row items-center text-white gap-2 text-3xl bg-pink-600 p-4 rounded-3xl 
                hover:bg-pink-500 duration-300 shadow-2xl border-2 border-pink-600 font-ffKava"
            >
                {t('tocatalog')}
                <GrCatalog/>
            </button>
        </div>
    )
}