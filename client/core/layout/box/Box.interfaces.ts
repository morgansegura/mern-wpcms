import { ReactNode } from 'react'

export interface IBox {
	children?: ReactNode[] | ReactNode
	as?: any
	m?: string | number
	mt?: string | number
	p?: string | number
}
