import styled from 'styled-components/native'

export const Container = styled.View`
  height: 120px;
  padding: 20px;
  border-radius: 5px;
  elevation: 5;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
  margin: 0 auto;
`


export const Img = styled.Image`
  height: 90px;
  width: 70px;
`

export const Description = styled.View`
  padding: 16px;
  flex: 1;
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