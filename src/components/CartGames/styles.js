import styled from 'styled-components/native'

export const Container = styled.View`
  height: 120px;
  padding: 15px;
  border-radius: 5px;
  elevation: 3;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
  margin: 5px auto;
`


export const Img = styled.Image`
  height: 70px;
  width: 70px;
`

export const Description = styled.View`
  padding: 16px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

export const Price = styled.Text`
  font-weight: bold;
  color: goldenrod;
  font-size: 14px;
`