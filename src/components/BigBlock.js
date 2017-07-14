import styled from 'styled-components'
import React, { Component } from 'react'
import Block from './Block'

const BBdiv = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  flex-wrap: wrap;
`
export default class BigBlock extends Component {
  render() {
    return(
      <BBdiv>
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </BBdiv>
    );
  }
}
