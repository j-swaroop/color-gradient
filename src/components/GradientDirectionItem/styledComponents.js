// Style your elements here
import styled from 'styled-components'

export const DirectionItem = styled.li`
  margin: 10px;
  margin-top: 5px;
`
export const DirectionButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border-width: 0;
  border-radius: 8px;
  height: 38px;
  width: 100px;
  font-weight: 600;
  opacity: ${props => (props.activeProp ? 1 : 0.5)};
`
