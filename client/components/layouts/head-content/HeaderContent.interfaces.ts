import { ReactNode } from 'react'

export interface IHeaderContent {
	title?: string
	description?: string
	canonicalUrl?: string
	ogTwitterImage?: string
	ogType?: string
	ogImageUrl?: string
	children?: React.ReactChild | React.ReactChild[]
}
