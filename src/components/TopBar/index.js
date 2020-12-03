import React from 'react'

import Logo from '../../images/logo2.png'

import {Header, Img, Bolder} from './styles'

export default function TopBar(){
  return(
      <Header>
        <Img source={Logo}/>
        <Bolder>Sua Loja de Games</Bolder>
      </Header>
  )
}