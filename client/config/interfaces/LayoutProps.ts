import { ReactNode } from 'react'

export interface LayoutProps {
	children?: ReactNode[] | ReactNode
}

export interface DefaultLayoutProps {
	title?: string
	children?: ReactNode[] | ReactNode
}
