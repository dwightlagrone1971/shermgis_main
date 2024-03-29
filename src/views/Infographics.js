import React from 'react'
import '../style/Infographics.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';


const items = [
  { name: "2020 Census Summary", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/efc39b7428244ff1b1af5ac56cc1f7c6/data" },
  { name: "At Risk Population", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e0c48bed80c34c78bbb240d02d36f072/data" },
  { name: "Childhood and Female Equity", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c849568be7e049858268186929f9e95f/data" },
  { name: "Community Change Snapshot", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/63a1abdc2c92481ca7f15e69651f6b3a/data" },
  { name: "Community Profile", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a8de093170a54f3f86aae4b773e22656/data" },
  { name: "Commute Profile", href: "https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/f7d1e808f4884e53bbdb066fccd2e0f0/data" },
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
      <span><h2 class="pb-4 font-serif text-4xl mt-8 mb-18 lg:mt-10 lg:mb-2 lg:text-5xl"><strong>Infographics</strong></h2>
      <p class="lg:text-lg lg:mx-24 text-center"> Infographics are a visual representation of information or data. The Infographics below use American Community
      Survey (ACS), Census, Esri forecasts, and third-party retail data.</p></span>

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
  ) 
}

export default Infographics