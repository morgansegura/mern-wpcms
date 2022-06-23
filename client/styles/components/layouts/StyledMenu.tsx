import styled from 'styled-components'
import * as style from '@styles/config/utilities'

// [Config]
import { MenuProps, MenuItemProps } from '@config/interfaces'
import { Palette } from '@styles/theme'

export const StyledMenu = styled.nav`
	display: flex;
	align-items: center;
	justify-self: flex-end;

	${(props: MenuProps) => (props.mode ? `` : ``)}
`

export const StyledMenuItem = styled.div`
	cursor: pointer;
	text-transform: uppercase;
	${style.fontSizing('12px', '20px', 700)}
	letter-spacing: 2px;

	&:not(:last-child) {
		margin-right: ${style.sp['2']};
	}

	svg {
		width: ${style.sp['2.5']};
		height: ${style.sp['2.5']};
		transition: all 0.3s ease-out;

		&:hover {
			fill: ${props => props.theme.palette.secondary.light};
		}
	}

	a {
		color: ${props => props.theme.palette.common.black};
		transition: all 0.3s ease-out;

		&:hover {
			color: ${props => props.theme.palette.secondary.light};
		}
	}

	${(props: MenuItemProps) =>
		props.active &&
		`

	`};
`
