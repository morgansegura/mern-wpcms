import { ReactNode } from 'react'

export interface ILayout {
	children?: ReactNode[] | ReactNode
}

// [Grid]
export interface IGrid {
	columns?: number
	rows?: number
	size?: number
}

export interface IGridColumn {
	start?: number
	end?: number
}
