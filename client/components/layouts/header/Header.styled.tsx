import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { math, rem } from 'polished'
// [Interfaces]
import { MenuContainer, SVGContainer, MenuItem } from 'core/navigation'

export const Header = styled.div`
	position: relative;
	z-index: ${style.zindex['2']};
	${style.container.xxl}
	margin-top: ${math(`${style.sp['1']} + 3px`)};
	padding-top: ${style.sp['1.5']};
	padding-bottom: ${style.sp['1.5']};
	border-radius: ${style.radius.lg};
	background-color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['05']
			: props.theme.palette.neutral['07']};

	a {
		text-decoration: none;
		line-height: 0;
		transition: color 0.3s ease-out;

		&:hover {
			/* color: ${props => props.theme.button.bgcolorForm}; */
		}
	}
`
export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-self: flex-end;
	${style.container.appbar}
`

export const LogoBlock = styled.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	${style.fontSizing('14px', '28px', 700)}
	letter-spacing: 0.0523em;
	text-transform: uppercase;
	color: ${props => props.theme.palette.text.primary};

	svg {
		display: flex;
		height: 40px;
		padding-bottom: ${style.sp['0.5']};
		fill: ${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['40']
				: props.theme.palette.neutral['80']};

		transition: fill 0.3s ease-out;

		&:hover {
			fill: ${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.neutral['10']
					: props.theme.palette.neutral['50']};
		}
	}
`

export const HeaderMenuContainer = styled(MenuContainer)`
	justify-self: flex-end;
`

export const HeaderSVG = styled(SVGContainer)``

export const HeaderMenuItem = styled(MenuItem)`
	&:not(:first-child) {
		margin-left: ${style.sp['1']};
	}

	${HeaderSVG},
	a {
		color: ${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['40']
				: props.theme.palette.neutral['80']};

		&::after {
			content: '';
			position: absolute;
			z-index: ${style.zindex.bottom};
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: transparent;
			border-radius: ${style.radius.circle};
			transition: background-color 0.45s ease-out, color 0.3s ease-out;
		}

		&:hover {
			color: ${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.neutral['80']
					: props.theme.palette.common.white};

			&::after {
				background-color: ${props =>
					props.theme.palette.name === 'light'
						? props.theme.palette.neutral['00']
						: props.theme.palette.neutral['06']};
			}
		}
		&:active {
			color: ${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.neutral['80']
					: props.theme.palette.common.white};

			&::after {
				background-color: ${props =>
					props.theme.palette.name === 'light'
						? props.theme.palette.neutral['05']
						: props.theme.palette.neutral['07']};
			}
		}
	}

	svg {
		font-size: 16px;
		padding: 10px ${rem('11px')};
	}

	a {
		padding: ${style.sp['1']} ${style.sp['2']};
		text-transform: uppercase;
		letter-spacing: ${rem('0.5px')};
		${style.fontSizing('12px', '20px', 700)}
	}
`
