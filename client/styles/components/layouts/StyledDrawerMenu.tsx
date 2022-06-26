import styled from 'styled-components'
import * as style from '@styles/config/utilities'

import {
	DrawerContainer,
	DrawerFrame,
	DrawerMenuContainer,
	DrawerMenu,
	DrawerMenuTitle,
	DrawerMenuItem,
	DrawerMenuClose,
	DrawerMenuIcon,
} from 'core/navigation'

// [Core Styles]
export const StyledDrawerContainer = styled(DrawerContainer)``

export const StyledDrawerMenuContainer = styled(DrawerMenuContainer)``
export const StyledDrawerFrame = styled(DrawerFrame)``
export const StyledDrawerMenu = styled(DrawerMenu)``
export const StyledDrawerMenuTitle = styled(DrawerMenuTitle)`
	${style.fontSizing('14px', '40px', 700)};
	margin-bottom: ${style.sp['1']};
	text-transform: uppercase;
	color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['20']
			: props.theme.palette.neutral['30']};
	border-bottom-color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['07']
			: props.theme.palette.neutral['60']};
`
export const StyledDrawerMenuIcon = styled(DrawerMenuIcon)`
	display: inline-flex;
	align-self: center;

	svg {
		font-size: 18px;
		margin-right: ${style.sp['1']};
		color: ${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['60']
				: props.theme.palette.neutral['00']};
	}
`
export const StyledDrawerMenuItem = styled(DrawerMenuItem)``
export const StyledDrawerMenuClose = styled(DrawerMenuClose)``
