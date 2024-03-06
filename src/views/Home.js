import React from 'react'
import '../style/Home.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "ALL-IN-ONE", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/cb19b06c606f4ce1bd9e96b8817d4e07" },
  { name: "Residential Dashboard", href: "https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=efd3c1d6d3144c9eb11326ec20c79626" },  
  { name: "City Projects Site (2024)", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/7ef89fd885e04d8e82d4ff2195a94b94" },
  { name: "City Projects Site", href: "https://experience.arcgis.com/experience/edf1ffbd9dae4b12aeefc8b1ba594b26" },
];

function Home() {
  return (
    <>
      <div>
        <h2 class="font-serif text-4xl mt-10 mb-10 lg:mt-14 lg:mb-4 lg:text-5xl">Featured Maps</h2>

        <Grid class="h-full lg:w-9/12 lg:pt-12 lg:m-auto grid lg:grid-cols-4 lg:gap-2 lg:w-6/12 lg:text-center">
          {items.map((items, idx) => (
              <a 
                target="_blank"
                href={items.href}       
              >
                <Button class="font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200 mb-4 w-52 py-2 md:w-52">{items.name}</Button>
              </a>
            ))}          
        </Grid>
        <div className="">
            <Link 
              to="/external"            
            >
              <Button class="bg-neutral-700 hover:bg-neutral-500 text-neutral-200 mb-10 w-48 py-2 mt-12" >More Maps</Button>
            </Link>
          </div>
      </div>       
    </>
  )
} 
export default Home
