import React, { useMemo, useState, useContext } from 'react'
import Categories from '../../components/Categories'
import Games from '../../components/Games'

import { Wrapper, Container, Title } from './styles'

import { Products } from '../../utils/products'
import { View } from 'react-native'

import { Picker } from '@react-native-picker/picker';
import { Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler'
import TopBar from '../../components/TopBar'

import { CartContext } from '../../context/Cart'

export default function Home(){
  const { cart } = useContext(CartContext)

  const [order, setOrder] = useState();
  const [games, setGames] = useState(Products);

  function handleOrderGames (){
    if(order == 'priceAB'){
      setGames(Products.sort((a,b) => {
        return b.price - a.price
      }))
    }else if(order == 'priceBA'){
      setGames(Products.sort((a,b) => {
        return a.price - b.price
      }))
    } else if(order == "alphabeticAZ"){
      setGames(Products.sort((a,b) =>{
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
      }))
    } else if(order == "alphabeticZA"){
      setGames(Products.sort((a,b) =>{
        if(a.name < b.name) return 1;
        if(a.name > b.name) return -1;
      }))
    } else if (order == 'score'){
      setGames(Products.sort((a,b) => {
        return b.score - a.score
      }))
    }
  };
  

  function handleAddRemoveGameCart(item){
    let gameId = item.id
    let searchImage = {exist: false, index: 0}

    cart.map((games, index) =>{
      if(games.id == gameId){
        return searchImage = {exist: true, index: index}
      }
    })

    if(searchImage.exist){
      cart.splice(searchImage.index, 1)
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
      })
    }
    

    console.log(cart)
  }


  useMemo(() => {handleOrderGames()}, [order])

  return (
    <Wrapper>
      <Container>
        <TopBar/>
        
        <Title>Categorias</Title>
        <Categories />

        <View style={{flexDirection: 'row', justifyContent: "space-between"}}> 
          <Title>Jogos</Title>

          <Picker
            selectedValue={order}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue) =>
              setOrder(itemValue)
          }>
            <Picker.Item label="Ordenar" value="" />
            <Picker.Item label="Preço (Alto ao Baixo)" value="priceAB" />
            <Picker.Item label="Preço (Baixo ao Alto)" value="priceBA" /> 
            <Picker.Item label="Ordem Alfabética(A-Z)" value="alphabeticAZ" />
            <Picker.Item label="Ordem Alfabética(Z-A)" value="alphabeticZA" />
            <Picker.Item label="Score" value="score" />
          </Picker>
        </View>

        {games.map((item, index) =>{
          return (
            <Games key={item.id} source={item.image} name={item.name} price={item.price} score={item.score} >
              <TouchableOpacity key={index} onPress={() => handleAddRemoveGameCart(item)}>
                <Entypo name="shopping-cart" size={24} color={'black'}/>
              </TouchableOpacity>
            </Games>
          ) 
        })}
        
        
      </Container>
    </Wrapper>
  )

}

