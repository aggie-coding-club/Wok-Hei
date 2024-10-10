import Link from "next/link";

interface SidebarIconProps {
  name: string,
  link: string,
  icon: React.ReactNode,
  active?: boolean,
  expanded: boolean,
}

const SidebarIcon = ({name, link, icon, active, expanded} : SidebarIconProps) => {
  return (
    <Link href={link} className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
      ${active ? "bg-gradient-to-tr from-green-200 to-green-100 text-green-800" : "hover:bg-green-50 text-gay-600"}`}>

      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-40 ml-3 " : "w-0"}`}>{name}</span>
      {!expanded && (
        <div className={`absolute px-2 py-1 ml-10 bg-green-100 text-green-800 text-sm rounded-md opacity-0 transition-all group-hover:opacity-100`}>
          {name}
        </div>
      )}
    </Link>
  )
}

export default SidebarIcon;