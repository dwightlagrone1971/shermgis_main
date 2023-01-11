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
    <div class="bg-neutral-700 text-neutral-700 py-4"> 
      <Grid class="lg:w-9/12 md:auto md:grid md:grid-cols-3 lg:m-auto lg:grid lg:grid-cols-6 gap-4">
        {items.map((items, idx) => (
          <Grid>
            <Link 
              to={items.to}       
            >
              <Button class="bg-neutral-200 w-48 py-2 my-2">{items.name}</Button>
            </Link>
          </Grid>
          ))}          
      </Grid>
    </div>     
  ) 
}

export default Menu