import React from "react";
import Button from "./Button";
import styled from "styled-components";
import ImgTv from "../images/play-button.png";
import ImgTablet from "../images/list.png";
import ImgMacbook from "../images/fast-forward.png";
import { Link } from "react-router-dom";
import { generateMedia } from "styled-media-query";

function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>Learn How our AI works.</span>
          <Link className="btn" to="/choose-plan">
            <Button>try it now</Button>
          </Link>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          {/* Tablet Image Container */}
          <div>
            <img src={ImgTablet} alt="tablet" />
            <h3>Login to Gamolytcs</h3>
            <p>Login to Gamolytcs using your SteamID.</p>
          </div>

          {/* Tv Image Container */}
          <div>
            <img src={ImgTv} alt="tv" />
            <h3>Play your game</h3>
            <p>
              Our API's will fetch your match data and parse it.Then give replay
              analysis
            </p>
          </div>

          {/* Macbook Image Container */}
          <div>
            <img src={ImgMacbook} alt="macbook" />
            <h3>Its over 9000</h3>
            <p>
              See your level of skill and improve it with the post-analyses of
              matches
            </p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}

export default TabContentTwo;

//Media
const customMedia = generateMedia({
  smDesktop: "1440px",
  tablet: "900px"
});

// Main Tab Content Container
const TabContainer = styled.div`
  background: var(--main-deep-dark);
  .tab-content {
    margin: 0 10%;
  }
  // Tab Top Content
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 2.5rem 0;
    ${customMedia.lessThan("smDesktop")`
    grid-template-columns: repeat(2, 1fr);
    `}
    ${customMedia.lessThan("tablet")`
      grid-template-columns: 1fr;
      text-align: center;
      row-gap: 1.5rem;
    `}
  }
  img {
    width: 50%;
  }
  span {
    grid-column: 1 / 8;
    ${customMedia.lessThan("tablet")`
    grid-column: 1 / -1;
    font-size: 1.5rem;
  `}
  }
  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10 / 12;
    ${customMedia.lessThan("tablet")`
    grid-column: 1 / -1;
    margin-left: 30%;
    margin-right: 30%;
  `}
  }
  // Tab Bottom Content
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    ${customMedia.lessThan("tablet")`
    grid-template-columns: 1fr;
    `}
  }
  h3 {
    margin: 0.5rem 0;
  }
  p {
    color: var(--main-grey);
  }
`;
