import styled from 'styled-components/native'

export const Container = styled.View`
  width: 90%;
  height: 230px;
  margin: 10px 20px;
  border-radius: 5px;
  flex-direction: row;
  padding: 20px;
  elevation: 5;
`

export const Img = styled.Image`
  height: 100%;
  border-radius: 15px;
`
export const Description = styled.View`
  margin-left: 10px;
  flex: 1;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
`

export const Price = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 18px;
`

export const Score = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: goldenrod;
`

export const Cart = styled.TouchableOpacity`
  text-align: right;
  align-items: flex-end;
`