import { FC } from 'react'

// [Interfaces]
import { IGrid, IGridColumn, IGridRow } from './Grid.interfaces'
// [Styles]
import * as s from './Grid.styled'

export const Col: FC<IGridColumn> = ({ children, start, end }) => {
	return (
		<s.GridColumn start={start} end={end}>
			{children}
		</s.GridColumn>
	)
}

export const Row: FC<IGridRow> = ({ children, start, end }) => {
	return (
		<s.GridColumn start={start} end={end}>
			{children}
		</s.GridColumn>
	)
}

const Grid: FC<IGrid> = ({ children }) => {
	return <s.Grid>{children}</s.Grid>
}

export default Grid
