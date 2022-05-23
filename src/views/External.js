import React from 'react'
import '../style/External.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "Council District", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=8d6315e42fc24d1aa12e2c7477f7d0d0" },
  { name: "Emergency Sirens", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=a36f3d5aa21349d6a152822fe36f79fb" },
  { name: "Sex Offender Restricted", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=446adf191c764b3e83a116072a77979d" },
  { name: "Parks & Recreation", href: "https://cityofsherman.maps.arcgis.com/apps/Shortlist/index.html?appid=6202d49de88b4fc4b94e9878648584ae" },
  { name: "Sherman Schools", href: "https://cityofsherman.maps.arcgis.com/apps/Viewer/index.html?appid=3f4cce8e33e347cfb0393803600a65db" },
  { name: "Zoning Map", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=d0d3a59dfbe2427d94a512bc5a586270" },
];


function External() {
  return (
    <div className="external"> 
      <h1>Public Web Maps</h1>

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

export default External
