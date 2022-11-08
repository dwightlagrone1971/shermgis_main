import React from 'react'
import '../style/Home.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "ALL-IN-ONE", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=af7d99d16f534760951983816168c082" },
  { name: "Residential Dashboard", href: "https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=efd3c1d6d3144c9eb11326ec20c79626" },
  // { name: "Address Request", href: "https://survey123.arcgis.com/share/9933e2aecb8e4e97b4107523b70b9e03?portalUrl=https://cityofsherman.maps.arcgis.com" },
];

function Home() {
  return (
    <div className="home"> 
      <h1>Featured Maps</h1>
      
      <Grid className="main_body" container spacing={6}>
        {items.map((data, idx) => (
          <Grid item xs={12} md={6}>
            <a 
              target="_blank"
              href={data.href}       
            >
              <Button className="home__btn">{data.name}</Button>
            </a>
          </Grid>
          ))}

          <Grid item xs={12} md={12}>
            <div className="more__maps">
              <Link 
                to="/external"            
              >
                <Button className="more__btn" >More Maps</Button>
              </Link>
            </div>
          </Grid>
      </Grid>
    </div>     
  ) 
}

export default Home
