import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { ITypography } from './Typography.interfaces'

export const Typography = styled(props => props.as)<ITypography>`
	${props =>
		props.view === 'h1' && css`
			${style.h1}
	`};
	${props =>
		props.view === 'h2' && css`
			${style.h2}
	`};
	${props =>
		props.view === 'h3' && css`
			${style.h3}
	`};
	${props =>
		props.view === 'h4' && css`
			${style.h4}
	`};
	${props =>
		props.view === 'h5' && css`
			${style.h5}
	`};
	${props =>
		props.view === 'body-large' && css`
			${style.body.large}
	`};
	${props =>
		props.view === 'body-bold' && css`
			${style.body.bold}
	`};
	${props =>
		props.view === 'body-small' && css`
			${style.body.small}
	`};
	${props =>
		props.view === 'cta' && css`
			${style.callToAction}
	`};
	${props =>
		props.view === 'label' && css`
			${style.label}
	`};
	${props =>
		props.view === 'tag-base' && css`
			${style.tag.base}
	`};
	${props =>
		props.view === 'tag-important' && css`
			${style.tag.important}
	`};
	${props =>
		props.view === 'tag-bold' && css`
			${style.tag.bold}
	`};
`
