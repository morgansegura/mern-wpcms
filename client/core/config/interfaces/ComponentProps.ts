import { ReactNode } from 'react'

export interface AppBarProps {
	children?: ReactNode[] | ReactNode
}

export interface ContainerProps {
	contain?: string
	children?: ReactNode[] | ReactNode
}

export interface SVGProps {
	fill?: string
}
