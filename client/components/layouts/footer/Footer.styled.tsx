import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'

export const Footer = styled.div`
	padding-top: ${style.sp['6']};
	padding-bottom: ${style.sp['11']};
	background-color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['05']
			: rgba(props.theme.palette.common.black, 0.3)};
`

export const FooterContainer = styled.div`
	${style.container.xl};
`
