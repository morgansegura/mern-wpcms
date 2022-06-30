import { ScrollBar } from 'core/surfaces/accordion/Accordion.styled'
import { css } from 'styled-components'
import * as style from '@styles/config/utilities'

export const setup = css`
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: ${style.font.family.sans};
		font-size: ${style.font.base};
		background-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral05 : style.colors.neutral80};
		${ScrollBar};
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral90 : style.colors.neutral05};
	}

	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		padding: 0;
		margin: 0;
	}

	img {
		width: 100%;
	}

	input,
	select {
		/* all: unset !important; */
		&:-internal-autofill-selected {
			/* appearance: none !important;
				background-color: transparent !important;
				background-image: none !important;
				color: transparent !important;
			*/
		}
	}

	input:-webkit-autofill,
	input:-webkit-autofill:focus {
		transition: background-color 600000s 0s, color 600000s 0s;
	}

	a {
		text-decoration: none;
	}
`
