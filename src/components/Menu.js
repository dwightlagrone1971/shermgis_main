import React from 'react'
import '../style/Menu.css'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import Grid from '@mui/material/Grid';


const items = [
    { name: "Featured Maps", to: "/" },
    { name: "GIS Downloads", to: "/downloads" },
    { name: "Infographics", to: "/graphics", },
    { name: "Internal Maps", to: "/internal" },
    { name: "PDF Maps", to: "/maps" },
    { name: "About", to: "/about" },
  ];
  

function Menu() {
  return (
    <div class="bg-neutral-700 py-4 relative pt-12 pb-12 lg:py-6"> 
      <Grid class="md:8/12 lg:w-7/12 auto lg:m-auto grid lg:grid-cols-6 gap-8">
        {items.map((items, idx) => (
            <Link 
              to={items.to}       
            >
              <Button class="font-serif bg-neutral-200 text-neutral-700 w-32 py-1 px-2">{items.name}</Button>
            </Link>
          ))}          
      </Grid>
    </div>     
  ) 
}

export default Menu