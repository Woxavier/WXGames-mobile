import React, { useContext } from 'react'
import { RefreshControl } from 'react-native'

import TopBar from '../../components/TopBar'
import { CartContext } from '../../context/Cart'
import { Wrapper, Container, Title } from './styles'

import CartGames from '../../components/CartGames'

import { FontAwesome } from '@expo/vector-icons'; 
import FinalCart from '../../components/FinalCart'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Mario from '../../images/super-mario-odyssey.png'
import InfiniteWarfare from '../../images/call-of-duty-infinite-warfare.png'
import TheWitcher from '../../images/the-witcher-iii-wild-hunt.png'
import CODWWII from "../../images/call-of-duty-wwii.png"
import MortalKombat from '../../images/mortal-kombat-xl.png'
import Shards from "../../images/shards-of-darkness.png"
import TerraMedia from '../../images/terra-media-sombras-de-mordor.png'
import Fifa from '../../images/fifa-18.png'
import Horizon from '../../images/horizon-zero-dawn.png'


export default function Carrinho(){

  const { cart } = useContext(CartContext)
  let freight = 0
  let totalPrice = 0
  let subtotal = 0
  let img = null

  const [refreshing, setRefreshing] = React.useState(false);

  function onRefresh () {
    setRefreshing(true);

    setTimeout(() => setRefreshing(false), 2000);
  };

  function handleRemoveGameCart(gamesCart){
    let gameId = gamesCart.id

    cart.map( (games, index) =>{
      if(games.id == gameId){
        cart.splice(index, 1)
      }
    })

    console.log(cart)
  }



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
            freight = 10*cart.length
            totalPrice = freight + subtotal
          }

          if(gamesCart.id == 312){
            img = Mario
          } if(gamesCart.id == 201){
            img = InfiniteWarfare
          } if(gamesCart.id == 102){
            img = TheWitcher
          } if(gamesCart.id == 99){
            img = CODWWII
          } if(gamesCart.id == 12){
            img = MortalKombat
          } if(gamesCart.id == 74){
            img = Shards
          } if(gamesCart.id == 31){
            img = TerraMedia
          } if(gamesCart.id == 420){
            img = Fifa
          } if(gamesCart.id == 501){
            img = Horizon
          }

          return (
            <CartGames key={gamesCart.id} name={gamesCart.name} price={gamesCart.price} source={img}>
              <TouchableOpacity onPress={() => handleRemoveGameCart(gamesCart)}>
                <FontAwesome name="trash-o" size={24} color="black" />
              </TouchableOpacity>
            </CartGames>
          )
        })}

        <Title>Finalizar compra</Title>

        <FinalCart valueSubtotal={subtotal} valueFreight={freight} valueTotal={totalPrice} />

      </Container>
    </Wrapper>  
  )
}