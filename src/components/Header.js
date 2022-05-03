import React from "react";
import styled from "styled-components";

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
    </div>
  );
}

export default Header;