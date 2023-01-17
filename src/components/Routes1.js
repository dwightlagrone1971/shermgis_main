import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home.js';
import External from '../views/External.js';
import Downloads from '../views/Downloads.js';
import Contacts from '../views/Contacts.js';
import Infographics from '../views/Infographics.js';
import Internal from '../views/Internal.js';
import PDFMaps from '../views/PDFMaps.js';
import About from '../views/About.js';
import WhatIsGIS from '../views/WhatIsGIS.js';
import WhatIsGPS from '../views/WhatIsGPS.js';

const Hero = styled.div`
    width: 100%;
    height: 500px;
    background-image: url(${props => props.desktop}); no-repeat;
    background-size: cover;
  @media screen and (max-width: 100%) {
    width: 100%;
    height: 100%;
    background-image: url(${props => props.table}); no-repeat;
  }
  @media screen and (max-width: 100%) {
    width: 100%;
    height: 100%;
    background-image: url(${props => props.mobile}); no-repeat;
  }
`;

function Routes1() {
  return (
    <>
        <div class="relative">
            <div class="relative">
                <Hero
                    desktop="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/5b951cedd3b3404e89b120e839894be7/data"
                    tablet="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/5b951cedd3b3404e89b120e839894be7/data"
                    mobile="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/5b951cedd3b3404e89b120e839894be7/data"
                />
            </div>
            <div class="absolute top-0 w-screen h-full">
                <Routes >
                    <Route class="border-2 border-orange-500">
                        <Route path='/' element={ <Home /> }></Route>
                        <Route path='/external' element={ <External />}></Route>
                        <Route path='/downloads' element={ <Downloads /> }></Route>
                        <Route path='/contacts' element={ <Contacts /> }></Route>
                        <Route path='/graphics' element={ <Infographics /> }></Route>
                        <Route path='/internal' element={ <Internal /> }></Route>
                        <Route path='/maps' element={ <PDFMaps /> }></Route>
                        <Route path='/about' element={ <About /> }></Route>
                        <Route path='/gis' element={ <WhatIsGIS /> }></Route>
                        <Route path='/gps' element={ <WhatIsGPS /> }></Route>       
                    </Route>
                </Routes>
            </div>
        </div>
    </>
  );
}

export default Routes1;