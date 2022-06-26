import { FC } from 'react'

// [Interfaces]
import { IButton } from './FloatingActionButton.interfaces'
// [Styles]
import * as s from './FloatingActionButton.styled'

const FloatingActionButton: FC<IButton> = ({ children }) => {
	return <s.FloatingActionButtonContainer>{children}</s.FloatingActionButtonContainer>
}

export default FloatingActionButton
