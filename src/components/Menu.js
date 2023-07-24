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
    <div class="pt-8 pb-8 bg-neutral-700 md:py-4 lg:py-6"> 
      <Grid class="auto grid gap-8 md:8/12 md:m-auto md:grid-col-6 lg:w-7/12 lg:m-auto lg:grid-cols-6 ">
        {items.map((items, idx) => (
            <Link 
              to={items.to}       
            >
              <Button class="font-serif bg-neutral-200 text-neutral-700 w-32 py-2 px-2 hover:bg-neutral-300">{items.name}</Button>
            </Link>
          ))}          
      </Grid>
    </div>     
  ) 
}

export default Menu