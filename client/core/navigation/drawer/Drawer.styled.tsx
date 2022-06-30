import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'
// [Interfaces]
import { IDrawer, IDrawerFrame, IDrawerTrigger } from './Drawer.interfaces'

export const DrawerTrigger = styled.div<IDrawerTrigger>`
	${props =>
		props.open
			? `

            `
			: `

            `};
`

export const DrawerFrame = styled.div<IDrawerFrame>`
	transform: scale(1);
	transition: transform 0.45s ease-out;

	${props =>
		props.open
			? `
                transition: transform 0.45s ease-out;
            `
			: `
                transition: transform 0.45s ease-out;
            `};
`

export const DrawerContainer = styled.div<IDrawer>`
	position: fixed;
	z-index: ${style.zindex.top};
	box-shadow: none;
	padding-top: ${style.sp['8']};
	transition: transform 0.4s ease-out;

	/* [TOP] */
	${props =>
		props.direction === 'top' &&
		css`
			top: 0;
			left: 0;
			right: 0;
			bottom: auto;
			width: 100%;
			transform: translateX(0) translateY(-100%);
		`}
	${props =>
		props.open &&
		props.direction === 'top' &&
		css`
			transform: translateX(0) translateY(0);
		`}
	${props =>
		props.close &&
		props.direction &&
		props.direction === 'top' &&
		css`
			transform: translateX(0) translateY(-100%);
		`}

	/* [Right] */
	${props =>
		props.direction &&
		props.direction === 'right' &&
		css`
			top: 0;
			left: auto;
			right: 0;
			bottom: 0;
			width: 100%;
			max-width: 320px;
			transform: translateX(100%) translateY(0);
		`}
	${props =>
		props.open &&
		props.direction === 'right' &&
		css`
			transform: translateX(0) translateY(0);
		`}
	${props =>
		props.close &&
		props.direction === 'right' &&
		css`
			transform: translateX(100%) translateY(0);
		`}

	/* [Bottom] */
	${props =>
		props.direction === 'bottom' &&
		css`
			/* top: 80%; */
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			transform: translateX(0) translateY(100%);
		`}
	${props =>
		props.open &&
		props.direction === 'bottom' &&
		css`
			transform: translateX(0) translateY(0);
		`}
	${props =>
		props.close &&
		props.direction === 'bottom' &&
		css`
			transform: translateX(0) translateY(100%);
		`}

	/* [Left] */
	${props =>
		props.direction === 'left' &&
		css`
			top: 0;
			left: 0;
			right: auto;
			bottom: 0;
			width: 100%;
			max-width: 320px;
			transform: translateX(-100%) translateY(0);
		`}
	${props =>
		props.open &&
		props.direction === 'left' &&
		css`
			transform: translateX(0) translateY(0);
		`}
	${props =>
		props.close &&
		props.direction === 'left' &&
		css`
			transform: translateX(-100%) translateY(0);
		`}



	/* [Open] */
	${props =>
		props.open &&
		css`
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
			transition: transform 0.3s ease-in;
		`};

	/* [Closed] */
	${props =>
		props.close &&
		css`
			box-shadow: none;
			transition: transform 0.45s ease-out;
		`};
`

export const DrawerMenuContainer = styled.div`
	padding: ${style.sp['8']} ${style.sp['2']};
`

export const DrawerMenu = styled.nav`
	&:not(:first-of-type) {
		margin-top: ${style.sp['4']};
	}
`
export const DrawerMenuTitle = styled.nav`
	position: relative;
	display: flex;
	align-items: center;
	${style.fontSizing('16px', '32px', 700)};
	margin-bottom: ${style.sp['1']};

	svg {
		display: flex;
	}
`
export const DrawerMenuItem = styled.div`
	position: relative;
	display: flex;

	a {
		display: flex;
		align-items: center;
		position: relative;
		${style.fontSizing('16px', '32px', 700)};
		padding-top: ${style.sp['0.5']};
		padding-bottom: ${style.sp['0.5']};
		margin-left: ${style.sp['1']};
		z-index: ${style.zindex['1']};
		transition: color 0.3s ease-out;
		color: ${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['40']
				: props.theme.palette.neutral['07']};

		&:hover {
			color: ${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.neutral['80']
					: props.theme.palette.common.black};
		}
		&:active {
			color: ${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.neutral['80']
					: props.theme.palette.neutral['90']};
		}
	}
`
export const DrawerMenuClose = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	top: ${style.sp['2']};
	right: ${style.sp['2']};
	width: 35px;
	height: 35px;
	color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['60']
			: props.theme.palette.neutral['09']};

	svg {
		font-size: 20px;
	}

	&::after {
		content: '';
		z-index: -1;
		position: absolute;
		border-radius: ${style.radius.circle};
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: ${props =>
			props.theme.palette.name === 'light'
				? rgba(props.theme.palette.neutral['05'], 0)
				: rgba(props.theme.palette.neutral['90'], 0)};
		transition: background-color 0.3s ease-out;
	}
	&:hover {
		color: ${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['90']
				: props.theme.palette.neutral['00']};
		&::after {
			background-color: ${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.neutral['05']
					: props.theme.palette.neutral['80']};
		}
	}
	&:active {
		color: ${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['50']
				: props.theme.palette.neutral['08']};
		&::after {
			background-color: ${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.neutral['06']
					: props.theme.palette.neutral['70']};
		}
	}
`
export const DrawerMenuIcon = styled.div`
	display: inline-flex;
	align-self: center;

	svg {
		font-size: 20px;
	}
`
