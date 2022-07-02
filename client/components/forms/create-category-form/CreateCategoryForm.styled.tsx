import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'
import {
	List,
	ListItem,
	ListItemAvatar,
	ListItemIcon,
	ListItemText,
} from '@core/data-display/list/List.styled'
import {
	ICategoryList,
	ICategoryListItem,
	ICategoryListItemAvatar,
	ICategoryListItemText,
	ICreateCategoryForm,
	ICreateCategoryList,
	IUpdateCategory,
} from './CreateCategoryForm.interfaces'

export const CreateCategoryForm = styled.div<ICreateCategoryForm>``

export const CategoryContainer = styled.div`
	display: grid;
`

export const CategoryFormContainer = styled.div`
	margin-top: ${style.sp['11']};
	grid-column: 1 /13;

	${style.media.lg`
		grid-column: 1 /8;
	`}
`

export const CategoryFormTitle = styled.h2``

export const CategoryFormCopy = styled.p`
	margin-bottom: ${style.sp['2']};
	line-height: 30px;
`

export const CategoryListContainer = styled.div`
	margin-top: ${style.sp['5']};
	grid-column: 1 /13;
	border-top: 1px solid
		${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral60};

	${CategoryFormTitle} {
		margin-top: ${style.sp['5']};
		margin-bottom: ${style.sp['2']};
	}

	${style.media.lg`
		grid-column: 9 /13;
		border-top: none;
	`}
`

export const UpdateCategoryForm = styled.div``

export const CreateCategoryList = styled.div<ICreateCategoryList>`
	${ListItem} {
		padding-right: ${style.sp['1.5']};
		padding-left: ${style.sp['1.5']};
		border-radius: ${style.radius.md};
		border: 1px solid
			${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral70};
		transition: all 0.3s ease-out;

		&:not(:first-child) {
			margin-top: ${style.sp['2']};
		}

		a {
			flex: 1 0 auto;
			transition: all 0.3s ease-out;
		}

		&:hover {
			background-color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral80};
			border-color: 1px solid
				${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral90};

			a {
				color: ${style.colors.secondary50};
			}
		}
	}
	${ListItemIcon} {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 35px;
		height: 35px;
		display: flex;
		border-radius: ${style.radius.circle};
		overflow: hidden;

		transition: all 0.3s ease-out;

		svg,
		svg::after {
			transition: all 0.3s ease-out;
		}
		svg {
			position: relative;
			z-index: 2;
			width: 20px;
			height: 20px;
			font-size: 16px;
		}
		&::after {
			z-index: 1;
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
		}

		&:hover {
			svg {
				color: ${style.colors.neutral00};
			}
			&::after {
				background-color: ${props =>
					props.theme.palette.name === 'light'
						? style.colors.neutral06
						: rgba(style.colors.black, 0.25)};
			}
		}
	}
`

export const CategoriesList = styled.div<ICategoryList>``

export const CategoriesListItem = styled.div<ICategoryListItem>``

export const CategoriesListItemText = styled.div<ICategoryListItemText>`
	${ListItemText} {
	}
`

export const CategoriesListItemAvatar = styled.div<ICategoryListItemAvatar>`
	${ListItemAvatar} {
	}
`
