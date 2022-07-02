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
export interface IRemoveCategory {
	item?: TCategory
	handleRemove: Function
	icon?: ReactNode[] | ReactNode
}
export interface IUpdateCategory {
	item?: TCategory
	handleUpdate: any
	icon?: ReactNode[] | ReactNode
}

export interface ICreateCategoryForm {
	children?: ReactNode[] | ReactNode
}

export interface ICategoryList {
	children?: ReactNode[] | ReactNode
	setCategories: Function
	categories: Object[]
	edit: Function
	remove: Function
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
export interface ICategories {
	children?: ReactNode[] | ReactNode
}
