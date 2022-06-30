import { ReactNode } from 'react'
import { CSSObject } from 'styled-components'

export interface IGrid {
	children?: ReactNode[] | ReactNode
	size?: string | object
	repeat?: string | object
	gap?: string | CSSObject | any
	gapCol?: string | object
	gapRow?: string | object
	map?: any | null
}

export interface TGridSizes {
	sm?: string
	md?: string
	lg?: string
	xl?: string
	xxl?: string
}
export interface TGridStart {
	sm?: string | CSSObject | object
	md?: string | CSSObject | object
	lg?: string | CSSObject | object
	xl?: string | CSSObject | object
	xxl?: string | CSSObject | object
	map?: any | null
}

export interface IGridColumn {
	start?: string | CSSObject | any
	end?: string | CSSObject | any
	gap?: string | CSSObject | any
	children?: ReactNode[] | ReactNode
	map?: any | null
}
export interface IGridRow {
	start?: TGridEntity
	end?: TGridEntity
}
