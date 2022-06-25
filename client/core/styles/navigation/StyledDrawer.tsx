import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'
import { DrawerFrameProps, DrawerProps, DrawerTriggerProps } from 'core/config'

export const DrawerTrigger = styled.div<DrawerTriggerProps>`
	${props =>
		props.open
			? `

            `
			: `

            `};
`

export const DrawerFrame = styled.div<DrawerFrameProps>`
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

export const DrawerContainer = styled.div<DrawerProps>`
	/*
        [Base Styles]
    */
	position: fixed;
	z-index: ${style.zindex.top};

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
	box-shadow: none;

	transform: translateX(0) translateY(-50%);
	transition: transform 0.4s ease-out;

	/*
        [Relocate Styles]
    */

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
			transform: translateX(0) translateY(-50%);
			transition: transform 0.3s ease-in;
		`};

	${props =>
		props.close &&
		css`
			box-shadow: none;
			transform: translateX(-100%) translateY(-50%);
			transition: transform 0.45s ease-out;
		`};
`

export const DrawerMenuContainer = styled.div`
	padding: ${style.sp['8']} ${style.sp['11']} ${style.sp['8']} ${style.sp['6']};
`

export const DrawerMenu = styled.nav`
	&:not(:first-of-type) {
		margin-top: ${style.sp['4']};
	}
`
export const DrawerMenuTitle = styled.nav`
	${style.fontSizing('12px', '40px', 700)};
	margin-bottom: ${style.sp['1']};
	text-transform: uppercase;

	color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['20']
			: props.theme.palette.neutral['30']};
	font-weight: 800;
	border-bottom: 1px solid
		${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['07']
				: props.theme.palette.neutral['60']};
`
export const DrawerMenuItem = styled.div`
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
