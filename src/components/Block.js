import styled from 'styled-components'
import React, { Component } from 'react'
import Dot from './Dots'

const Blocks = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
`

export default class Block extends Component {
  render() {
    return(
      <Blocks>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </Blocks>
    );
  }
}
