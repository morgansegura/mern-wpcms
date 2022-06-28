import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rem } from 'polished'
import { IBox } from './Box.interfaces'

export const Box = styled(props => props.as)<IBox>`
	${props =>
		props.m &&
		`
			margin: ${rem(style.sp[`${props.m}`])};
		`};
	${props =>
		props.mt &&
		`
			margin-top: ${rem(style.sp[`${props.mt}`])};
		`};
`
