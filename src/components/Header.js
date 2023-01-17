import React from "react";
import styled from "styled-components";
import '../style/Header.css'

const Hero = styled.div`
    width: 100%;
    height: 420px;
    background-image: url(${props => props.desktop}); no-repeat;
    background-size: cover;
  @media screen and (max-width: 100%) {
    width: 100%;
    height: 300px;
    background-image: url(${props => props.table}); no-repeat;
  }
  @media screen and (max-width: 100%) {
    width: 100%;
    height: 200px;
    background-image: url(${props => props.mobile}); no-repeat;
  }
`;

function Header() {
  return (
    <>
      <div class="bg-neutral-700">
        <Hero
            desktop="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/8c29f25290cd448a88f36ac6fd53a20e/data"
            tablet="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/49073d084b6c46e18df8442d5112731f/data"
            mobile="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/83ed60f6820d4e51821b0f3d19713f78/data"
          />
          <h2 class="text-neutral-200 font-serif absolute text-lg lg:text-3xl top-10 left-1/2 -translate-x-1/2 -translate-y-1/2">Welcome</h2>
          <h2 class="text-neutral-200 font-serif absolute text-2xl lg:text-5xl top-20 lg:mt-4 left-1/2 -translate-x-1/2 -translate-y-1/2">Analyze Sherman</h2>
          <h2 class="text-neutral-200 font-serif absolute text-lg lg:text-2xl top-28 lg:mt-4 left-1/2 -translate-x-1/2  -translate-x-1/2">Analyze Sherman is the City of Sherman's open data hub. We invite you to explore our datasets, web maps and other information.</h2>
      </div>
    </>
  );
}

export default Header;