interface BronnyProps {
    name: string,
    link: string,
    color: string,
    hover: string,
    cal: number,
    ingredient: string[],
    instructions: string[],
    protein: number,
    carb: number,
    fat: number,
    id: string,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentRecipe: React.Dispatch<React.SetStateAction<[string[], string[], string]>>,
  }

const Brownies = ({name, link, color, hover, cal, ingredient, instructions, protein, carb, fat, id, setIsOpen, setCurrentRecipe}: BronnyProps) => {
    const updateRecipe = () => {
        setCurrentRecipe([ingredient, instructions, color]);
    };    
    const openRecipe = () => {
        setIsOpen(true)
    }  

    const openModal = () => {
        updateRecipe()
        openRecipe()
    }

    return(
        <div key={id} className={`mt-[30px] ${color} bg-opacity-45 p-2 flex flex-col items-center rounded-[50px] relative group`} >
            <div className={`w-[94%] max-mb-0 flex items-center justify-center overflow-hidden max-h-0 group-hover:mb-2 group-hover:max-h-full transition-all duration-300 ${hover} hover:bg-opacity-45 cursor-pointer rounded-[15px]`} style={{borderTopLeftRadius: '65px 42px', borderTopRightRadius: '65px 42px'}}>
                <div className="pb-[5px] text-center text-white text-[35px] leading-[30px]">&#43;</div>
            </div>
            <div className={`p-4 w-[260px] h-[260px] ${color} bg-opacity-45 rounded-[42px] grid grid-cols-2 gap-4 place-items-stretch`}>
                <div className={`overflow-hidden ${color} rounded-[30px]`}>
                    <img src={link} className="w-full h-full object-cover"/>
                </div>
                <div className={`flex flex-col justify-center items-center overflow-hidden ${color} bg-opacity-45 rounded-[30px]`}>
                    <div className="p-0 m-0 text-white font-extrabold text-[28px] leading-none">{cal}</div>
                    <div className="p-0 m-0 text-white font-extrabold text-[15px] leading-none">kcal</div>
                </div>
                <div onClick={openModal} className={`p-2 flex justify-center items-center overflow-hidden ${color} bg-opacity-45 rounded-[30px] cursor-pointer`}>
                    <ul className="list-disc m-0 p-0 text-white font-bold text-[13px] ml-[15px]">
                        {ingredient.map((item) => (
                        <li className="">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={`flex justify-center items-center overflow-hidden ${color} bg-opacity-45 rounded-[30px]`}>
                    <ul className="p-0 text-white font-extrabold text-[15px]">
                        <li className="">P - {protein}g</li>
                        <li className="">C - {carb}g</li>
                        <li className="">F - {fat}g</li>
                    </ul>
                </div>
            </div>
            <div className="text-white text-3xl font-bold">{name}</div>
        </div>
    )
}

export default Brownies