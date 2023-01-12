import React from 'react'
import '../style/PDFMaps.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';


const items = [
  { name: "City Limits Map (Large)", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/7b05f3ab5b514ae99a9f665380721ada/data" },
  { name: "City Limits Map (Small)", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/4009aba74faa4c40b57d3337f4f11706/data" },
  { name: "Control Monuments", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/878a50934b3b4adc85218e46af40f77d/data" },
  { name: "Council District Map", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/6891bd3aedfb41d59e25eed86d7fb0c3/data" },
  { name: "Future Land Use (2022)", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a432bc22115d4bb48893ab4e65a1cf2b/data" },
  { name: "E.T.J. Map", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2097361b3fec4b289763d414df040b27/data" },
  { name: "Planned Developments", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/cf38bef2ed614d07bd278e806b84ab39/data" },
  { name: "Sherman Schools", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/098b94114bec4031a3638978be32874e/data" },
  { name: "Thoroughfare Map (2022)", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2378452606ac4c0f940ec6c4e20e82ec/data" },
  { name: "Zoning Map", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e1e4313e1d1248228d6bb29b31163ac4/data" },
];


function PDFMaps() {
  return (
    <div className="maps"> 
      <h1>PDF Maps</h1>

      <Grid container spacing={6} rowSpacing={3}>
        {items.map((data, idx) => (
          <Grid item xs={12} md={4}>
            <a 
              target="_blank" 
              rel="noreferrer"
              href={data.href}       
            >
              <Button class="bg-neutral-700 text-neutral-200 py-2 px-4 w-60 md:w-36 md:h-24 lg:w-60 lg:h-10">{data.name}</Button>
            </a>
          </Grid>
        ))}
      </Grid>
      
    </div>     
  ) 
}
export default PDFMaps