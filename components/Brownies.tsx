interface BronnyProps {
    name: string,
    link: string,
    cal: number,
    ingredient: string[],
    protein: number,
    carb: number,
    fat: number,
    expanded: boolean,
  }

const Brownies = ({name, link, cal, ingredient, protein, carb, fat, expanded}: BronnyProps) => {
    return(
        <div className="w-[200px] h-[200px] bg-[#885038] opacity-45">{name}</div>
    )
}

export default Brownies