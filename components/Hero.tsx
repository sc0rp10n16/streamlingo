"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import MeetingTypeList from "./MeetingTypeList";
import { FloatingNavbar } from "./FloatingNavbar";

export function Hero() {
  // TODO: Make it responsive
  return (
    <WavyBackground className="max-w-4xl h-[300px] mx-auto pb-40 ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        STREAMLINGO
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        
      </p>
      <MeetingTypeList/>
      {/* <FloatingNavbar/> */}
    </WavyBackground>
  );
}
