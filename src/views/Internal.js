import React from 'react'
import '../style/Internal.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "Code Incidents (2022)", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=83d4528b6352402d9ce262c45a07e11a" },
  { name: "Code Incidents (All)", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=2e9d062f4c6e4cac9ec10024ebc8eb7b" },
  { name: "Code Simple Map", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=193d2f120fa947aeb6fe65989faef9a9" },
  { name: "Detailed Parks Map", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=78f0ba56e43a4edeb9e2166ebf7c7337" },
  { name: "Mowing Map", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=1e4c344342414fbba77d9805a67a61a4" },
  { name: "Planned Developments", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=1b043cbadf884e95bf7b84e9813fa952" },
  { name: "Storm Water Fees", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=6ff28e8cc3fa4cd69d80b9077eec3f1c" },
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
                rel="noreferrer"
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