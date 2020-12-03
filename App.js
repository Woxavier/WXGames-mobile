import 'react-native-gesture-handler'
import React from 'react'

import App from './src'
import CartProvider from './src/context/Cart'

export default function Main(){
  return (
    <CartProvider>
      <App />
    </CartProvider>
  )  
}