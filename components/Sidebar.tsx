import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({children}:SidebarProps) => {
  return (
    <>
      <aside>
        <div className="flex flex-col w-64 p-10">
          <Link href={"/"}> home </Link>
          <Link href={"/planning"}> planning </Link>
          <Link href={"/recipe-search"}> recipe search </Link>
          <Link href={"/profile"}> profile </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </aside>
      <div className="w-full p-10 pl-24 transition-all">
        {children}
      </div>
    </>
  )
}

export default Sidebar
