import { ReactNode } from 'react'
export interface MenuProps {
	mode?: string
	items?: []
	children?: ReactNode[] | ReactNode
}
export interface MenuItemProps {
	label?: string
	active?: boolean
	href?: string
}
