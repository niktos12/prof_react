import { Header } from "./Header"
export function Main(){
    return(
        <div className="flex flex-col justify-center items-center">
            <Header/>
                <h1 
                    className="flex flex-row text-pink-400 text-4xl mt-4"
                >
                    Ягодки&#160;
                    <h2 
                        className="text-black"
                    >
                      - онлайн-магазин одежды от российского производителя
                    </h2>
                </h1>
                <div className="flex flex-row items-center gap-20 mt-10">
                    <div className="flex flex-col items-center">
                        <img 
                        src={process.env.PUBLIC_URL + '/summercol.jpg'}
                        alt="" 
                        className="max-w-[500px] rounded-3xl"
                    />
                    <p className="text-xl">☀ Летняя коллекция ⛱</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                        src={process.env.PUBLIC_URL + '/wintercol.jpg'}
                        alt="" 
                        className="max-w-[500px] rounded-3xl"
                    />
                    <p className="text-xl">☃ Зимняя коллекция ❄</p>
                    </div>
                    
                </div>
        </div>
    )
}