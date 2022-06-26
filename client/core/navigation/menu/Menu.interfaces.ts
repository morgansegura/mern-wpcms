import { ReactNode } from 'react'

export interface IMenu {
	mode?: string
	namg?: string
	items?: TMenuItem[]
	children?: ReactNode[] | ReactNode
}
export type TMenuItem = {
	label?: ReactNode[] | ReactNode
	active?: boolean
	href?: string
	key?: string
}
