import styled from 'styled-components'
import React, { Component } from 'react'
import Block from './BigBlock'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 750px;
  width: 750px;
  margin: 0 auto;
  border: 2px solid black;
  margin-bottom: 50px;
`

export default class Display extends Component {
  render() {
    return(
      <Container>
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </Container>
    );
  }
}
