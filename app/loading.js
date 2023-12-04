import React from "react";
import Header from "@/components/header/index.js";
import { PiPlanetBold } from "react-icons/pi";

export default function Loading() {
  return (
    <div className="flex flex-col w-full min-h-screen  m-0 p-0 overflow-hidden">
      <Header />
      <main className="flex flex-1 text-sm md:text-xl text-white text-center justify-center items-center">

        <div className="w-full h-full text-center">
          <PiPlanetBold className="inline-block text-white text-8xl m-0 p-0 animate-pulse" />
        </div>
        
      </main>
    </div>
  );
}
