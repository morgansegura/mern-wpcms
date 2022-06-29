import { MouseEventHandler, ReactNode } from 'react'

export interface IMenu {
	mode?: string
	items?: TMenuItem[]
	children?: ReactNode[] | ReactNode
}
export type TMenuItem = {
	href?: string
	title?: string
	label?: ReactNode[] | ReactNode
	active?: boolean
	onClick?: MouseEventHandler<HTMLAnchorElement>
}
