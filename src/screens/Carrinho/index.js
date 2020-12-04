import React, { useContext } from 'react'
import { RefreshControl } from 'react-native'

import TopBar from '../../components/TopBar'
import { CartContext } from '../../context/Cart'
import { Wrapper, Container, Title } from './styles'

import img from '../../images/super-mario-odyssey.png'
import CartGames from '../../components/CartGames'

import { FontAwesome } from '@expo/vector-icons'; 
import FinalCart from '../../components/FinalCart'

export default function Carrinho(){

  const { cart } = useContext(CartContext)
  let freight = 0
  let totalPrice = 0
  let subtotal = 0

  const [refreshing, setRefreshing] = React.useState(false);

  function onRefresh () {
    setRefreshing(true);

    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <Wrapper>
      <Container 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <TopBar/>
        
        <Title>Carrinho</Title>

        {cart.map( gamesCart =>{
          subtotal+=gamesCart.price
          if(subtotal > 250){
            freight = 'Frete grátis'
            totalPrice = subtotal
          } else {
            freight = `R$ ${10*cart.length}`
            totalPrice = freight + subtotal
          }
          return (
            <CartGames key={gamesCart.id} name={gamesCart.name} price={gamesCart.price} source={img}>
              <FontAwesome name="trash-o" size={24} color="black" />
            </CartGames>
          )
        })}

        <Title>Finalizar compra</Title>

        <FinalCart valueSubtotal={subtotal} valueFreight={freight} valueTotal={totalPrice} />

      </Container>
    </Wrapper>  
  )
}