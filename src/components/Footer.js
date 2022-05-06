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
    <div className="footer"> 
        <Grid container spacing={2} className="footer__container">
          {items.map((item, idx) => (
            <Grid item xs={12} md={2} className="footer__grid">
              <a 
                target="_blank" 
                rel="noreferrer"
                href={item.href}
                style={{ textDecoration: 'none' }}        
              >
                <Button className="footer__btn">{item.name}</Button>
              </a>
            </Grid>
            ))}
        </Grid>
    </div>     
  ) 
}

export default Footer