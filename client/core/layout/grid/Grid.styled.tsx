import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { IGridColumn, IGridRow, IGrid } from './Grid.interfaces'

export const Grid = styled.div<IGrid>`
	${style.grid()};
`

export const GridColumn = styled.div<IGridColumn>`
	${props =>
		props.start &&
		props.end &&
		css`
			grid-column: 1 / 13;

			${style.media.lg`
			    grid-column: ${props.start} / ${props.end};
            `}
		`}
`

export const GridRow = styled.div<IGridRow>`
	${props =>
		props.start &&
		props.end &&
		css`
			grid-column: 1 / 13;

			${style.media.lg`
			    row-column: ${props.start} / ${props.end};
            `}
		`}
`
