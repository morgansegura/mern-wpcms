import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { math, rem } from 'polished'

export const StyledAppBar = styled.div`
	padding-top: ${style.sp['2']};
	padding-bottom: ${style.sp['2']};
	border-radius: ${style.radius.md};
	background-color: ${props => props.theme.palette.primary.main};
`

export const StyledAppBarInner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding-right: ${rem(style.sp['2'])};
	padding-left: ${rem(style.sp['2'])};

	${style.media.md`
		padding-right: ${rem(style.sp['5'])};
		padding-left: ${rem(style.sp['5'])};
	`}
`
