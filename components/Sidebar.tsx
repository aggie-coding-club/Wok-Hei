"use client"
import SidebarIcon from "./SidebarIcon";
import Image from "next/image";
import { ChevronFirst, ChevronLast, House, BookMarked, LandPlot, Croissant, Search } from "lucide-react"


import { UserButton } from "@clerk/nextjs";
import React, {  useState } from "react";
import { usePathname } from "next/navigation";

interface SidebarProps {
  username: string,
  email: string,
  children: React.ReactNode;
}

const Sidebar = ({username, email, children} : SidebarProps) => {
  const [expanded, setExpanded] = useState(true);
  const path = usePathname();

  return (
    <>
      <aside className="h-screen fixed">
        {/* container */}
        <nav className="h-full flex flex-col shadow-sm border-r bg-white">
          {/* logo and retract */}
          <div className="p-4 pb-2 flex justify-between items-center">
            <Image src="https://img.logoipsum.com/285.svg" alt="logo" width={150} height={100} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />
            <button onClick={() => setExpanded(!expanded)} className="p-1.5 bg-gray rounded-lg bg-gray-50 hover:bg-gray-100 transition-all">
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>  
          {/* items */}
            <ul className="flex-1 px-3">
              <SidebarIcon icon={<House size={20}/>} name={"Home"} link={"/"} active={path == "/"} expanded={expanded} />
              <SidebarIcon icon={<BookMarked size={20}/>} name={"Saved Recipes"} link={"/saved-recipes"} active={path == "/saved-recipes"} expanded={expanded} />
              <SidebarIcon icon={<LandPlot size={20}/>} name={"Planning"} link={"/planning"} active={path == "/planning"} expanded={expanded} />
              <SidebarIcon icon={<Croissant size={20}/>} name={"Pantry"} link={"/pantry"} active={path == "/pantry"} expanded={expanded} />
              <SidebarIcon icon={<Search size={20}/>} name={"Search"} link={"/search"} active={path == "/search"} expanded={expanded} />
            </ul>
          
          {/* user bottom stuff */}
          <div className="border-t flex p-3 gap-3">
            <UserButton afterSignOutUrl='/'  />
            <div className={`flex justify-between items-center leading-4 overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}`}>
              <div>
                <h4 className="font-semibold">{username}</h4>
                <span className="text-xs text-gray-600">{email}</span>
              </div>
              
            </div>
          </div>
        </nav>
      </aside>
      <div className={`w-full p-10 ${expanded ? "pl-64" : "pl-24"} transition-all`}>
        {children}
      </div>
      
    </>
  )
}

export default Sidebar;