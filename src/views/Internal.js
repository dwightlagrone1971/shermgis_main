import React from 'react'
import '../style/Internal.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';

const items = [
  { name: "9-1-1 Addressing", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=ab4fff47a6074a9f8efc19821359cdca" },
  { name: "Code Incidents (2022)", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=83d4528b6352402d9ce262c45a07e11a" },
  { name: "Code Incidents (All)", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=2e9d062f4c6e4cac9ec10024ebc8eb7b" },
  { name: "Code Simple Map", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=97013d9eff694c059406229d9df88b37" },
  { name: "Detailed Parks Map", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=cf482ea52d5740ddb490a36157167b74" },
  { name: "Flushing Locations", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=cd171035c62b4db98271bafaf78f5758" },
  { name: "Mowing Map", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=ddab962963934f83bc0639b135562d26" },
  { name: "Planned Developments", href: "https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=0c92c7e9aeb24681ad89c56675d65977"},
  { name: "Storm Water Fees", href: "https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=6ff28e8cc3fa4cd69d80b9077eec3f1c"},
];

function Internal() {
  return (
    <>
      <div class="">
        <h2 className="font-serif text-4xl mt-10 mb-10 lg:mt-14 lg:mb-2 lg:text-5xl">Internal Maps</h2>

        <Grid class="lg:w-9/12 auto lg:pt-16 lg:m-auto grid lg:grid-cols-3 lg:w-6/12 lg:gap-2 lg:text-center">
          {items.map((items, idx) => (
              <a 
                href={items.href}
                target="_blank"       
              >
                <Button class="font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200 mb-6 w-44 py-1 ">{items.name}</Button>
              </a>
            ))}          
        </Grid>
      </div>
    </>
  )
}

export default Internal