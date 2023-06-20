import React from 'react'
import '../style/Downloads.css'
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
      <span><h2 class="pb-4 font-serif text-4xl mt-10 mb-18 lg:mt-14 lg:mb-2 lg:text-5xl"><strong>GIS Downloads</strong></h2>
      <p class="lg:text-lg lg:mx-24 text-center"> Download formats CSV, KML, Shapefile or GeoJSON.</p></span>

        <Grid class="lg:w-9/12 auto lg:pt-10 lg:m-auto grid lg:grid-cols-3 lg:w-6/12 lg:gap-2 lg:text-center">
          {items.map((items, idx) => (
              <a 
                href={items.href}
                target="_blank"
                rel="noreferrer"        
              >
                <Button class="font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200 mb-6 w-44 py-1 ">{items.name}</Button>
              </a>
            ))}          
        </Grid>
      </div>
    </>
  )
}

export default Downloads


