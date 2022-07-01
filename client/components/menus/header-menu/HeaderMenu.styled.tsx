import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { rem } from 'polished'

// [Core]
import { Menu, SVGContainer, MenuItem } from '@core/navigation/menu/Menu.styled'

export const HeaderMenu = styled(Menu)`
	justify-self: flex-end;
	${MenuItem} {
		display: flex;
		gap: ${style.sp['0.5']};

		&:not(:first-child) {
			margin-left: ${style.sp['0.5']};
		}

		${SVGContainer},
		a {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral80 : style.colors.neutral90};

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
					props.theme.palette.name === 'light' ? style.colors.neutral70 : style.colors.neutral70};

				&::after {
					background-color: ${props =>
						props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral06};
				}
			}
			&:active {
				color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral30 : style.colors.neutral30};

				&::after {
					background-color: ${props =>
						props.theme.palette.name === 'light' ? style.colors.neutral07 : style.colors.neutral07};
				}
			}
		}

		svg {
			font-size: 16px;
			padding: 10px ${rem('11px')};
		}

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: ${style.sp['1']} ${style.sp['1.5']};
			text-transform: uppercase;
			letter-spacing: ${rem('0.5px')};
			${style.fontSizing('12px', '20px', 700)}

			svg {
				display: flex;
				padding: 0;
				margin-right: ${style.sp['1']};
			}
		}
	}
`

export const HeaderSVG = styled(SVGContainer)``

export const HeaderMenuItem = styled.div``
