import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { rem, math } from 'polished'
import { StyledMenu } from '@styles/components/layouts'

export const StyledHeader = styled.div`
	position: relative;
	z-index: 2;
	${style.container.xxl}
	margin-top: ${style.sp['1']};
	padding-top: ${style.sp['1.5']};
	padding-bottom: ${style.sp['1.5']};
	border-radius: ${style.radius.lg};
	background-color: ${props => props.theme.palette.background.card};

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
		height: 45px;
		fill: ${props => props.theme.palette.text.primary};
	}
`
