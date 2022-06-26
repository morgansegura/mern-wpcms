import { MouseEventHandler, ReactNode } from 'react'

export interface IBackdrop {
	children?: ReactNode[] | ReactNode
	open?: boolean
	close?: boolean
	onClick?: MouseEventHandler<HTMLDivElement>
}
