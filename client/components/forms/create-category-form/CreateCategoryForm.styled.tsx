import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { List, ListItem, ListItemAvatar, ListItemText } from '@core/data-display/list/List.styled'

export const CreateCategoryForm = styled.div``

export const CreateCategoryList = styled.div`
	padding-left: ${style.sp['3']};
	padding-right: ${style.sp['3']};
`

export const CategoriesList = styled.div`
	${List} {
	}
`

export const CategoriesListItem = styled.div`
	${ListItem} {
	}
`

export const CategoriesListItemText = styled.div`
	${ListItemText} {
	}
`

export const CategoriesListItemAvatar = styled.div`
	${ListItemAvatar} {
	}
`
