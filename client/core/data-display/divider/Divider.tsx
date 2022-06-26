import { FC } from 'react'

// [Interfaces]
import { IDivider } from './Divider.interfaces'
// [Styles]
import * as s from './Divider.styled'

const Divider: FC<IDivider> = ({ children }) => {
	return <s.DividerContainer>{children}</s.DividerContainer>
}

export default Divider
