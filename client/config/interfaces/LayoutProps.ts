import { ReactNode } from 'react'

export interface LayoutProps {
	children?: ReactNode[] | ReactNode
}

export interface BackdropProps {
	children?: ReactNode[] | ReactNode
	open?: boolean
	close?: boolean
}
