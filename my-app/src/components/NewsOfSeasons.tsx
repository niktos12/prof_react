import { ColCart } from "./ColCart";

export function NewsOfSeasons(){
    return(
        <div className="flex flex-col items-center gap-4 mt-10">
            <h1 
                className="text-5xl font-bold text-center mt-6"
            >
                Новинки сезона осень-зима 2024
            </h1>
            <div className="grid grid-cols-[repeat(2,400px)] justify-items-center gap-y-6">
                <ColCart 
                    infotext="Блю" 
                    src={process.env.PUBLIC_URL + '/bluecol2.png'} 
                    color="text-sky-800"
                    bgColor="hover:bg-blue-400"
                />
                <ColCart 
                    infotext="Ред" 
                    src={process.env.PUBLIC_URL + '/redcol.png'} 
                    color="text-rose-800"
                    bgColor="hover:bg-red-400"
                />
                <ColCart 
                    infotext="Грин" 
                    src={process.env.PUBLIC_URL + '/greencol.png'} 
                    color="text-green-800"
                    bgColor="hover:bg-green-400"
                />
                <ColCart 
                    infotext="Пинк" 
                    src={process.env.PUBLIC_URL + '/pinkcol.png'} 
                    color="text-pink-700"
                    bgColor="hover:bg-pink-400"
                />
            </div>
        </div>
    )
}