import React from 'react'
import '../style/Infographics.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';


const items = [
  { name: "At Risk Population", href: "https://experience.arcgis.com/experience/068d1053b9cb499b9d1f1047930c4686/" },
  { name: "Community Profile", href: "https://experience.arcgis.com/experience/ab26267db2d348c98718a01213a414b0/?draft=true" },
  { name: "Coronavirus Planning", href: "https://experience.arcgis.com/experience/449926e4cf1f4df8b42995a1a5ea3e51/" },
  { name: "Demographic Summary", href: "https://experience.arcgis.com/experience/875fc49140eb457caadda7306d7105ec/e" },
  { name: "Employment Overview", href: "https://experience.arcgis.com/experience/585123d5273844c7a2a961d492a8f6b0/" },
  { name: "Healthcare & Insurance", href: "https://experience.arcgis.com/experience/dff2ef170bdb4b3aa4444438036631b8/" },
  { name: "Key Facts", href: "https://experience.arcgis.com/experience/90fe3dd8d86c4045a9cac14c85e53524/" },
  { name: "Population Trends", href: "https://experience.arcgis.com/experience/0db2b23b4f374ff7994175333130743d/e" },
  { name: "Tapestry Profile", href: "https://experience.arcgis.com/experience/fe9979cd4e594836ac8c4debd19a8733/e" },
];

function Infographics() {
  return (
    <div className="graphics"> 
      <span class="graphics_desc"><strong className="large">Infographics</strong> are a visual representation of information
        or data. The Infographics below use American Community
        Survey (ACS), Census, Esri forecasts, and third-party retail data.</span>   

      <Grid container spacing={4} rowSpacing={3} className="graphics__container">
        {items.map((data, idx) => (
          <Grid item xs={12} md={4}>
            <a 
              target="_blank" 
              rel="noreferrer"
              href={data.href}             
            >
              <Button className="graphics__btn" >{data.name}</Button>
            </a> 
          </Grid>
        ))}
      </Grid>      
    </div>     
  ) 
}

export default Infographics