import { ReactNode } from 'react'

export interface IList {
	children?: ReactNode[] | ReactNode
}

export interface IListItem {
	children?: ReactNode[] | ReactNode
}

export interface IListItemText {
	primary?: string
	secondary?: string
}

export interface IListItemAvatar {
	children?: ReactNode[] | ReactNode
}
