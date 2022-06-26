export interface ITextField {
	type?: string
	label?: string
	register?: any
	watch?: any
	required?: boolean
	autoComplete?: string
	placeholder?: string
	size?: string
	name?: string
	errors?: { [x: string]: any }
	error?: boolean
	success?: boolean
	focus?: boolean
	blur?: boolean
	ref?: any
}
