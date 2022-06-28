import { ReactNode } from 'react'

export interface IForm {
	children?: ReactNode[] | ReactNode
	onSubmit?: any
	title?: string
	copy?: string
}
export interface IFormSubmit {
	label?: ReactNode[] | ReactNode
}
