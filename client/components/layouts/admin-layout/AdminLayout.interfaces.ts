import { ReactNode } from 'react'

export interface IAdminLayout {
	children?: ReactNode[] | ReactNode
	role?: string
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
