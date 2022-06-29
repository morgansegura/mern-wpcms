import { FormEventHandler, ReactNode } from 'react'

export interface IForm {
	children?: ReactNode[] | ReactNode
	onSubmit?: FormEventHandler<HTMLFormElement>
	autoComplete?: string
	title?: string
	copy?: string
}

export interface IFormSubmit {
	label?: ReactNode[] | ReactNode
}
