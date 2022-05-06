import React from 'react'
import '../style/Menu.css'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import Grid from '@mui/material/Grid';

const items = [
    { name: "Featured Maps", to: "/" },
    { name: "GIS Downloads", to: "/downloads" },
    { name: "Infographics", to: "/graphics" },
    { name: "Internal Maps", to: "/internal" },
    { name: "PDF Maps", to: "/maps" },
    { name: "About", to: "/about" },
  ];
  

function Menu() {
  return (
    <div className="menu">
      <nav className="menu__container">

        <Grid container spacing={6} rowSpacing={3}>
          {items.map((item, idx) => (
            <Grid item xs={12} md={2}>
              <Link 
                to={item.to} 
                style={{ textDecoration: 'none' }}      
              >
                <Button className="menu__btn">{item.name}</Button>
              </Link>
            </Grid>
            ))}
        </Grid> 

      </nav>
    </div>
  ) 
}

export default Menu