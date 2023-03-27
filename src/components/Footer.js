import React from 'react'
import '../style/Footer.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "Sherman", href: "https://www.ci.sherman.tx.us/" },
  { name: "Grayson County", href: "https://www.co.grayson.tx.us/" },
  { name: "G-CAD", href: "https://www.graysonappraisal.org/" },
  { name: "T-COG", href: "https://www.tcog.com/" },
  { name: "ESRI", href: "https://www.esri.com/en-us/home" },
]

function Footer() {
  return (
    <div class="fixed inset-x-0 bottom-0 bg-neutral-700 py-4 pt-12 pb-12 lg:py-4"> 
      <Grid class="lg:w-9/12 auto lg:m-auto grid lg:grid-cols-6 gap-4">
        {items.map((items, idx) => (
            <a
              target="_blank"
              href={items.href}       
            >
              <Button class="font-serif hover:bg-neutral-200 hover:text-neutral-700 text-neutral-200 py-1 px-4 rounded-full">{items.name}</Button>
            </a>
          ))}          
      </Grid>
    </div>     
  ) 
}

export default Footer