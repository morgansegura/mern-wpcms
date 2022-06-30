import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { IGridRow, IGrid, TGridSizes, IGridColumn } from './Grid.interfaces'

export const Grid = styled.div<IGrid>`
	display: grid;

	gird-template-columns: repeat(1fr, ${props => props.repeat && props.repeat});

	${(props: IGrid) =>
		typeof props.gap === 'string' &&
		css`
			gap: ${style.sp[props.gap]};
		`}
	${(props: IGrid) =>
		typeof props.gap === 'object' &&
		props.gap.map(
			(item: TGridSizes) =>
				item.sm &&
				css`
					${style.media.sm`
						gap: ${item.sm};
					`}
				`,
		)};
	${(props: IGrid) =>
		typeof props.gap === 'object' &&
		props.gap.map(
			(item: TGridSizes) =>
				item.md &&
				css`
					${style.media.md`
						gap: ${item.md};
					`}
				`,
		)};
	${(props: IGrid) =>
		typeof props.gap === 'object' &&
		props.gap.map(
			(item: TGridSizes) =>
				item.lg &&
				css`
					${style.media.lg`
						gap: ${item.lg};
					`}
				`,
		)};
	${(props: IGrid) =>
		typeof props.gap === 'object' &&
		props.gap.map(
			(item: TGridSizes) =>
				item.xl &&
				css`
					${style.media.xl`
						gap: ${item.xl};
					`}
				`,
		)};
	${(props: IGrid) =>
		typeof props.gap === 'object' &&
		props.gap.map(
			(item: TGridSizes) =>
				item.xxl &&
				css`
					${style.media.xxl`
						gap: ${item.xxl};
					`}
				`,
		)};
`

export const GridColumn = styled.div<IGridColumn>`
	/* [Default] */
	${(props: IGridColumn) =>
		typeof props.start === 'string' &&
		css`
			grid-column-start: ${props.start};
		`}
	/* [Resonsive] */
	/* [SM] */
	${(props: IGridColumn) =>
		typeof props.start === 'object' &&
		props.start.map(
			(item: TGridSizes) =>
				item.sm &&
				css`
					${style.media.sm`
						grid-column-start: ${item.sm};
					`}
				`,
		)};
	${(props: IGridColumn) =>
		typeof props.start === 'object' &&
		props.start.map(
			(item: TGridSizes) =>
				item.md &&
				css`
					${style.media.md`
						grid-column-start: ${item.md};
					`}
				`,
		)};
	${(props: IGridColumn) =>
		typeof props.start === 'object' &&
		props.start.map(
			(item: TGridSizes) =>
				item.lg &&
				css`
					${style.media.lg`
						grid-column-start: ${item.lg};
					`}
				`,
		)};
	${(props: IGridColumn) =>
		typeof props.start === 'object' &&
		props.start.map(
			(item: TGridSizes) =>
				item.xl &&
				css`
					${style.media.xl`
						grid-column-start: ${item.xl};
					`}
				`,
		)};
	${(props: IGridColumn) =>
		typeof props.start === 'object' &&
		props.start.map(
			(item: TGridSizes) =>
				item.xxl &&
				css`
					${style.media.xxl`
						grid-column-start: ${item.xxl};
					`}
				`,
		)};
	${(props: IGridColumn) =>
		typeof props.end === 'string' &&
		css`
			grid-column-end: ${props.end};
		`}
	/* [Resonsive] */
	/* [SM] */
	${(props: IGridColumn) =>
		typeof props.end === 'object' &&
		props.end.map(
			(item: TGridSizes) =>
				item.sm &&
				css`
					${style.media.sm`
						grid-column-end: ${item.sm};
					`}
				`,
		)};
	${(props: IGridColumn) =>
		typeof props.end === 'object' &&
		props.end.map(
			(item: TGridSizes) =>
				item.md &&
				css`
					${style.media.md`
						grid-column-end: ${item.md};
					`}
				`,
		)};
	${(props: IGridColumn) =>
		typeof props.end === 'object' &&
		props.end.map(
			(item: TGridSizes) =>
				item.lg &&
				css`
					${style.media.lg`
						grid-column-end: ${item.lg};
					`}
				`,
		)};
	${(props: IGridColumn) =>
		typeof props.end === 'object' &&
		props.end.map(
			(item: TGridSizes) =>
				item.xl &&
				css`
					${style.media.xl`
						grid-column-end: ${item.xl};
					`}
				`,
		)};
	${(props: IGridColumn) =>
		typeof props.end === 'object' &&
		props.end.map(
			(item: TGridSizes) =>
				item.xxl &&
				css`
					${style.media.xxl`
						grid-column-end: ${item.xxl};
					`}
				`,
		)};
`

export const GridRow = styled.div<IGridRow>``
