import styled from 'styled-components'
import React from 'react'

const Head = styled.div`
  width: 750px;
  margin: auto;
  margin-bottom: 20px;
  padding: 10px;
  text-align: center;

  h1 {
    color: black;
  }

  p {
    color: white;
  }
`
const Header = () => {
  return(
    <Head>
      <h1>Dot Draw</h1>
      <p>click the dots to make a pointillism drawing</p>
    </Head>
  );
}

export default Header;
