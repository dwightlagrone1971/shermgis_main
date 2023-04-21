import React from 'react'
import '../style/Home.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "ALL-IN-ONE", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=af7d99d16f534760951983816168c082" },
  { name: "Residential Dashboard", href: "https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=efd3c1d6d3144c9eb11326ec20c79626" },
  { name: "Future Landuse", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=dbedffd8809640808078dea3f7db0f4c" },
  { name: "Thoroughfares", href: "https://cityofsherman.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=5dbc6809eaa746e5909b8e82fe24d602" },
];

function Home() {
  return (
    <>
      <div>
        <h2 class="font-serif text-4xl mt-10 mb-10 lg:mt-10 lg:mb-4 lg:text-5xl">Featured Maps</h2>

        <Grid class="auto grid lg:m-auto lg:pt-16 lg:grid-cols-4 lg:gap-2 lg:w-7/12 lg:text-center">
          {items.map((items, idx) => (
              <a 
                target="_blank"
                href={items.href}       
              >
                <Button class="font-serif bg-neutral-700 text-neutral-200 hover:bg-neutral-500 mb-6 w-52 py-1 ">{items.name}</Button>
              </a>
            ))}          
        </Grid>
        <div className="">
            <Link 
              to="/external"            
            >
              <Button class="bg-neutral-700 hover:bg-neutral-500 text-neutral-200 mb-10 w-48 py-1 mt-12" >More Maps</Button>
            </Link>
          </div>
      </div>       
    </>
  )
} 
export default Home
