import { FC } from 'react'

// [Interfaces]
import { ICheckbox } from './Checkbox.interfaces'
// [Styles]
import * as s from './Checkbox.styled'

const Checkbox: FC<ICheckbox> = ({ children }) => {
	return <s.CheckboxContainer>{children}</s.CheckboxContainer>
}

export default Checkbox
