import React from 'react'
import '../style/Infographics.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';


const items = [
  { name: "At Risk Population", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e0c48bed80c34c78bbb240d02d36f072/data" },
  { name: "Community Profile", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a8de093170a54f3f86aae4b773e22656/data" },
  { name: "Coronavirus Planning", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/5d30386b703f4c2b8b312b26ff1edb4f/data" },
  { name: "Demographic Summary", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/7bcb90c26f6646e0bc582972c7ced355/data" },
  { name: "Employment Overview", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/03a3ef5669a8432c9e6b9d5250c1e072/data" },
  { name: "Healthcare & Insurance", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/89eba46f3e6d4e9bb6f82239029b8b4e/data" },
  { name: "Key Facts", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/53c27765695d458aa3f316053e730391/data" },
  { name: "Population Trends", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/4bc7fe0d4bf24dbe80a7aca1b5b77eb4/data" },
  { name: "Tapestry Profile", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/d408af53cef744f8b492fc0516df7a36/data" },
];

function Infographics() {
  return (
    <div class="h-screen lg:mt-12 lg:w-12/12 text-center">
      <span><h2 class="pb-4 font-serif text-4xl mt-10 mb-18 lg:mt-14 lg:mb-2 lg:text-5xl"><strong>Infographics</strong></h2>
      <p class="lg:text-lg lg:mx-24 text-center"> Infographics are a visual representation of information or data. The Infographics below use American Community
      Survey (ACS), Census, Esri forecasts, and third-party retail data.</p></span>

      <Grid class="pt-8 pb-8 lg:w-9/12 auto lg:pt-16 lg:m-auto grid lg:grid-cols-3 lg:w-6/12 lg:gap-2 lg:text-center">
        {items.map((items, idx) => (
          <a 
            target="_blank"
            href={items.href}       
          >
            <Button class="font-serif bg-neutral-700 hover:bg-neutral-500 text-neutral-200 mb-6 w-44 py-1 ">{items.name}</Button>
          </a>
        ))}          
      </Grid>
    </div>
  ) 
}

export default Infographics