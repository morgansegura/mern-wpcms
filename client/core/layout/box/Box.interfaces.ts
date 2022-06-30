import { ReactNode } from 'react'

export interface IBox {
	children?: ReactNode[] | ReactNode
	as?: any
	m?: string | object
	my?: string | object
	mx?: string | object
	mt?: string | object
	mr?: string | object
	mb?: string | object
	ml?: string | object
	p?: string | object
	py?: string | object
	px?: string | object
	pt?: string | object
	pr?: string | object
	pb?: string | object
	pl?: string | object
	row?: string | object
	column?: string | object
	align?: string | object
	justify?: string | object
	flex?: string | object
}
