import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  ResponsiveContainer,
  MainHeading,
  DirectionText,
  DirectionList,
  PickColorText,
  Input,
  FormContainer,
  Label,
  InputContainer,
  GenerateButton,
  InputsContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].directionId,
    activeColorInput1: '#8ae323',
    activeColorInput2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {activeColorInput1, activeColorInput2, activeDirectionId} = this.state

    const directionValue = gradientDirectionsList.find(
      item => item.directionId === activeDirectionId,
    )

    const value = `to ${directionValue.value}, ${activeColorInput1}, ${activeColorInput2}`

    this.setState({gradientValue: value})
  }

  onChangeColor1 = event => {
    this.setState({activeColorInput1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({activeColorInput2: event.target.value})
  }

  renderFormContainer = () => {
    const {activeColorInput1, activeColorInput2} = this.state

    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <InputsContainer>
          <InputContainer>
            <Label htmlFor="color1"> {activeColorInput1} </Label>
            <Input
              type="color"
              id="color1"
              value={activeColorInput1}
              onChange={this.onChangeColor1}
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="color2"> {activeColorInput2} </Label>
            <Input
              type="color"
              id="color2"
              value={activeColorInput2}
              onChange={this.onChangeColor2}
            />
          </InputContainer>
        </InputsContainer>
        <GenerateButton type="submit"> Generate </GenerateButton>
      </FormContainer>
    )
  }

  onClickDirectionItem = activeDirectionId => {
    this.setState({activeDirectionId})
  }

  render() {
    const {activeDirectionId, gradientValue} = this.state

    return (
      <MainContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <MainHeading> Generate a CSS Color Gradient </MainHeading>
          <DirectionText> Choose Direction </DirectionText>
          <DirectionList>
            {gradientDirectionsList.map(item => (
              <GradientDirectionItem
                onClickDirectionItem={this.onClickDirectionItem}
                isActive={activeDirectionId === item.directionId}
                details={item}
                key={item.directionId}
              />
            ))}
          </DirectionList>

          <PickColorText> Pick The Colors </PickColorText>

          {this.renderFormContainer()}
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default GradientGenerator
