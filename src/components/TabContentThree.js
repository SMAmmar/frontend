import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { generateMedia } from "styled-media-query";
// Icons
import Button from "./Button";
import { Icon } from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import { checkmark } from "react-icons-kit/icomoon/checkmark";

function TabContentThree() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Choose one plan and embark on journey to greatness.
          </span>
          <Link className="btn" to="/choose-plan">
            <Button>try it now</Button>
          </Link>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          <table>
            <thead>
              <tr>
                <th />
                <th>Basic</th>
                <th>Plus</th>
                <th>Plus Ultra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly price</td>
                <td>$9.99</td>
                <td>$13.99</td>
                <td>$16.99</td>
              </tr>

              <tr>
                <td>Fully Customized Dashboard</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Real Time Draft Building</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Get Analyzed by our AI</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Mood Analyzer</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Ultra Coaching by Professionals</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </TabContainer>
  );
}

export default TabContentThree;

// Media
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1000px",
  mdDesktop: "950px"
});

// Main Container
const TabContainer = styled.div`
  background: var(--main-deep-dark);
  .tab-content {
    margin: 0 10%;
    padding-bottom: 1%;
  }
  .tab-top-content {
    display: grid;
    align-items: left;
    grid-template-columns: repeat(12, 1fr);
    padding: 3rem 0 0;
    ${customMedia.lessThan("lgDesktop")`
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    text-align: center;
    `}
  }
  span {
    grid-column: 3 / 9;
    ${customMedia.lessThan("lgDesktop")`
      grid-column: 1 / -1;
    `}
  }
  .btn {
    grid-column: 9 / 12;
    margin-left: 3rem;
    margin-right: 5.1rem;
    ${customMedia.lessThan("mdDesktop")`
    grid-column: 1 / -1;
    font-size: 1rem;
    margin-left: 30%;
    margin-right: 30%;
  `}
  }
  // Tab Bottom Content
  .tab-bottom-content {
    margin: 2rem auto;
  }
  // Table
  table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }
  table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
  }
  table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
  }
  table tbody tr td:first-child {
    text-align: left;
  }
  table tbody tr:nth-child(even) {
    background: #222;
  }
`;
