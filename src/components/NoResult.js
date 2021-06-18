import React from 'react'
import ghost from '../images/ghost.png'
import styled from 'styled-components'

const StyledLoading = styled.div`
  min-height: calc(100vh - 340px);
  background: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
  }
  p {
    text-align: center;
    color: #fff;
    font-size: 1.5em;
    margin-top: 10px;
  }
`

const NoResult = () => {
  return (
    <StyledLoading>
      <img src={ghost} alt="no result" />
      <p>Sorry... No result</p>
    </StyledLoading>
  )
}

export default NoResult
