import React from 'react'

import { Container, Options, Bold, Title } from './styles'

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';  


export default function Categories(){
  return (
    <Container>
      <Options>
        <FontAwesome name="soccer-ball-o" size={40} color="black" />
        <Bold>Esportes</Bold>
      </Options>

      <Options>
        <MaterialCommunityIcons name="boxing-glove" size={40} color="black" />
        <Bold>Luta</Bold>
      </Options>

      <Options>
        <FontAwesome5 name="truck-monster" size={35} color="black" />
        <Bold>Corrida</Bold>
      </Options>

      <Options>
        <MaterialCommunityIcons name="tank" size={40} color="black" />
        <Bold>FPS</Bold>
      </Options>

      <Options>
        <MaterialCommunityIcons name="cards" size={50} color="black" />
        <Bold>Card Game</Bold>
      </Options>
    </Container>
  )
}