import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { List, ListItem, ListItemAvatar, ListItemText } from '@core/data-display/list/List.styled'
import {
	ICategoryList,
	ICategoryListItem,
	ICategoryListItemAvatar,
	ICategoryListItemText,
	ICreateCategoryForm,
	ICreateCategoryList,
	IUpdateCategoryForm,
} from './CreateCategoryForm.interfaces'

export const CreateCategoryForm = styled.div<ICreateCategoryForm>``
export const UpdateCategoryForm = styled.div<IUpdateCategoryForm>``

export const CreateCategoryList = styled.div<ICreateCategoryList>``

export const CategoriesList = styled.div<ICategoryList>`
	${List} {
	}
`

export const CategoriesListItem = styled.div<ICategoryListItem>`
	${ListItem} {
	}
`

export const CategoriesListItemText = styled.div<ICategoryListItemText>`
	${ListItemText} {
	}
`

export const CategoriesListItemAvatar = styled.div<ICategoryListItemAvatar>`
	${ListItemAvatar} {
	}
`
