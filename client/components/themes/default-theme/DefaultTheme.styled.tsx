import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'
// [Styles]
import { Backdrop } from '@core/feedback/backdrop/Backdrop.styled'
import {
	DrawerContainer,
	DrawerMenuItem,
	DrawerMenuClose,
} from '@core/navigation/drawer/Drawer.styled'

export const DefaultTheme = styled.div`
	/* [Backdrop] */

	${Backdrop} {
		background-color: ${props =>
			props.theme.palette.name === 'light'
				? rgba(style.colors.neutral06, 0.95)
				: rgba(style.colors.neutral60, 0.95)};
	}

	/* [Drawer] */

	${DrawerContainer} {
		background-color: ${props =>
			props.theme.palette.name === 'light'
				? rgba(style.colors.neutral05, 0.95)
				: rgba(style.colors.neutral40, 0.95)};

		box-shadow: 0 0 60px
				${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral10 : style.colors.neutral80},
			0 0 30px
				${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral70};
	}
	${DrawerMenuItem} {
		a {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral40 : style.colors.neutral07};

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
	${DrawerMenuClose} {
		color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral60 : style.colors.neutral09};

		&::after {
			background-color: ${props =>
				props.theme.palette.name === 'light'
					? rgba(style.colors.neutral05, 0)
					: rgba(style.colors.neutral30, 0)};
		}
		&:hover {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral90 : style.colors.neutral00};
			&::after {
				background-color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral05 : style.colors.neutral80};
			}
		}
		&:active {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral50 : style.colors.neutral08};
			&::after {
				background-color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral70};
			}
		}
	}
`

export const BackdropOpen = css``
