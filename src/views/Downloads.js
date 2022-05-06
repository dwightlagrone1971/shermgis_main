import React from 'react'
import '../style/Downloads.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

function Downloads() {
  return (
    <div className="download"> 
      <h1>Download Page</h1>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <a 
            href="https://data-cityofsherman.opendata.arcgis.com/search?tags=download"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="download__btn" >Download GIS Data</Button>
          </a>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link to="/contacts">
            <Button className="download__btn" >Contact Us</Button>
          </Link>
        </Grid>
      </Grid>    
    </div>        
  ) 
}

export default Downloads