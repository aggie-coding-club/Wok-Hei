import { getClosestTailwindColor } from './averageColor';
import React, { useEffect, useState } from 'react';

interface BronnyProps {
    name: string,
    link: string,
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

const Brownies = ({name, link, cal, ingredient, instructions, protein, carb, fat, id, setIsOpen, setCurrentRecipe}: BronnyProps) => {
    const [color, setColor] = useState<string>('bg-gray-400');
    const [hover, setHover] = useState('#9ca3af60');

    useEffect(() => {
        const fetchColor = async () => {
          try {
            const closestColor = await getClosestTailwindColor(link);
            setColor(closestColor[0]);
            setHover(closestColor[1] + '60')
          } catch (error) {
            console.error('Error finding closest Tailwind color:', error);
          }
        };
    
        fetchColor();
      }, [link]);

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

    // console.log(hover)

    return(
        <div key={id} className={`${color} bg-opacity-45 p-2 flex flex-col items-center rounded-[50px] relative group`} >
            <div className={`w-[94%] max-mb-0 flex items-center justify-center overflow-hidden max-h-0 group-hover:mb-2 group-hover:max-h-full transition-all duration-300 ${hover} hover:bg-opacity-45 cursor-pointer rounded-[15px]`} style={{borderTopLeftRadius: '65px 42px', borderTopRightRadius: '65px 42px'}} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hover)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}>
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
                <div onClick={openModal} className={`p-2 flex justify-center items-center overflow-hidden ${color} bg-opacity-45 rounded-[30px] cursor-pointer hover:scale-105`}>
                    <ul className="list-disc m-0 p-0 text-white font-bold text-[13px] ml-[15px]">
                        {ingredient.slice(0,5).map((item) => (
                        <li className="" key={item}>{item}</li>
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