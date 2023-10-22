"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import { AiFillHeart } from "react-icons/ai";

const planet = {
  name: "pluto",
  distance: 39.5,
  selfRotation: 0.002,
  orbitRotation: 0.004,
  size: 2.4,
  texture: "/assets/texture/pluto.jpg",
  orbit: 39.5,
  textDistance: 6,
  description: {
    planet: "Pluto",
    description:
      "Pluto is a distant dwarf planet located in the Kuiper Belt, beyond Neptune. Formerly considered the ninth planet in our Solar System, Pluto was reclassified as a dwarf planet by the International Astronomical Union in 2006. Explore detailed information about Pluto's characteristics, internal structure, orbital properties, and its discovery on this page.",
    sections: [
      {
        title: "Basic Features",
        type: "list",
        content: {
          radius: "1,188.3 km",
          surfaceTemperature: "-233°C to -223°C",
          averageDistance: "5.91 billion km",
          orbitalPeriod: "248 Earth years",
          rotationPeriod: "6.4 Earth days",
          orbitalDiameter: "7,232,500 km",
          rotationSpeed: "Approximately 0.159 km/s",
        },
      },
      {
        title: "Internal Structure and Features",
        type: "div",
        content:
          "Pluto is primarily composed of rock and water ice. It has a thin atmosphere mostly composed of nitrogen, with traces of methane and carbon monoxide. The surface of Pluto displays a variety of features, including mountains, plains, and large expanses of frozen nitrogen and methane.",
      },
      {
        title: "Rotation Speed and Direction",
        type: "div",
        content:
          "Pluto has a relatively slow rotation, with a day (one rotation) lasting about 6.4 Earth days. Unlike most planets, Pluto's rotation is retrograde, meaning it spins in the opposite direction to its orbit around the Sun.",
      },
      {
        title: "Moons and Discovery",
        type: "div",
        content:
          "Pluto has five known moons, the largest of which is Charon. The dwarf planet was discovered by astronomer Clyde Tombaugh in 1930 at the Lowell Observatory in Arizona, United States, based on calculations following the predictions of its existence.",
      },
      {
        title: "Discovery Date",
        type: "div",
        content:
          "Pluto was discovered on February 18, 1930, by astronomer Clyde Tombaugh. The discovery marked an important milestone in the study of our Solar System, although Pluto's status as a planet was later redefined.",
      },
    ],
  },
};

import PlanetCanvas from "@/components/planetCanvas";

export default function SupportPluto() {
  const [support, setSupport] = useState(false);

  const chageSupport = () => {
    setSupport(!support);
  };
  return (
    <>
      <Header />
      <div className="text-white flex justify-center w-full items-center max-h-full h-4/5">
        <div className="w-full">
          <div className="text-center">
            <PlanetCanvas planet={planet} />
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
