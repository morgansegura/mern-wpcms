import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'
import { DrawerMenuClose, DrawerMenuItem } from '@core/navigation/drawer/Drawer.styled'
import {
	AccordionContent,
	AccordionContentItem,
	AccordionTab,
	AccordionTabContentMenuLink,
	AccordionTabTitle,
} from '@core/surfaces'

export const DrawerMenu = styled.div`
	${DrawerMenuItem} {
		a {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral40 : style.colors.neutral60};

			&:hover {
				color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral80 : style.colors.black};
			}
			&:active {
				color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral80 : style.colors.neutral90};
			}
		}
	}

	${AccordionContent} {
		background-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral60 : style.colors.neutral60};
	}
	${AccordionTabTitle} a {
		color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral60 : style.colors.neutral60};
		&:hover {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral90 : style.colors.neutral90};
		}
		&:acive {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral50 : style.colors.neutral50};
		}
	}
	${AccordionTab} {
		transition: all 0.3s ease-out;
		padding: ${style.sp['2']} ${style.sp['3']};
		color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral60 : style.colors.neutral60};
		background-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral05 : style.colors.neutral05};
		border-bottom: 1px solid
			${props =>
				props.theme.palette.name === 'light'
					? rgba(style.colors.neutral07, 0.35)
					: rgba(style.colors.neutral07, 0.35)};

		:first-child {
			border-top: 1px solid
				${props =>
					props.theme.palette.name === 'light'
						? rgba(style.colors.neutral07, 0.35)
						: rgba(style.colors.neutral07, 0.35)};
		}
		&:hover {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral90 : style.colors.neutral90};
			background-color: ${props =>
				props.theme.palette.name === 'light'
					? rgba(style.colors.neutral00, 0.45)
					: rgba(style.colors.neutral00, 0.45)};
			border-bottom: 1px solid
				${props =>
					props.theme.palette.name === 'light'
						? rgba(style.colors.neutral07, 0.25)
						: rgba(style.colors.neutral07, 0.25)};
		}

		&:active {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral50 : style.colors.neutral50};

			background-color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral06};
		}
	}
	${AccordionContentItem} {
		color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral60 : style.colors.neutral60};
		background-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral05 : style.colors.neutral05};

		&:hover {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral90 : style.colors.neutral90};

			background-color: ${props =>
				props.theme.palette.name === 'light'
					? rgba(style.colors.neutral00, 0.15)
					: style.colors.neutral80};
		}

		&:active {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral50 : style.colors.neutral50};

			background-color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral06};
		}

		${AccordionTabContentMenuLink} {
			a {
				padding-top: ${style.sp['2']};
				padding-bottom: ${style.sp['2.5']};
				padding-left: ${style.sp['7']};
				color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral60 : style.colors.neutral60};
				background-color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral00 : style.colors.neutral00};

				&:hover {
					color: ${props =>
						props.theme.palette.name === 'light' ? style.colors.black : style.colors.black};
					background-color: ${props =>
						props.theme.palette.name === 'light'
							? rgba(style.colors.neutral00, 0.965)
							: rgba(style.colors.neutral00, 0.965)};
				}
				&:hover {
					color: ${props =>
						props.theme.palette.name === 'light' ? style.colors.neutral50 : style.colors.neutral50};
				}
			}
		}
		&:first-child {
			a {
				padding-top: ${style.sp['2.5']};
			}
		}
		&:last-child {
			a {
				padding-bottom: ${style.sp['2.5']};
			}
		}
		&:not(:first-child) {
			border-top: 1px solid
				${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral05 : style.colors.neutral05};
		}
	}
`
