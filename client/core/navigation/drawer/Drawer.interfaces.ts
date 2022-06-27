import { MouseEventHandler, ReactNode } from 'react'

export interface IDrawer {
	children?: ReactNode[] | ReactNode
	direction?: string
	open?: boolean
	close?: boolean
	closeIcon?: ReactNode[] | ReactNode
	content?: ReactNode[] | ReactNode
	menu?: ReactNode[] | ReactNode
}

export interface IDrawerTrigger {
	children?: ReactNode[] | ReactNode
	onClick?: MouseEventHandler<HTMLButtonElement>
	open?: boolean
	close?: boolean
}

export interface IDrawerFrame {
	children?: ReactNode[] | ReactNode
	open?: boolean
	close?: boolean
}

export interface IDrawerProvider {
	children?: ReactNode[] | ReactNode
}
