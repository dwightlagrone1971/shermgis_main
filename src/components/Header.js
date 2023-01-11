import React from "react";
import styled from "styled-components";
import '../style/Header.css'

const Hero = styled.div`
    width: 100%;
    height: 300px;
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
    <div className="header">
      <Hero
        desktop="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/8c29f25290cd448a88f36ac6fd53a20e/data"
        tablet="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/49073d084b6c46e18df8442d5112731f/data"
        mobile="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/83ed60f6820d4e51821b0f3d19713f78/data"
      />
      <div className="headerText">
        <div>
          <p className="headerText1">Welcome</p>      
        </div>
        <div>
          <p className="headerText2 ">Analyze Sherman</p>      
        </div>
        <div>
          <p className="headerText3">Analyze Sherman is the City of Sherman's open data hub. We invite you to explore our datasets, web maps and other information.</p>   
        </div>
      </div>
    </div>
  );
}

export default Header;