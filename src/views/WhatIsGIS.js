import React from 'react'
import '../style/WhatIsGIS.css'


function WhatIsGIS() {
    return (
        <div class="sm:p-10 lg:w-7/12 lg:m-auto">      
            <h2 class="font-serif text-4xl mt-4 mb-20 lg:mb-12 lg:mt-4 lg:mb-2 lg:text-5xl">What is GIS?</h2>
            <div class="">                  
                <div >
                    <img 
                        src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/1c1777c03d434fc887bcf7e9fbc5dba1/data" 
                        class="round"
                        alt="WhatIsGIS" />
                </div>            
                <p><b>GIS (Global Information System) </b>
                is a collection of computer hardware, software, and geographic data for capturing, managing, analyzing and displaying all forms of geographically referenced information (Source: ESRI). GIS allows for the comparison of geographic data and information associated with those geographic areas. Questions like, “How many school-aged children are within 1,000 feet of a proposed elementary school?” Can be answered with GIS. GIS maintains data in “layers.” Each layer represents a certain type of feature: lines, points, and polygons. Features have associated information. For instance, a road is a line feature that has information such as its name. Within each layer, rules can be created in order to maintain specific characteristics and standardizations. For example, features within the land parcels layer should not overlap each other. Requiring this type of characteristic prevents technicians from overlapping lots on top of each other. The collection of layers is housed in a spatial database. Relationships between layers can be made at this level, providing even more detailed models which better depict real life. To find out more about <a href="https://www.esri.com/en-us/what-is-gis/overview" target="_blank" rel="noreferrer">Visit GIS.com.</a></p>
            </div>  
        </div> 
    )
}
export default WhatIsGIS