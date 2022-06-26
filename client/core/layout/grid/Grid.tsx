import { FC } from 'react'

// [Interfaces]
import { IGrid } from './Grid.interfaces'
// [Styles]
import * as s from './Grid.styled'

const Grid: FC<IGrid> = ({ children, contain }) => {
	return <s.Grid contain={contain}>{children}</s.Grid>
}

export default Grid
