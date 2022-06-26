import { FC } from 'react'

// [Interfaces]
import { IButtonGroup } from './ButtonGroup.interfaces'
// [Styles]
import * as s from './ButtonGroup.styled'

const ButtonGroup: FC<IButtonGroup> = ({ children }) => {
	return <s.ButtonGroupContainer>{children}</s.ButtonGroupContainer>
}

export default ButtonGroup
