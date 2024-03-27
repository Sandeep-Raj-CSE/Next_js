"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";




function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      
      <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
          </Link>

          <Link href={"/course"}>
            <MenuItem setActive={setActive} active={active} item="All courses"> 
            
            </MenuItem>
          </Link>


          <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="All about"> 
            </MenuItem>
          </Link>


          <Link href={"/Internship"}>
            <MenuItem setActive={setActive} active={active} item="Internship"> 
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Web Development</HoveredLink>
            <HoveredLink href="/">Frontend Development</HoveredLink>
            <HoveredLink href="/">Backend Development</HoveredLink>
            <HoveredLink href="/">AI/ML</HoveredLink>
            <HoveredLink href="/">Others</HoveredLink>

            </div>
           
            </MenuItem>
          </Link>
      </Menu>
      
      </div>
  )
}

export default Navbar