import { FC } from 'react'

// [Interfaces]
import { IButton } from './Button.interfaces'
// [Styles]
import * as s from './Button.styled'

const Button: FC<IButton> = ({ children }) => {
	return <s.ButtonContainer>{children}</s.ButtonContainer>
}

export default Button
