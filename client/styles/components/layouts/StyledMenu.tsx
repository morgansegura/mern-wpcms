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

export const StyledMenuItem = styled.div`
	cursor: pointer;

	&:not(:first-child) {
		margin-left: ${style.sp['2']};
	}

	svg,
	a {
		display: flex;
		color: ${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.common.black
				: props.theme.palette.common.white};
		background-color: transparent;
		border: 1px solid transparent;
		border-radius: ${style.radius.circle};
		transition: background-color 0.6s ease-out, color 0.3s ease-out, border-color 0.6s ease-out;

		&:hover {
			color: ${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.secondary.main
					: props.theme.palette.secondary.main};

			background-color: ${props =>
				props.theme.palette.name === 'light'
					? rgba(props.theme.palette.neutral['05'], 0.5)
					: props.theme.palette.neutral['06']};
		}
	}

	svg {
		width: ${style.sp['2.5']};
		height: ${style.sp['2.5']};
		padding: ${style.sp['1']} ${rem('10px')};
	}

	a {
		text-transform: uppercase;
		letter-spacing: ${rem('0.5px')};
		${style.fontSizing('12px', '20px', 700)}
		padding: ${style.sp['1']} ${style.sp['2']};
	}

	${(props: MenuItemProps) =>
		props.active &&
		`

	`};
`
