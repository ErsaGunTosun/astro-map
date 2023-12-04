import { NextResponse } from "next/server"

import PlanetData from '@/mocks/planets.json';

export async function GET(req, context) {
    let planet = {};
    if (context.params.planet == "all") {
        return NextResponse.json({ results: PlanetData.results })
    } else {
        PlanetData.results.map((item) => {
            if (item.name == context.params.planet) {
                planet = item;
            }
        })
    }

    return NextResponse.json({ results: planet })
}