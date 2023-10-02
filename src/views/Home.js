import React from 'react'
import '../style/Home.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "ALL-IN-ONE", href: "https://experience.arcgis.com/experience/8b9128d2736c4487a0831db01f0256b3/?draft=true" },
  { name: "Residential Dashboard", href: "https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=efd3c1d6d3144c9eb11326ec20c79626" },
  { name: "Council District", href: "https://experience.arcgis.com/experience/f2ead96f4ef14f19bf2e23767b65d200/" },
  { name: "New Developments", href: "https://www.arcgis.com/apps/dashboards/62869587b8964101897fcc3bf9ac130a" },
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
                <Button class="font-serif bg-neutral-700 text-neutral-200 hover:bg-neutral-500 mb-6 w-52 py-2 ">{items.name}</Button>
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
