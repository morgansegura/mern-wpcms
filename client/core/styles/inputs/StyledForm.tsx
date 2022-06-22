import styled from 'styled-components'
import * as style from '@styles/config/utilities'

// import { FormProps } from '@config/interfaces'

export const StyledForm = styled.form`
	max-width: ${style.contain.xs};
	display: flex;
	flex-direction: column;
	margin-right: auto;
	margin-left: auto;
`

export const StyledFormTitle = styled.h2`
	${style.fontSizing('22px', '32px', 700)}
	margin-top: ${style.sp['4']};

	${style.media.lg`
		${style.fontSizing('32px', '32px', 700)}
		margin-top: ${style.sp['6']};
	`}
`

export const StyledFormSubmitBlock = styled.div`
	margin-top: ${style.sp['4']};
	display: flex;
	justify-content: center;

	${style.media.lg`

	`}
`

export const StyledFormSubmit = styled.button`
	position: relative;
	display: flex;
	flex: 1 0 auto;
	align-items: center;
	justify-content: center;
	${style.fontSizing('14px', '60px', 600)};
	padding-right: ${style.sp['4']};
	padding-left: ${style.sp['4']};
	overflow: hidden;
	border-radius: ${style.radius.md};
	border-color: transparent;
	border-width: 0;
	text-transform: uppercase;
	background-color: ${style.colors.gray900};
	color: ${style.colors.gray50};

	${style.media.lg`

	`}

	&:hover {
		background-color: ${style.colors.gray800};
	}
	&:active {
		background-color: ${style.colors.black};
	}
`

export const StyledFormAltMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: ${style.sp['3']};
	${style.fontSizing('18px', '30px', 600)};
	color: ${props => props.theme.palette.text.main};

	a {
		color: ${props => props.theme.palette.secondary.main};
		margin-left: ${style.sp['2']};
	}

	${style.media.lg`

	`}
`
