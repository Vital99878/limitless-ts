import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'palevioletred' : 'transparent')};
  background: ${(props) => (props.secondary ? 'lightgrey' : 'transparent')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
  color: ${(props) => (props.secondary ? 'white' : 'palevioletred')};
  cursor: pointer;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const ButtonStyled = () => (
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
)

export default ButtonStyled
