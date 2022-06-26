import { FC } from 'react'

// [Interfaces]
import { IToggleButton } from './ToggleButton.interfaces'
// [Styles]
import * as s from './ToggleButton.styled'

const ToggleButton: FC<IToggleButton> = ({ children }) => {
	return <s.ToggleButtonContainer>{children}</s.ToggleButtonContainer>
}

export default ToggleButton
