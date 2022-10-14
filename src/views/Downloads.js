import React from 'react'
import '../style/Downloads.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "Addresses", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::addresses-1/about" },
  { name: "City Limits", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::city-limits-2/about" },
  { name: "Council Districts", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::council-districts-3/about" },
  { name: "E.T.J", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::extra-territorial-jurisdiction-e-t-j-/about" },
  { name: "Future Land Use", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::future-landuse-plan-1/about" },
  { name: "Parcels", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::parcels-1/about" },  
  { name: "Road Centerlines", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::road-centerlines-1/about" },
  { name: "Thoroughfares", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::thoroughfare-plan/about" },
  { name: "Zoning Districts", href: "https://data-cityofsherman.opendata.arcgis.com/datasets/cityofsherman::zoning-districts/about" },

];

function Downloads() {
  return (
    <div className="download"> 
      <h1>GIS Downloads</h1>
      
      <Grid container spacing={3}>
        {items.map((data, idx) => (
          <Grid item xs={12} md={4}>
            <a 
              target="_blank" 
              rel="noreferrer"
              href={data.href}       
            >
              <Button className="download__btn">{data.name}</Button>
            </a>
          </Grid>
          ))}
      </Grid>
    </div>     
  ) 
}

export default Downloads

