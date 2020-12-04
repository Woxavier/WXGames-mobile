import React from 'react'

import { Container, Description, Label, Value, Line, LabelTotal, ValueTotal } from './styles'

export default function FinalCart(props){
  return(
    <Container>
      <Description>
        <Label>Subtotal dos produtos: </Label>
        <Value>R$ {props.valueSubtotal}</Value>
      </Description>
    
      <Description>
        <Label>Frete: </Label>
        <Value>{props.valueFreight}</Value>
      </Description>
      
      <Line />

      <Description>
        <LabelTotal>Total: </LabelTotal>
        <ValueTotal>R$ {props.valueTotal}</ValueTotal>
      </Description>
    </Container>
  )
}