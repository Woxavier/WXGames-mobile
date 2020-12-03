import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle:{
    alignItems: 'center',
    paddingLeft: 16,
  },
}))`
  height: 130px;
  /* margin-top: 10px; */
`

export const Options = styled.View`
  width: 80px;
  height: 85px;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid #ef233c;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

export const Bold = styled.Text`
  font-weight: bold;
  color: #ef233c;
  font-size: 11px;
`