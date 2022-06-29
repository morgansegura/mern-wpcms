import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rem } from 'polished'
import { IBox } from './Box.interfaces'

export const Box = styled(props => props.as)<IBox>`
	/* [M] */
	${props =>
		typeof props.m === 'string' &&
		css`
			margin: ${style.sp[props.m]};
		`};
	${props =>
		typeof props.m === 'object' &&
		props.m.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						margin: ${style.sp[item.md]};
					`}
				`,
		)};
	${props =>
		typeof props.m === 'object' &&
		props.m.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						margin: ${style.sp[item.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.m === 'object' &&
		props.m.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						margin: ${style.sp[item.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.m === 'object' &&
		props.m.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						margin: ${style.sp[item.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.m === 'object' &&
		props.m.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						margin: ${style.sp[item.xxl]};
					`}
				`,
		)};
	/* [MY] */
	${props =>
		typeof props.my === 'string' &&
		css`
			margin-top: ${style.sp[props.my]};
			margin-bottom: ${style.sp[props.my]};
		`};
	${props =>
		typeof props.my === 'object' &&
		props.my.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						margin-top: ${style.sp[item.sm]};
						margin-bottom: ${style.sp[item.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.my === 'object' &&
		props.my.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						margin-top: ${style.sp[item.md]};
						margin-bottom: ${style.sp[item.md]};
					`}
				`,
		)};
	${props =>
		typeof props.my === 'object' &&
		props.my.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						margin-top: ${style.sp[item.lg]};
						margin-bottom: ${style.sp[item.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.my === 'object' &&
		props.my.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						margin-top: ${style.sp[item.xl]};
						margin-bottom: ${style.sp[item.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.my === 'object' &&
		props.my.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						margin-top: ${style.sp[item.xxl]};
						margin-bottom: ${style.sp[item.xxl]};
					`}
				`,
		)};
	/* [MX] */
	${props =>
		typeof props.mx === 'string' &&
		css`
			margin-right: ${style.sp[props.mx]};
			margin-left: ${style.sp[props.mx]};
		`};
	${props =>
		typeof props.mx === 'object' &&
		props.mx.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						margin-right: ${style.sp[props.sm]};
						margin-left: ${style.sp[props.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.mx === 'object' &&
		props.mx.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						margin-right: ${style.sp[props.md]};
						margin-left: ${style.sp[props.md]};
					`}
				`,
		)};
	${props =>
		typeof props.mx === 'object' &&
		props.mx.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						margin-right: ${style.sp[props.lg]};
						margin-left: ${style.sp[props.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.mx === 'object' &&
		props.mx.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						margin-right: ${style.sp[props.xl]};
						margin-left: ${style.sp[props.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.mx === 'object' &&
		props.mx.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						margin-right: ${style.sp[props.xxl]};
						margin-left: ${style.sp[props.xxl]};
					`}
				`,
		)};
	/* [MT] */
	${props =>
		typeof props.mt === 'string' &&
		css`
			margin-top: ${style.sp[props.mt]};
		`};
	${props =>
		typeof props.mt === 'object' &&
		props.mt.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						margin-top: ${style.sp[item.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.mt === 'object' &&
		props.mt.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						margin-top: ${style.sp[item.md]};
					`}
				`,
		)};
	${props =>
		typeof props.mt === 'object' &&
		props.mt.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						margin-top: ${style.sp[item.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.mt === 'object' &&
		props.mt.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						margin-top: ${style.sp[item.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.mt === 'object' &&
		props.mt.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						margin-top: ${style.sp[item.xxl]};
					`}
				`,
		)};
	/* [MR] */
	${props =>
		typeof props.mr === 'string' &&
		css`
			margin-right: ${style.sp[props.mr]};
		`};
	${props =>
		typeof props.mr === 'object' &&
		props.mr.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						margin-right: ${style.sp[item.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.mr === 'object' &&
		props.mr.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						margin-right: ${style.sp[item.md]};
					`}
				`,
		)};
	${props =>
		typeof props.mr === 'object' &&
		props.mr.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						margin-right: ${style.sp[item.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.mr === 'object' &&
		props.mr.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						margin-right: ${style.sp[item.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.mr === 'object' &&
		props.mr.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						margin-right: ${style.sp[item.xxl]};
					`}
				`,
		)};
	/* [MB] */
	${props =>
		typeof props.mb === 'string' &&
		css`
			margin-bottom: ${style.sp[props.mb]};
		`};
	${props =>
		typeof props.mb === 'object' &&
		props.mb.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						margin-bottom: ${style.sp[item.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.mb === 'object' &&
		props.mb.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						margin-bottom: ${style.sp[item.md]};
					`}
				`,
		)};
	${props =>
		typeof props.mb === 'object' &&
		props.mb.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						margin-bottom: ${style.sp[item.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.mb === 'object' &&
		props.mb.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						margin-bottom: ${style.sp[item.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.mb === 'object' &&
		props.mb.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						margin-bottom: ${style.sp[item.xxl]};
					`}
				`,
		)};
	/* [ML] */
	${props =>
		typeof props.ml === 'string' &&
		css`
			margin-left: ${style.sp[props.ml]};
		`};
	${props =>
		typeof props.ml === 'object' &&
		props.ml.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						margin-left: ${style.sp[item.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.ml === 'object' &&
		props.ml.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						margin-left: ${style.sp[item.md]};
					`}
				`,
		)};
	${props =>
		typeof props.ml === 'object' &&
		props.ml.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						margin-left: ${style.sp[item.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.ml === 'object' &&
		props.ml.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						margin-left: ${style.sp[item.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.ml === 'object' &&
		props.ml.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						margin-left: ${style.sp[item.xxl]};
					`}
				`,
		)};
	/* [P] */
	${props =>
		typeof props.p === 'string' &&
		css`
			padding: ${style.sp[props.p]};
		`};
	${props =>
		typeof props.p === 'object' &&
		props.p.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						padding: ${style.sp[item.md]};
					`}
				`,
		)};
	${props =>
		typeof props.p === 'object' &&
		props.p.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						padding: ${style.sp[item.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.p === 'object' &&
		props.p.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						padding: ${style.sp[item.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.p === 'object' &&
		props.p.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						padding: ${style.sp[item.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.p === 'object' &&
		props.p.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						padding: ${style.sp[item.xxl]};
					`}
				`,
		)};
	/* [PY] */
	${props =>
		css`
			padding-top: ${style.sp[props.py]};
			padding-bottom: ${style.sp[props.py]};
		`};
	${props =>
		typeof props.py === 'object' &&
		props.py.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						padding-top: ${style.sp[item.sm]};
						padding-bottom: ${style.sp[item.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.py === 'object' &&
		props.py.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						padding-top: ${style.sp[item.md]};
						padding-bottom: ${style.sp[item.md]};
					`}
				`,
		)};
	${props =>
		typeof props.py === 'object' &&
		props.py.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						padding-top: ${style.sp[item.lg]};
						padding-bottom: ${style.sp[item.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.py === 'object' &&
		props.py.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						padding-top: ${style.sp[item.xl]};
						padding-bottom: ${style.sp[item.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.py === 'object' &&
		props.py.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						padding-top: ${style.sp[item.xxl]};
						padding-bottom: ${style.sp[item.xxl]};
					`}
				`,
		)};
	/* [MX] */
	${props =>
		typeof props.px === 'string' &&
		css`
			padding-right: ${style.sp[props.px]};
			padding-left: ${style.sp[props.px]};
		`};
	${props =>
		typeof props.px === 'object' &&
		props.px.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						padding-right: ${style.sp[props.sm]};
						padding-left: ${style.sp[props.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.px === 'object' &&
		props.px.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						padding-right: ${style.sp[props.md]};
						padding-left: ${style.sp[props.md]};
					`}
				`,
		)};
	${props =>
		typeof props.px === 'object' &&
		props.px.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						padding-right: ${style.sp[props.lg]};
						padding-left: ${style.sp[props.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.px === 'object' &&
		props.px.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						padding-right: ${style.sp[props.xl]};
						padding-left: ${style.sp[props.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.px === 'object' &&
		props.px.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						padding-right: ${style.sp[props.xxl]};
						padding-left: ${style.sp[props.xxl]};
					`}
				`,
		)};
	/* [MT] */
	${props =>
		typeof props.pt === 'string' &&
		css`
			padding-top: ${style.sp[props.pt]};
		`};
	${props =>
		typeof props.pt === 'object' &&
		props.pt.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						padding-top: ${style.sp[item.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.pt === 'object' &&
		props.pt.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						padding-top: ${style.sp[item.md]};
					`}
				`,
		)};
	${props =>
		typeof props.pt === 'object' &&
		props.pt.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						padding-top: ${style.sp[item.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.pt === 'object' &&
		props.pt.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						padding-top: ${style.sp[item.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.pt === 'object' &&
		props.pt.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						padding-top: ${style.sp[item.xxl]};
					`}
				`,
		)};
	/* [PR] */
	${props =>
		typeof props.pr === 'string' &&
		css`
			padding-right: ${style.sp[props.pr]};
		`};
	${props =>
		typeof props.pr === 'object' &&
		props.pr.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						padding-right: ${style.sp[item.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.pr === 'object' &&
		props.pr.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						padding-right: ${style.sp[item.md]};
					`}
				`,
		)};
	${props =>
		typeof props.pr === 'object' &&
		props.pr.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						padding-right: ${style.sp[item.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.pr === 'object' &&
		props.pr.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						padding-right: ${style.sp[item.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.pr === 'object' &&
		props.pr.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						padding-right: ${style.sp[item.xxl]};
					`}
				`,
		)};
	/* [PB] */
	${props =>
		typeof props.pb === 'string' &&
		css`
			padding-bottom: ${style.sp[props.pb]};
		`};
	${props =>
		typeof props.pb === 'object' &&
		props.pb.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						padding-bottom: ${style.sp[item.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.pb === 'object' &&
		props.pb.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						padding-bottom: ${style.sp[item.md]};
					`}
				`,
		)};
	${props =>
		typeof props.pb === 'object' &&
		props.pb.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						padding-bottom: ${style.sp[item.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.pb === 'object' &&
		props.pb.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						padding-bottom: ${style.sp[item.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.pb === 'object' &&
		props.pb.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						padding-bottom: ${style.sp[item.xxl]};
					`}
				`,
		)};
	/* [PL] */
	${props =>
		typeof props.pt === 'string' &&
		css`
			padding-left: ${style.sp[props.pl]};
		`};
	${props =>
		typeof props.pl === 'object' &&
		props.pl.map(
			item =>
				item.sm &&
				css`
					${style.media.sm`
						padding-left: ${style.sp[item.sm]};
					`}
				`,
		)};
	${props =>
		typeof props.pl === 'object' &&
		props.pl.map(
			item =>
				item.md &&
				css`
					${style.media.md`
						padding-left: ${style.sp[item.md]};
					`}
				`,
		)};
	${props =>
		typeof props.pl === 'object' &&
		props.pl.map(
			item =>
				item.lg &&
				css`
					${style.media.lg`
						padding-left: ${style.sp[item.lg]};
					`}
				`,
		)};
	${props =>
		typeof props.pl === 'object' &&
		props.pl.map(
			item =>
				item.xl &&
				css`
					${style.media.xl`
						padding-left: ${style.sp[item.xl]};
					`}
				`,
		)};
	${props =>
		typeof props.pl === 'object' &&
		props.pl.map(
			item =>
				item.xxl &&
				css`
					${style.media.xxl`
						padding-left: ${style.sp[item.xxl]};
					`}
				`,
		)};
`
