import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { ITypography } from './Typography.interfaces'

export const Typography = styled(props => props.as)<ITypography>`
	${props =>
		props.view === 'h1'
			? css`
					${style.h1}
			  `
			: props.view === 'h2'
			? css`
					${style.h2}
			  `
			: css`
					${style.body.base}
			  `};
`
