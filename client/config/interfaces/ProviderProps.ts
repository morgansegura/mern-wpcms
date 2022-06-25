import { ReactNode } from 'react'

export interface AppProviderProps {
	children?: React.ReactNode
}

export interface AuthProviderProps {
	children?: ReactNode
}

export interface ThemesProviderProps {
	children?: React.ReactNode[] | React.ReactNode
}
