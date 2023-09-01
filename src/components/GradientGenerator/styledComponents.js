// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  background-size: cover;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100vh;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`
export const DirectionText = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`
export const DirectionList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const PickColorText = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InputsContainer = styled.div`
  display: flex;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
`

export const Input = styled.input`
  background: none;
  border: 0;
  cursor: pointer;
  padding: 0;
  height: 45px;
  width: 85px;
`

export const Label = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 10px;
`
export const GenerateButton = styled.button`
  color: #000000;
  background-color: #00c9b7;
  font-family: 'Roboto';
  border-radius: 8px;
  border-width: 0;
  height: 40px;
  width: 100px;
  margin-top: 25px;
  font-weight: 600;
  cursor: pointer;
`
