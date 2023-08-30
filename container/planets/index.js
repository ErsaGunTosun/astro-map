import React from 'react'

export default function PlanetContainer() {
    const planet = {
        planet: "Mercury",
        description: "Mercury is an intriguing celestial body located in the Solar System and is the closest planet to the Sun. On this page, you can find detailed information about Mercury's internal structure, rotation speed, orbital diameter, orbital period, direction, satellites, and its discovery.",
        basicFeatures: {
            radius: "2,439.7 km",
            surfaceTemperature: "-173°C to 427°C",
            averageDistance: "57.9 million km",
            orbitalPeriod: "88 Earth days",
            rotationPeriod: "59 Earth days",
            orbitalDiameter: "91,700,000 km",
            rotationSpeed: "Approximately 10.89 km/s"
        },
        internalStructureAndFeatures: "Mercury's internal structure primarily consists of heavy elements like iron and nickel. The core occupies about 42% of the planet's radius, contributing to the formation of its magnetic field. The surface is filled with craters and experiences substantial temperature variations due to its lack of a significant atmosphere.",
        rotationSpeedAndDirection: "Mercury is a slow-rotating planet, with a rotation period much longer compared to other planets in the Solar System. A day on Mercury (one rotation) takes approximately 59 Earth days. Additionally, Mercury rotates in the opposite direction, meaning one side faces the Sun.",
        moonsAndDiscovery: "Mars has no known natural satellites. However, the American Mariner 10 spacecraft closely passed by Mercury three times in 1974, capturing detailed photographs. These images provided valuable insights into the planet's surface. Subsequently, the MESSENGER (MErcury Surface, Space ENvironment, GEochemistry, and Ranging) spacecraft visited Mercury in 2004, collecting further data.",
        discoveryDate: "Mars has been known since ancient times. However, more detailed observations began with the invention of telescopes. One of the astronomers who first observed surface details of Mercury was Giovanni Domenico Cassini in the 17th century. Modern space explorations were carried out by the Mariner 10 and MESSENGER spacecrafts as mentioned above."
    };

    return (
        <div className='absolute text-white z-40  w-full h-full justify-center flex '>
            <div className='bg-white bg-opacity-2.5 container h-full'>
                <div className='flex flex-col h-full p-5'>
                    <div>
                        <h1 className='text-5xl font-bold'>{planet.planet}</h1>
                        <p className='text-xl mt-3'>{planet.description}</p>
                    </div>
                    <div className='text-start w-full my-2'>
                        <h2 className='text-3xl font-bold'>Basic Features</h2>
                        <hr className='mb-4' />
                        <ul className='text-start list-disc ps-5 text-xl'>
                            <li>Radius: {planet.basicFeatures.radius}</li>
                            <li>Surface Temperature: {planet.basicFeatures.surfaceTemperature}</li>
                            <li>Average Distance: {planet.basicFeatures.averageDistance}</li>
                            <li>Orbital Period: {planet.basicFeatures.orbitalPeriod}</li>
                            <li>Rotation Period: {planet.basicFeatures.rotationPeriod}</li>
                            <li>Orbital Diameter: {planet.basicFeatures.orbitalDiameter}</li>
                            <li>Rotation Speed: {planet.basicFeatures.rotationSpeed}</li>
                        </ul>
                    </div>

                    <div className='text-start my-2'>
                        <h2 className='text-3xl font-bold'>internal Structure And Features</h2>
                        <hr className='mb-4' />
                        <p className='text-xl'>{planet.internalStructureAndFeatures}</p>
                    </div>

                    <div className='text-start my-2'>
                        <h2 className='text-3xl font-bold'>Rotation Speed And Direction</h2>
                        <hr className='mb-4' />
                        <p className='text-xl'>{planet.rotationSpeedAndDirection}</p>
                    </div>

                    <div className='text-start'>
                        <h2 className='text-3xl font-bold'>Moons And Discovery</h2>
                        <hr className='mb-4' />
                        <p className='text-xl'>{planet.moonsAndDiscovery}</p>
                    </div>

                    <div className='text-start my-2'>
                        <h2 className='text-3xl font-bold'>Discovery Date</h2>
                        <hr className='mb-4' />
                        <p className='text-xl'>{planet.discoveryDate}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
