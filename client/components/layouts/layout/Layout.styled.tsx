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

export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	main {
		flex: 1 0 auto;
	}
`

export const StyledDrawer = styled.div`
	position: fixed;
`
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

export const StyledH1 = styled.h2`
	${style.h1}
`

export const StyledH2 = styled.h2`
	${style.h2}
`

export const StyledH3 = styled.h2`
	${style.h2}
`

export const StyledH4 = styled.h2`
	${style.h2}
`

export const StyledH5 = styled.h2`
	${style.h2}
`

export const StyledH6 = styled.h6`
	${style.body.bold}
`

export const StyledCopy = styled.p`
	${style.body.base}
`

export const StyledCopyBold = styled.p`
	${style.body.bold}
`

export const StyledCopySmall = styled.p`
	${style.body.small}
`

export const StyledCopySmallBold = styled.p`
	${style.body['small-bold']}
`

export const StyledCopyLarge = styled.p`
	${style.body.large}
`

export const StyledContentBlock = styled.div`
	margin-top: ${style.sp['4']};

	&:first-of-type {
		margin-top: ${style.sp['10']};
	}
`
