import { ReactNode } from 'react'

export interface AppBarProps {
	children?: ReactNode[] | ReactNode
}

export interface ContainerProps {
	contain?: string
	children?: ReactNode[] | ReactNode
}

export interface DrawerProps {
	children?: ReactNode[] | ReactNode
	open?: boolean
	close?: boolean
	content?: ReactNode[] | ReactNode
	menu?: ReactNode[] | ReactNode
}

export interface DrawerTriggerProps {
	children?: ReactNode[] | ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	open?: boolean
	close?: boolean
}

export interface DrawerFrameProps {
	children?: ReactNode[] | ReactNode
	open?: boolean
	close?: boolean
}

export interface SVGProps {
	fill?: string
}
