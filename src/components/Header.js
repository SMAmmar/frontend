import React, { Component } from "react";
import logo from "../images/logo_white.png";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import Icon from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import { generateMedia } from "styled-media-query";
import Button from "./Button";

import ReactDOM from "react-dom";

class Header extends Component {
  render() {
    return (
      <HeaderContainer className="header-container">
        <div className="header-top">
          <Logo className="logo" src={logo} />
        </div>
        {/* Header Content */}

        <div className="header-content">
          <Title style={{ paddingTop: "8%" }}>Play Like Never Before</Title>
          <Link to="/choose-plan">
            <Button />
          </Link>
        </div>
      </HeaderContainer>
    );
  }
}

export default Header;

// Media
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px"
});

// Logo
const Logo = styled.img`
  width: 25rem;
  height: 15rem;
  position: absolute;
  top: 35%;
  left: 10%;
  transform: translate(-50%, -50%);
  ${customMedia.lessThan("tablet")`
    left: 20%;
  `}
`;

const HeaderContainer = styled.header`
.Icon svg {
  vertical-align: bottom !important;
  margin-left: 1.5rem;
  ${customMedia.lessThan("smTablet")`
    display: none !important;
  `}
}
  
  // Header Top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 2;
  }
  // Header Content
  .header-content {
    width: 65%
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 2;
    ${customMedia.lessThan("smTablet")`
      display: grid;
      grid-template-rows: repeat(3, 60px);
      margin-top: 8rem;
    `}
    // Lg Main
    .main-offer-btn {
      ${customMedia.lessThan("lgDesktop")`
      margin: 0 33%;
      font-size: 1.5rem;
    `}
    
      ${customMedia.lessThan("mdDesktop")`
      margin: 0 25%;
      font-size: 1.5rem;
      `}
    
      ${customMedia.lessThan("tablet")`
        margin: 0 20%;
        font-size: 1.3rem;
      `}
    }
  }
`;

// Main Title
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1em;
  z-index: 1;
  ${customMedia.lessThan("tablet")`
    font-size: 2.6rem;
  `}
`;

// SubTitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
  ${customMedia.lessThan("smTablet")`
   font-size: 1.4rem;
   margin: 0;
  `}
`;
