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
	slug?: any
}

export interface ICategory {
	item?: TCategory
}

export interface IUpdateCategoriesProvider {
	children?: ReactNode[] | ReactNode
}
export interface ICreateCategoryForm {
	children?: ReactNode[] | ReactNode
}

export interface IUpdateCategoryForm {
	children?: ReactNode[] | ReactNode
}

export interface ICategoryList {
	children?: ReactNode[] | ReactNode
}

export interface ICreateCategoryList {
	children?: ReactNode[] | ReactNode
}

export interface ICategoryListItem {
	children?: ReactNode[] | ReactNode
}
export interface ICategoryListItemText {
	children?: ReactNode[] | ReactNode
}

export interface ICategoryListItemAvatar {
	children?: ReactNode[] | ReactNode
}
