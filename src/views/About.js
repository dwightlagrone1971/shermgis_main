import React from 'react'
import '../style/About.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "What is GIS?", to: "/gis" },
  { name: "What is GPS?", to: "/gps" },
  { name: "Contact Us", to: "/contacts" },
 
];


function About() {
  return (
    <div className="about"> 
      <h1>About Page</h1>
        <Grid container spacing={16}>

          {items.map((data, idx) => (
            <Grid item xs={12} md={4}>
              <Link
                to={ data.to }                       
              >
                <Button class="bg-neutral-700 text-neutral-200 py-2 px-4 w-48 md:w-36 md:h-24 lg:w-60 lg:h-10">{ data.name }</Button>
              </Link>
            </Grid>
            ))}

        </Grid>
    </div>     
  ) 
}

export default About