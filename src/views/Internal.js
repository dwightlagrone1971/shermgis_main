import React from 'react'
import '../style/Internal.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "Code Incidents (2022)", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=83d4528b6352402d9ce262c45a07e11a" },
  { name: "Code Incidents (All)", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=2e9d062f4c6e4cac9ec10024ebc8eb7b" },
  { name: "Code Simple Map", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=97013d9eff694c059406229d9df88b37" },
  { name: "Detailed Parks Map", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=78f0ba56e43a4edeb9e2166ebf7c7337" },
  { name: "Mowing Map", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=ddab962963934f83bc0639b135562d26" },
  { name: "Planned Developments", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=0c92c7e9aeb24681ad89c56675d65977"},
  { name: "Storm Water Fees", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=6ff28e8cc3fa4cd69d80b9077eec3f1c"},
];

function Internal() {
  return (
    <div className="internal"> 
      <h1>Internal Maps</h1>

        <Grid container spacing={6} rowSpacing={3}>
          {items.map((data, idx) => (
            <Grid item xs={12} md={4}>
              <a 
                target="_blank" 
                href={data.href}       
              >
                <Button className="internal__btn">{data.name}</Button>
              </a>
            </Grid>
            ))}
        </Grid>
    </div>     
  ) 
}

export default Internal