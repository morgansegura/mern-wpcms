import { ReactNode } from 'react'

export interface IGrid {
	children?: ReactNode[] | ReactNode
}

export interface IGridColumn {
	children?: ReactNode[] | ReactNode
	start?: string
	end?: string
}

export interface IGridRow {
	children?: ReactNode[] | ReactNode
	start?: string
	end?: string
}
