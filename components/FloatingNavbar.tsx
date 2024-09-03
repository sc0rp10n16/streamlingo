import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconCalendarTime,
  IconExchange,
  IconHistory,
  IconHome,
  IconNewSection,
  IconTerminal2,
  
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingNavbar() {
  const links = [
    {
      title: "Home",
      icon: (
        
        <IconHome className="h-full w-full text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Upcoming Meetings",
      icon: (
        <IconCalendarTime className="h-full w-full text-neutral-300" />
    ),
    href: "/upcoming",
},
    {
        title: "History",
        icon: (
          <IconHistory className="h-full w-full text-neutral-300"/>
      ),
      href: "/previous",
    },
    
    
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full ">
      <FloatingDock
        desktopClassName="fixed bottom-3"
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
