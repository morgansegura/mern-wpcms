import styled from 'styled-components'
import * as style from '@styles/config/utilities'

export const StyledDrawerTrigger = styled.div``
export const StyledDrawerContainer = styled.div`
	/*
        [Base Styles]
    */
	displaye: fixed;
	display: inline-flex;
	min-width: 300px;
	height: 100vh;

	/*
        [Relocate Styles]
    */
	border-radius: ${style.radius.circle};
	padding: ${style.sp['2']};
	color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['05']
			: props.theme.palette.neutral['80']};
	background-color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['07']
			: props.theme.palette.neutral['06']};

	transition: all 0.3s ease-out;
`
