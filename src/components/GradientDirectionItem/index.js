// Write your code here
import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, isActive, onClickDirectionItem} = props

  const onClickDirection = () => {
    onClickDirectionItem(details.directionId)
  }

  return (
    <DirectionItem>
      <DirectionButton activeProp={isActive} onClick={onClickDirection}>
        {' '}
        {details.displayText}{' '}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
