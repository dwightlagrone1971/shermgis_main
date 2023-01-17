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
        <h2 className="font-serif text-4xl mt-10 mb-10 lg:mt-10 lg:mb-4 lg:text-5xl">GIS Downloads</h2>

        <Grid class="lg:w-9/12 auto lg:pt-16 lg:m-auto grid lg:grid-cols-3 lg:w-6/12 lg:gap-2 lg:text-center">
          {items.map((items, idx) => (
              <a 
                target="_blank"
                href={items.href}       
              >
                <Button class="font-serif bg-neutral-700 text-neutral-200 mb-6 w-44 py-1 ">{items.name}</Button>
              </a>
            ))}          
        </Grid>
      </div>
    </>
  )
}

export default Downloads

