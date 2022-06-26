import { FC } from 'react'

// [Interfaces]
import { IHidden } from './Hidden.interfaces'
// [Styles]
import * as s from './Hidden.styled'

const Hidden: FC<IHidden> = ({ children, contain }) => {
	return <s.Hidden contain={contain}>{children}</s.Hidden>
}

export default Hidden
