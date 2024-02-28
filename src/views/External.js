import React from 'react'
import '../style/External.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "Annexations", href: "https://cityofsherman.maps.arcgis.com/apps/instan/sidebar/index.html?appid=b1576846cfeb4d12bef28062c2ebf695" },
  { name: "Capital Improvements", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/1be8bb7a791645809e4cdc07d77c8178" },
  { name: "Council District", href: "https://experience.arcgis.com/experience/f2ead96f4ef14f19bf2e23767b65d200/" },
  { name: "Development Projects", href: "https://experience.arcgis.com/experience/bf7f869e182c42df876a2e667559e24a/page/Development-Projects/?data_id=dataSource_2-18a242207a2-layer-5%3A35&draft=true&views=Proposed-" },
  { name: "Emergency Sirens", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=d54707ac56ee4971ab757339883af01a" },
  { name: "Flood Zones (2023)", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=a8237551de654fa1ab568ad83c685253" },
  { name: "Future Landuse", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=dbedffd8809640808078dea3f7db0f4c" },
  { name: "Parks & Recreation", href: "https://experience.arcgis.com/experience/7f30c9436abd408391d472171b504f3c/?draft=true" },
  { name: "Planning & Zoning", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/0f075ea148cf4eb1818a73566114fa7b" },
  { name: "Sex Offender", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=446adf191c764b3e83a116072a77979d" },
  { name: "Sherman Schools", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/ba7afb45ee6d4e028fe81721efae9d01" },
  { name: "Thoroughfares", href: "https://cityofsherman.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=5dbc6809eaa746e5909b8e82fe24d602" },
  { name: "Trash Pickup Days", href: "https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=000839d23a014bd791bb19d4667f177c" },
  { name: "Zoning Districts", href: "https://experience.arcgis.com/experience/86a2d52ddc6f4b708fab341ddf9ac265" },
  
];


function External() {
  return (
    <div class=""> 
      <h1 class="font-serif text-4xl sm:mt-4 lg:mt-2 lg:text-5xl">Public Maps</h1>

        <Grid class="lg:w-7/12 auto lg:m-auto grid lg:grid-cols-4 lg:w-6/12 lg:gap-2 lg:text-center">
          {items.map((items, idx) => (
              <a 
                target="_blank"
                href={items.href}       
              >
                <Button class="font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200 mb-6 w-44 py-2 ">{items.name}</Button>
              </a>
            ))}          
        </Grid>
    </div>     
  ) 
}

export default External
