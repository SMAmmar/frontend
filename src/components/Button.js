import styled from "styled-components";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial
} from "react-awesome-button";

import styles from "react-awesome-button/src/styles/themes/theme-red";

import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <AwesomeButton
          type="primary"
          style={{ width: "250px", marginTop: "1%" }}
        >
          Join Now
        </AwesomeButton>
      </div>
    );
  }
}
