import React from 'react'
import { Container, Img, Description, Title, Price } from './styles'

export default function CartGames(props){
  return(
    <Container>
      <Img source={props.source}/>

      <Description>
        <Title>{props.name}</Title>

        <Price>Preço: R$ {props.price}</Price>
      </Description>

      {props.children}
    </Container>
  )
}