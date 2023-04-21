import React from 'react'
import '../style/Downloads.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "Addresses", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::addresses-1/about" },
  { name: "Building Footprints", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::building-footprints-1/about" },
  { name: "City Limits", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::city-limits-2/about" },
  { name: "Council Districts", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::council-districts-3/about" },
  { name: "E.T.J", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::extra-territorial-jurisdiction-e-t-j-/about" },
  { name: "Parcels", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::parcels-1/about" },  
  { name: "Road Centerlines", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::road-centerlines-1/about" },
  { name: "Thoroughfares", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::thoroughfare-plan-2022/about" },                                    
  { name: "Zoning Districts", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::zoning-districts/about" },

];

function Downloads() {
  return (
    <>
      <div class="">
        <h2 class="font-serif text-4xl mt-10 pb-8 lg:mt-10 lg:mb-4 lg:text-5xl">GIS Downloads</h2>

        <grid class="m-auto mt-4 content-start text-center lg:w-6/12 grid lg:grid-cols-3 lg:gap-6 content-evenly">
          <div class="m-auto mb-2 mt-2 w-52 p-2 font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200">Addresses</div>
          <div class="m-auto mb-2 mt-2 w-52 p-2 font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200">Building Footprints</div>
          <div class="m-auto mb-2 mt-2 w-52 p-2 font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200">City Limits</div>
          <div class="m-auto mb-2 mt-2 w-52 p-2 font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200">Council District</div>
          <div class="m-auto mb-2 mt-2 w-52 p-2 font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200">E.T.J.</div>
          <div class="m-auto mb-2 mt-2 w-52 p-2 font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200">Parcels</div>
          <div class="m-auto mb-2 mt-2 w-52 p-2 font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200">Road Centerlines</div>
          <div class="m-auto mb-2 mt-2 w-52 p-2 font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200">Thoroughfares</div>
          <div class="m-auto mb-2 mt-2 w-52 p-2 font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200">Zoning Districts</div>
        </grid>

      </div>
    </>
  )
}

export default Downloads

