import { FC } from 'react'

// [Interfaces]
import { ISelect } from './Select.interfaces'
// [Styles]
import * as s from './Select.styled'

const Select: FC<ISelect> = ({ children }) => {
	return <s.SelectContainer>{children}</s.SelectContainer>
}

export default Select
