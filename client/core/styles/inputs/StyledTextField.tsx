import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'
import { TextFieldProps } from 'core/config'

export const StyledPlaceholder = styled.div`
	position: absolute;
	z-index: 1;
	${style.fontSizing('16px', '40px', 500)};
`
export const StyledLabel = styled.div`
	${style.fontSizing('14px', '40px', 600)};
`

export const StyledInput = styled.input`
	position: relative;
	display: flex;
	flex: 1 0 auto;
	border: inherit;
	z-index: 2;
	user-select: none;
	outline: inherit;
	background-color: transparent;
	padding: ${style.sp[3]};
	${style.fontSizing('16px', '40px', 500)};

	&:-internal-autofill-selected {
		appearance: none !important;
		background-color: inherit !important;
		color: inherit !important;
	}

	&:hover {
		outline: inherit;
	}
`

export const StyledTextFieldControl = styled.div``

export const StyledTextField = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;
	/* background-color: ${props => props.theme.palette.background.paper}; */
	margin-top: ${style.sp['2']};

	${StyledLabel} {
	}
	${StyledInput} {
		color: ${props => props.theme.palette.text.main};
	}

	${StyledPlaceholder} {
		left: ${style.sp[3.5]};
		color: ${props =>
			props.focus
				? rgba(props.theme.palette.text.primary, 0)
				: props.blur
				? rgba(props.theme.palette.text.primary, 0.45)
				: props.theme.palette.text.primary};
		transition: transform 0.3s ease-out;
	}
	${StyledInput} {
		color: ${props =>
			props.focus
				? props.theme.palette.text.primary
				: props.blur
				? rgba(props.theme.palette.text.primary, 0.45)
				: rgba(props.theme.palette.text.primary, 0)};
		&:-internal-autofill-selected {
			color: ${props =>
				props.focus
					? props.theme.palette.text.primary
					: props.blur
					? rgba(props.theme.palette.text.primary, 0.45)
					: rgba(props.theme.palette.text.primary, 0)};
		}

		border: 1px solid ${props => (props.focus ? `yellow` : props.blur ? `cyan` : `magenta`)};
	}
`
