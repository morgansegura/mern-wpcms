import { ReactNode } from 'react'
export interface MenuProps {
	mode?: string
	namg?: string
	items?: MenuItemProps[]
	children?: ReactNode[] | ReactNode
}
export interface MenuItemProps {
	label?: ReactNode[] | ReactNode
	active?: boolean
	href?: string
	key?: string
}
