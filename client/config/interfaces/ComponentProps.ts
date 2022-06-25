import { ReactNode } from 'react'

export interface FooterProps {
	children?: ReactNode[] | ReactNode
}

export interface HeaderProps {
	children?: ReactNode[] | ReactNode
}

export interface BackdropProps {
	children?: ReactNode[] | ReactNode
	open?: boolean
	close?: boolean
}

export interface ToggleModeProps {
	theme?: string
}
