import React from 'react'
import '../style/External.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "Annexations", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=b1576846cfeb4d12bef28062c2ebf695" },
  { name: "Council District", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=7992b6f7bd864093a6fbba7ed2cfb1fb" },
  { name: "Emergency Sirens", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=d54707ac56ee4971ab757339883af01a" },
  { name: "Sex Offender Restricted", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=446adf191c764b3e83a116072a77979d" },
  { name: "Parks & Recreation", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=f60017513bbf45f4b2197074a2e6c2c7" },
  { name: "Sherman Schools", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=a51f81f031d94df884004a01d5da5932" },
  { name: "Trash & Pickup Days", href: "https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=000839d23a014bd791bb19d4667f177c" },
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
