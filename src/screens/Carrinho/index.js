import React, { useContext } from 'react'
import { RefreshControl } from 'react-native'

import TopBar from '../../components/TopBar'
import { CartContext } from '../../context/Cart'
import { Wrapper, Container, Title } from './styles'

import img from '../../images/super-mario-odyssey.png'
import CartGames from '../../components/CartGames'

import { FontAwesome } from '@expo/vector-icons'; 

export default function Carrinho(){

  const { cart } = useContext(CartContext)
  // let frete = 0
  // let totalPrice = 0

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
          return (
            <CartGames key={gamesCart.id} name={gamesCart.name} price={gamesCart.price} source={img}>
              <FontAwesome name="trash-o" size={24} color="black" />
            </CartGames>
          )
        })}
      </Container>
    </Wrapper>  
  )
}