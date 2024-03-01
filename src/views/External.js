import React from 'react'
import '../style/External.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "Annexations", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/2848ecc1229d454fa962392967548752" },
  { name: "Capital Improvements", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/1be8bb7a791645809e4cdc07d77c8178" },
  { name: "Council District", href: "https://experience.arcgis.com/experience/f2ead96f4ef14f19bf2e23767b65d200/" },
  { name: "Development Projects", href: "https://experience.arcgis.com/experience/bf7f869e182c42df876a2e667559e24a/page/Development-Projects/?data_id=dataSource_2-18a242207a2-layer-5%3A35&draft=true&views=Proposed-" },
  { name: "Emergency Sirens", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/a3685004829d4465abd34e067f30c5fb" },
  { name: "Flood Zones (2023)", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/0544b4d51106433ba1c0637fb2c5f724" },
  { name: "Future Landuse", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/f408802be3f04be2a2c699a033a878b3" },
  { name: "Parks & Recreation", href: "https://experience.arcgis.com/experience/7f30c9436abd408391d472171b504f3c/?draft=true" },
  { name: "Planning & Zoning", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/0f075ea148cf4eb1818a73566114fa7b" },
  { name: "Sex Offender Restricted", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/7797ab097a38493da51128f124d91370" },
  { name: "Sherman Schools", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/ba7afb45ee6d4e028fe81721efae9d01" },
  { name: "Thoroughfares", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/3b28c17a8cac472ab8ff18b0576cacfe" },
  { name: "Trash Pickup Days", href: "https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=000839d23a014bd791bb19d4667f177c" },
  { name: "Zoning Districts", href: "https://cityofsherman.maps.arcgis.com/apps/dashboards/1e77f1f404ae4ff58043b6c88cdf1fd1" },
  
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
