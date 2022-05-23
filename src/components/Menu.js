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
    <div className="menu">
      <nav className="menu__container">
        <Grid container spacing={6} rowSpacing={3}>
          <Grid item xs={12} md={2}>
            <Link 
              to="/"
              style={{ textDecoration: 'none' }}      
            >
              <Button className="menu__btn">Featured Maps</Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link 
              to="/downloads"
              style={{ textDecoration: 'none' }}      
            >
              <Button className="menu__btn">GIS Downloads</Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link 
              to="/graphics"
              style={{ textDecoration: 'none' }}      
            >
              <Button className="standout__btn">Infographics</Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link 
              to="/internal"
              style={{ textDecoration: 'none' }}      
            >
              <Button className="menu__btn">Internal Maps</Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link 
              to="/maps"
              style={{ textDecoration: 'none' }}      
            >
              <Button className="menu__btn">PDF Maps</Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link 
              to="/about"
              style={{ textDecoration: 'none' }}      
            >
              <Button className="menu__btn">About</Button>
            </Link>
          </Grid>
        </Grid>        
      </nav>
    </div>
  ) 
}

export default Menu