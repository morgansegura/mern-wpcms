import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba, rem } from 'polished'
import {
	DrawerContainer,
	DrawerFrame,
	DrawerMenuContainer,
	DrawerMenu,
	DrawerMenuTitle,
	DrawerMenuItem,
	DrawerMenuClose,
} from 'core/styles/navigation'

// [Core Styles]
export const StyledDrawerContainer = styled(DrawerContainer)`
	top: 50%;
	left: 0;
	width: 100%;
	max-width: 350px;
	height: 95vh;
	border-radius: 0 10px 10px 0;
	color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['80']
			: props.theme.palette.neutral['08']};
	background-color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['06']
			: props.theme.palette.neutral['70']};
	box-shadow: 0 0 60px
			${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.neutral['20']
					: props.theme.palette.neutral['00']},
		0 0 30px
			${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.neutral['08']
					: props.theme.palette.neutral['06']};
`

export const StyledDrawerMenuContainer = styled(DrawerMenuContainer)``
export const StyledDrawerFrame = styled(DrawerFrame)``
export const StyledDrawerMenu = styled(DrawerMenu)``
export const StyledDrawerMenuTitle = styled(DrawerMenuTitle)``
export const StyledDrawerMenuItem = styled(DrawerMenuItem)``
export const StyledDrawerMenuClose = styled(DrawerMenuClose)``
