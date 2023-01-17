import React from 'react'
import '../style/WhatIsGPS.css'


function WhatIsGIS() {
    return (
        <div class="lg:w-7/12 lg:m-auto">      
            <h2 class="font-serif text-4xl mt-10 mb-10 lg:mb-10 lg:mt-14 lg:mb-2 lg:text-5xl">What is GIPS?</h2>
            <div >                  
                <div >
                    <img 
                        src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/94a104d6f95c42c98d30e60c12f1d7b1/data" 
                        class="round"
                        alt="WhatIsGIS" />
                </div>            
                <p><b>GPS (Global Positional System) </b>is a passive, all-weather, 24-hour global navigation satellite system developed for and operated by the U.S. Department of Defense. The system is comprised of 24+ satellites, one master control station located in Colorado Springs, Colorado, and hundreds of government and independent local reference stations. The local reference stations are used for post-processing data collected in the field to obtain maximum accuracy.
            The GIS department gathers GPS positions for new development to ensure spatial accuracy when recording city assets. City assets include fire hydrants, water lines and associated valves, storm lines, sewer lines and land records, such as, parcel and subdivision boundaries. Spatially accurate data enable staff to locate assets in the future, especially if they become buried.</p>    
            </div>  
        </div> 
    )
}
export default WhatIsGIS