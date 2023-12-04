"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import { AiFillHeart } from "react-icons/ai";

import PlanetCanvas from "@/components/planetCanvas";
import Pluto from "@/mocks/pluto.json";

export default function SupportPluto() {
  const [support, setSupport] = useState(false);

  const chageSupport = () => {
    localStorage.setItem("support", !support);
    setSupport(!support);
  };

  useEffect(() => {
    if (localStorage.getItem("support")) {
      setSupport(localStorage.getItem("support"));
    } else {
      setSupport(false);
      localStorage.setItem("support", false);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="text-white flex justify-center w-full items-center max-h-full h-4/5">
        <div className="w-full">
          <div className="text-center">
            <PlanetCanvas planet={Pluto} />
            <p className="text-white text-lg">Do you want to support pluto?</p>
            <div className="w-full flex justify-center items-center mt-2">
              <button
                onClick={chageSupport}
                className={`flex items-center ${
                  support ? "bg-red-500 text-white" : "bg-white text-black"
                }  p-3 rounded-md text-lg`}
              >
                {support ? "Thank You" : "Support Pluto"}{" "}
                <span
                  className={`ms-2 ${support ? "text-white" : "text-red-500"}`}
                >
                  <AiFillHeart />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
