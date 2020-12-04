import styled from 'styled-components/native'


export const Container = styled.View`
  elevation: 5;
  background: white;
  width: 90%;
  margin: 5px auto;
  padding: 20px 10px;
`

export const Description = styled.View`
  flex-direction: row;
  padding: 3px;
  justify-content: space-between;
`

export const Label = styled.Text`
  font-weight: bold;
`
export const Value = styled.Text`
  color: goldenrod;
  font-weight: bold;
`

export const Line = styled.View`
  height: 1px;
  background-color: black;
  margin: 10px 0;
`

export const LabelTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

export const ValueTotal = styled.Text`
  font-weight: bold;
  color: red;
`