import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rem } from 'polished'
import { IBox } from './Box.interfaces'

export const Box = styled(props => props.as)<IBox>`
	${(props: IBox) =>
		props.m &&
		css`
			margin: ${rem(style.sp[`${props.m}`])};
		`}
	${(props: IBox) =>
		props.my &&
		css`
			margin-top: ${rem(style.sp[`${props.my}`])};
			margin-bottom: ${rem(style.sp[`${props.my}`])};
		`}
	${(props: IBox) =>
		props.mx &&
		css`
			margin-left: ${rem(style.sp[`${props.my}`])};
			margin-right: ${rem(style.sp[`${props.my}`])};
		`}
	${(props: IBox) =>
		props.mt &&
		css`
			margin-top: ${rem(style.sp[`${props.mt}`])};
		`}
	${(props: IBox) =>
		props.mr &&
		css`
			margin-right: ${rem(style.sp[`${props.mr}`])};
		`}
	${(props: IBox) =>
		props.mb &&
		css`
			margin-bottom: ${rem(style.sp[`${props.mb}`])};
		`}
	${(props: IBox) =>
		props.ml &&
		css`
			margin-left: ${rem(style.sp[`${props.ml}`])};
		`}
	${(props: IBox) =>
		props.p &&
		css`
			padding: ${rem(style.sp[`${props.p}`])};
		`}
	${(props: IBox) =>
		props.py &&
		css`
			padding-top: ${rem(style.sp[`${props.py}`])};
			padding-bottom: ${rem(style.sp[`${props.py}`])};
		`}
	${(props: IBox) =>
		props.px &&
		css`
			padding-left: ${rem(style.sp[`${props.py}`])};
			padding-right: ${rem(style.sp[`${props.py}`])};
		`};
	${(props: IBox) =>
		props.pt &&
		css`
			padding-top: ${style.sp['4']};
		`};
	${(props: IBox) =>
		props.pr &&
		css`
			padding-right: ${rem(style.sp[`${props.pr}`])};
		`};
	${(props: IBox) =>
		props.pb &&
		css`
			padding-bottom: ${rem(style.sp[`${props.pb}`])};
		`};
	${(props: IBox) =>
		props.pl &&
		css`
			padding-left: ${rem(style.sp[props.pl])};
		`};
`
