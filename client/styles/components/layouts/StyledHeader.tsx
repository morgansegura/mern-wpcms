import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { math } from 'polished'

export const StyledHeader = styled.div`
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
export const StyledHeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-self: flex-end;
	${style.container.appbar}
`

export const StyledLogoBlock = styled.div`
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
