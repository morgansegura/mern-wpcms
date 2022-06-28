import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { ITypography } from './Typography.interfaces'

export const Typography = styled(props => props.as)<ITypography>`
	${props =>
		props.variant === 'h1' &&
		css`
			${style.h1}
		`};
	${props =>
		props.variant === 'h2' &&
		css`
			${style.h2}
		`};
	${props =>
		props.variant === 'h3' &&
		css`
			${style.h3}
		`};
	${props =>
		props.variant === 'h4' &&
		css`
			${style.h4}
		`};
	${props =>
		props.variant === 'h5' &&
		css`
			${style.h5}
		`};
	${props =>
		props.variant === 'body-large' &&
		css`
			${style.body.large}
		`};
	${props =>
		props.variant === 'body-bold' &&
		css`
			${style.body.bold}
		`};
	${props =>
		props.variant === 'body-small' &&
		css`
			${style.body.small}
		`};
	${props =>
		props.variant === 'cta' &&
		css`
			${style.callToAction}
		`};
	${props =>
		props.variant === 'label' &&
		css`
			${style.label}
		`};
	${props =>
		props.variant === 'tag-base' &&
		css`
			${style.tag.base}
		`};
	${props =>
		props.variant === 'tag-important' &&
		css`
			${style.tag.important}
		`};
	${props =>
		props.variant === 'tag-bold' &&
		css`
			${style.tag.bold}
		`};
`
