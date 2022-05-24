import React from 'react'
import '../style/External.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "Council District", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=7992b6f7bd864093a6fbba7ed2cfb1fb" },
  { name: "Emergency Sirens", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=d54707ac56ee4971ab757339883af01a" },
  { name: "Sex Offender Restricted", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=446adf191c764b3e83a116072a77979d" },
  { name: "Parks & Recreation", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=764b52a844714416b969b55c9fcf9245" },
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
