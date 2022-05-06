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
        <Grid container spacing={6}>

          {items.map((data, idx) => (
            <Grid item xs={12} md={4}>
              <Link
                to={ data.to }                       
              >
                <Button className="home__btn">{ data.name }</Button>
              </Link>
            </Grid>
            ))}

        </Grid>
    </div>     
  ) 
}

export default About