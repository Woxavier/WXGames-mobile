import React from 'react'

import { Container, Img, Title, Description, Price, Score, Cart } from './style'

export default function Games(props){
  return(
    <Container>
      <Img source={props.source}/>

      <Description>
        <Cart>
          {props.children}
        </Cart>
        <Title>{props.name}</Title>
        <Price>R$ {props.price}</Price>
        <Score>Score: {props.score}</Score>
      </Description>
    </Container>  
  )
}
