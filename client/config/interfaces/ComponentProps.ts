import { ReactNode } from 'react'

export interface FooterProps {
	children?: ReactNode[] | ReactNode
}

export interface HeaderProps {
	children?: ReactNode[] | ReactNode
}

export interface ToggleModeProps {
	theme?: string
}

export interface LoadingPageProps {
	type?: string
}
