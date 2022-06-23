import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba, rem } from 'polished'
import { TextFieldProps } from 'core/config'

export const StyledPlaceholder = styled.div`
	position: absolute;
	z-index: 1;
	${style.fontSizing('16px', '40px', 500)};
`
export const StyledLabel = styled.div`
	position: absolute;
	z-inde: 2;
	display: inline-flex;
	top: ${rem('13px')};
	right: ${style.sp[2]};
	padding-right: ${style.sp[1]};
	padding-left: ${style.sp[1]};
	border-radius: ${style.radius.md};
	${style.fontSizing('12px', '28px', 600)};

	color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['50']
			: props.theme.palette.common.white};
	background-color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['07']
			: props.theme.palette.neutral['07']};
`

export const StyledInput = styled.input`
	position: relative;
	padding: ${style.sp[2]};
	z-index: 2;
	display: flex;
	user-select: none;
	flex: 1 0 auto;
	border: inherit;
	outline: inherit;
	background-color: transparent;
	border-radius: ${style.radius.sm};
	${style.fontSizing('16px', '30px', 500)};

	&:-internal-autofill-selected {
		appearance: none !important;
		background-color: inherit !important;
		color: inherit !important;
	}

	&:hover {
		outline: inherit;
	}
`

export const StyledTextFieldControl = styled.div`
	/* margin-top: ${style.sp['1.5']}; */
	margin-bottom: ${style.sp['1.5']};
`

export const StyledTextFieldWarning = styled.div`
	position: relative;
	top: -${style.sp[1.5]};
	${style.fontSizing('14px', '30px')};
	color: ${props => props.theme.palette.danger.main};

	&::first-letter {
		text-transform: uppercase;
	}
`

export const StyledTextField = styled.div<TextFieldProps>`
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;
	/* margin-top: ${style.sp['1']}; */

	${StyledPlaceholder} {
		left: ${style.sp[3.5]};
		${props =>
			props.blur &&
			`
			color: ${props.theme.palette.neutral['90']};
		`}
		${props =>
			props.focus &&
			`
			color: ${rgba(props.theme.palette.neutral['90'], 0.0)};
		`}


		transition: all 0.3s ease-out;
	}
	${StyledInput} {
		border: 1px solid transparent;
		transition: all 0.3s ease-out;

		${props =>
			props.blur &&
			`
			border-color: ${rgba(props.theme.palette.neutral['10'], 0.3)};
		`}
		${props =>
			props.focus &&
			`
			border-color: ${props.theme.palette.neutral['10']};
		`}
		${props =>
			props.error &&
			css`
				border-color: ${props.theme.palette.danger.main};
			`}
	}
`
