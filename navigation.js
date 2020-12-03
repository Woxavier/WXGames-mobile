import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'

import Home from './src/screens/Home'
import Carrinho from './src/screens/Carrinho'

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home"
  },
  Carrinho: {
    lib: AntDesign,
    name: "shoppingcart"
  }
}

export default function Navigation(){
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) =>{
          const {lib: Icon, name} = icons[route.name]
          return <Icon name={name} size={size} color={color}/>
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#ef233c',
          height: 50
        },
        activeTintColor: '#FFF',
        inactiveTintColor: '#000',
      }}

    >
      <Tab.Screen 
        name='Home' 
        component={Home}
      />
      <Tab.Screen 
        name='Carrinho' 
        component={Carrinho}
      />
    </Tab.Navigator>
  )
}

