import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Dots = styled.div`
  height: 10px;
  width: 10px;
  border: 1px solid #f8f5f0;
  border-radius: 50%;
  padding: 0;
  margin: 0;

  ${props => props.attr && css`
    background-color: black;
    `}
`

export default class Dot extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));

  }

  render() {
    return(
      <div>
        <Dots
        onClick={this.handleClick}
        attr={this.state.isClicked ? 'yes' : ''}
        >
        </Dots>
      </div>
    )
  }

}
