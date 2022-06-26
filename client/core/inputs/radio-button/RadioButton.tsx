import { FC } from 'react'

// [Interfaces]
import { IRadioButton } from './RadioButton.interfaces'
// [Styles]
import * as s from './RadioButton.styled'

const RadioButton: FC<IRadioButton> = ({ children }) => {
	return <s.RadioButtonContainer>{children}</s.RadioButtonContainer>
}

export default RadioButton
