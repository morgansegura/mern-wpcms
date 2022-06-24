import { ReactNode } from 'react'

export interface DrawerProps {
	children?: ReactNode[] | ReactNode
	open?: boolean
	close?: boolean
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
