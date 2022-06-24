import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba, rem } from 'polished'

// [Config]
import { MenuProps, MenuItemProps } from '@config/interfaces'

export const StyledMenu = styled.nav`
	display: flex;
	align-items: center;
	justify-self: flex-end;

	${(props: MenuProps) => (props.mode ? `` : ``)}
`

export const StyledSVG = styled.div``

export const StyledMenuItem = styled.div`
	cursor: pointer;

	&:not(:first-child) {
		margin-left: ${style.sp['2']};
	}

	${StyledSVG},
	a {
		display: flex;
		align-items: center;
		position: relative;
		z-index: ${style.zindex['1']};
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
		display: flex;
		align-items: center;
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
