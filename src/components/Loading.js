import React from 'react'
import loadingIcon from '../images/loadingman.png'
import styled from 'styled-components'

const StyledLoading = styled.div`
  min-height: calc(100vh - 170px);
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

const Loading = () => {
  return (
    <StyledLoading>
      <img src={loadingIcon} alt="loading" />
      <p>Loading...</p>
    </StyledLoading>
  )
}

export default Loading
