import { ReactNode } from 'react'
export interface MenuProps {
	mode?: string
	nang?: string
	items?: MenuItemProps[]
	children?: ReactNode[] | ReactNode
}

export interface MenuItemProps {
	label?: ReactNode[] | ReactNode
	active?: boolean
	href?: string
	key?: string
}
