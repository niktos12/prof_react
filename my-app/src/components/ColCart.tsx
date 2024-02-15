interface ColCartProps {
    src: string
    infotext: string
    color?: string
    bgColor?: string
}
export function ColCart(props: ColCartProps) {
    return (
        <div className={`flex flex-col items-center cursor-pointer gap-2 hover:shadow-2xl 
        ${props.bgColor} duration-300 ease-in rounded-3xl p-4`}>
            <img src={props.src} className="max-w-[300px] rounded-3xl "/>
            <p className={`text-xl text-center ${props.color} font-bold`}>{props.infotext}</p>
        </div>
    )
}