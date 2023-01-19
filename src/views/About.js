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
    <>
      <div>
        <h2 class="font-serif text-4xl mt-10 mb-10 lg:mt-20 lg:mb-4 lg:text-5xl">About Page</h2>

        <Grid class="lg:w-9/12 auto lg:pt-16 lg:m-auto grid lg:grid-cols-3 lg:w-6/12 lg:gap-2 lg:text-center">
          {items.map((items, idx) => (
              <Link 
                to={items.to}       
              >
                <Button class="font-serif bg-neutral-700 text-neutral-200 mb-6 w-44 py-2">{items.name}</Button>
              </Link>
            ))}          
        </Grid>
      </div>
    </>
  )
}

export default About