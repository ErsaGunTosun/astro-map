import React from "react";
import axios from "axios";
import UUID from "uniq-id";
import Link from "next/link";

import Header from "@/components/header";
import PlanetCanvas from "@/components/planetCanvas";
import { BlackBackgroundCanvas } from "@/components/background";

const getPlanetAllData = async () => {
  const res = await axios.get(`${process.env.API_URL}/api/planets/all`);
  return res.data.results;
};

export default async function Planets() {
  const planets = await getPlanetAllData();
  return (
    <>
      <Header />
      <div className="absolute text-white z-0 w-full h-fit justify-center flex flex-col items-center bg-transparent">
        {/** Content div */}
        <div className=" container h-full px-5">
          <div className="grid gap-2 md:grid-cols-2 sm:grid-cols-1 my-4">

            {planets.map((planet, index) => { 
              return (
                <div key={UUID()} className="bg-white bg-opacity-3">
                  <Link href={`/${planet.name.toLowerCase()}`} >
                    <div className="flex flex-col justify-center items-center w-full">
                      <div className="flex justify-center items-center w-full">
                        <PlanetCanvas planet={planet} />
                      </div>
                      <div className="flex justify-center items-center">
                        <h1 className=' text-white text-2xl text-center font-bold'>{planet?.description.planet}</h1>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
}
