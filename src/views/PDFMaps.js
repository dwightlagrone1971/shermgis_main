import React from 'react'
import '../style/PDFMaps.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';


const items = [
  { name: "City Limits Map", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2dab9848f87b489abb3bb1f5fb39616b/data" },
  //{ name: "City Limits Map (Small)", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/4009aba74faa4c40b57d3337f4f11706/data" },
  { name: "Control Monuments", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/878a50934b3b4adc85218e46af40f77d/data" },
  { name: "Council District Map", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/eb9618ce75314413ad4819f8d3f1b202/data" },
  { name: "Future Land Use", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a432bc22115d4bb48893ab4e65a1cf2b/data" },
  { name: "Future Trails", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c580d8564c324c3982e3cd91be7056a3/data" },
  { name: "E.T.J. Map", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/48e428e63b6f451b9b58e1a8c14efe23/data" },
  { name: "Planned Developments", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/cf38bef2ed614d07bd278e806b84ab39/data" },
  { name: "Sherman Schools", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/098b94114bec4031a3638978be32874e/data" },
  { name: "Thoroughfare Map", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2378452606ac4c0f940ec6c4e20e82ec/data" },
  { name: "Zoning Map", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e1e4313e1d1248228d6bb29b31163ac4/data" },
];


function PDFMaps() {
  return (
    <>
      <div class="">
        <h2 className="font-serif text-4xl mt-10 mb-10 lg:mt-14 lg:mb-2 lg:text-5xl">PDF Maps</h2>

        <Grid class="lg:w-7/12 auto lg:pt-16 lg:m-auto grid lg:grid-cols-4 lg:w-6/12 lg:gap-2 lg:text-center">
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
    </>
  )
}
export default PDFMaps