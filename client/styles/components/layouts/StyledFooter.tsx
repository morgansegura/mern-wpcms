import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'

export const StyledFooter = styled.div`
	/* margin-bottom: ${style.sp['1']}; */
	/* border-radius: ${style.radius.lg}; */
	/* ${style.container.xxl}; */
	padding-top: ${style.sp['6']};
	padding-bottom: ${style.sp['11']};
	background-color: ${props =>
		props.theme.palette.name === 'light'
			? props.theme.palette.neutral['05']
			: rgba(props.theme.palette.common.black, 0.3)};
`

export const StyledFooterContainer = styled.div`
	${style.container.xl};
`
