import { FC } from 'react'

// [Interfaces]
import { ILink } from './Link.interfaces'
// [Styles]
import * as s from './Link.styled'

const Link: FC<ILink> = ({ children }) => {
	return <s.LinkContainer>{children}</s.LinkContainer>
}

export default Link
