import { FC } from 'react'

// [Interfaces]
import { IBox } from './Box.interfaces'
// [Styles]
import * as s from './Box.styled'

const Box: FC<IBox> = ({ children, contain }) => {
	return <s.Box contain={contain}>{children}</s.Box>
}

export default Box
