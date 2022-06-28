import { ReactNode } from 'react'

export interface IAuthProvider {
	children?: ReactNode[] | ReactNode
}

export interface IAppProvider {
	children?: ReactNode[] | ReactNode
}

export interface IThemesProvider {
	children?: ReactNode[] | ReactNode
}

export interface IThemesProviderToggle {
	children?: ReactNode[] | ReactNode
	theme?: string
}
