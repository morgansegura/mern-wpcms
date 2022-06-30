import { ReactNode } from 'react'

export interface ICreateCategoryForm {
	title?: string
	copy?: string
}
export interface IGetCategories {
	update?: boolean
}
export interface ICreateCategoriesLayout {}

export type TCategory = {
	_id?: string
	name?: string
	slug?: string
}

export interface ICategory {
	item?: TCategory
}

export interface IUpdateCategoriesProvider {
	children?: ReactNode[] | ReactNode
}
