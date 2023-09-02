import UUID from 'uniq-id';
import axios from 'axios';

import { BlackBackgroundCanvas } from '@/components/background'
import PlanetCanvas from '@/components/planetCanvas'
import Header from '@/components/header'
import Footer from '@/components/footer'
import NotFound from './not-found';

const getPlanetData = async (planet) => {
  const res = await axios.get(`${process.env.API_URL}/api/planets/${planet}`);
  return res.data.results;
} 

export default async function Planet({ params }) {
  const planetsName = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

  if (planetsName.find((planet) => planet == params.planet) == undefined) {
    return <NotFound />
  }
  
  const planet = await getPlanetData(params.planet)

  return (
    <>
      <Header />

      <div className='absolute text-white z-0 w-full h-fit justify-center flex flex-col items-center bg-transparent'>
        <BlackBackgroundCanvas />

        {/** Content div */}
        <div className='bg-white bg-opacity-3 container h-full px-5'>
          <div className='flex flex-col my-5 text-sm md:text-xl'>
            <div>
              <PlanetCanvas planet={planet} />
              <h1 className='text-5xl text-center font-bold'>{planet?.description.planet}</h1>
              <p className='mt-3'>{planet?.description.description}</p>
            </div>

            {
              planet?.description.sections ?
                (
                  Object.keys(planet?.description.sections).map((key) => {

                    if (planet?.description.sections[key].type == 'list') {
                      return (
                        <div className='text-start w-full my-2' key={UUID(5)}>
                          <h2 className='text-3xl font-bold'>{planet?.description.sections[key].title.split(/(?=[A-Z])/).join(' ').charAt(0).toUpperCase() + planet?.description.sections[key].title.split(/(?=[A-Z])/).join(' ').slice(1)}</h2>
                          <ul className='text-start list-disc ps-5 '>
                            {Object.keys(planet?.description.sections[key].content).map((item) => {
                              return (
                                <li key={item}>{item.split(/(?=[A-Z])/).join(' ').charAt(0).toUpperCase() + item.split(/(?=[A-Z])/).join(' ').slice(1)}: {planet?.description.sections[key].content[item]}</li>
                              )
                            })
                            }
                          </ul>
                        </div>
                      )
                    }
                    else if (planet?.description.sections[key].type == 'div') {
                      return (
                        <div className='text-start my-2'  key={UUID(5)}>
                          <h2 className='text-3xl font-bold'>{planet?.description.sections[key].title.split(/(?=[A-Z])/).join(' ').charAt(0).toUpperCase() + planet?.description.sections[key].title.split(/(?=[A-Z])/).join(' ').slice(1)}</h2>
                          <p className=''>{planet?.description.sections[key].content}</p>
                        </div>
                      )
                    }
                  })
                )
                : null
            }
          </div>
        </div>

      </div >
    </>
  )
}
