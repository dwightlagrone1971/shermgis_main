import React from 'react'
import '../style/External.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "Annexations", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=b1576846cfeb4d12bef28062c2ebf695" },
  { name: "Council District", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=7992b6f7bd864093a6fbba7ed2cfb1fb" },
  { name: "Emergency Sirens", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=d54707ac56ee4971ab757339883af01a" },
  { name: "Flood Zones (2023)", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=a8237551de654fa1ab568ad83c685253" },
  { name: "Parks & Recreation", href: "https://cityofsherman.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=e9a6c773dbf34883924e1b7ae3427fdb" },
  { name: "Sex Offender Restricted", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=446adf191c764b3e83a116072a77979d" },
  { name: "Sherman Schools", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=a51f81f031d94df884004a01d5da5932" },
  { name: "Trash Pickup Days", href: "https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=000839d23a014bd791bb19d4667f177c" },
  { name: "Zoning Districts", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=d0d3a59dfbe2427d94a512bc5a586270" },
];


function External() {
  return (
    <div class=""> 
      <h1 class="font-serif text-4xl sm:mt-10 mb-10 lg:mt-10 lg:mb-4 lg:text-5xl">Public Maps</h1>

      <Grid class="h-full lg:w-9/12 lg:pt-2 lg:m-auto grid lg:grid-cols-4 lg:gap-2 lg:w-7/12 lg:text-center">
          {items.map((items, idx) => (
              <a 
                target="_blank"
                href={items.href}       
              >
                <Button class="font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200 mb-6 w-52 py-1 md:w-44">{items.name}</Button>
              </a>
            ))}          
        </Grid>
    </div>     
  ) 
}

export default External
