import React from 'react'
import '../style/Home.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "ALL-IN-ONE", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=af7d99d16f534760951983816168c082" },
  { name: "Residential Dashboard", href: "https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=efd3c1d6d3144c9eb11326ec20c79626" },
  { name: "Future Landuse (2022)", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=dbedffd8809640808078dea3f7db0f4c" },
  { name: "Thoroughfares (2022)", href: "https://cityofsherman.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=5dbc6809eaa746e5909b8e82fe24d602" },
];

function Home() {
  return (
    <div className="home"> 
      <h1>Featured Maps</h1>
       
      <Grid className="main_body" container spacing={6}>
        {items.map((data, idx) => (
          <Grid item xs={12} s={6} md={3} lg={3}>
            <a 
              target="_blank"
              href={data.href}       
            >
              <Button class="bg-neutral-700 text-neutral-200 py-2 my-2 w-48 md:w-42 lg:w-48">{data.name}</Button>
            </a>
          </Grid>
          ))}          
      </Grid>
      <div className="more__maps">
        <Link 
          to="/external"            
        >
          <Button class="bg-neutral-700 text-neutral-200 md:w-36 w-48 py-2 my-2" >More Maps</Button>
        </Link>
      </div>
    </div>     
  ) 
}

export default Home
