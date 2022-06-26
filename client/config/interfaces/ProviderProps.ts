import { ReactNode } from 'react'

export interface AppProviderProps {
	children?: ReactNode
}

export interface AuthProviderProps {
	children?: ReactNode
}

export interface ThemesProviderProps {
	children?: ReactNode[] | ReactNode
}
