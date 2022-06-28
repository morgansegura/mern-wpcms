import { css } from 'styled-components'
import { math, em, rem } from 'polished'

export const font = {
	base: '16px',
	family: {
		sans: `'Roboto', 'Graphik', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,
		serif: `'Roboto', 'Graphik', 'Helvetica Neue', 'Helvetica', 'Arial', serif`,
		mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
	},
}

export const colors = {
	black: '#000',
	white: '#fff',
	neutral00: '#fff',
	neutral05: '#edeef0',
	neutral06: '#dbdde1',
	neutral07: '#c9cbd2',
	neutral08: '#b8bac3',
	neutral09: '#a6a9b3',
	neutral10: '#9498a4',
	neutral20: '#828795',
	neutral30: '#717685',
	neutral40: '#626673',
	neutral50: '#535661',
	neutral60: '#434650',
	neutral70: '#34373e',
	neutral80: '#25272c',
	neutral90: '#1e2024',

	// System Red
	red05: '#fedbe2',
	red10: '#fdb6c5',
	red20: '#fc92a8',
	red30: '#fb6e8c',
	red40: '#fa496f',
	red50: '#f92552',
	red60: '#e80636',
	red70: '#ba052b',
	red80: '#8b0421',
	red90: '#5d0316',
	red100: '#5d0316',

	// System orange
	orange05: '#fce3d7',
	orange10: '#fac6b0',
	orange20: '#f7aa88',
	orange30: '#f48d60',
	orange40: '#f27139',
	orange50: '#ef5411',
	orange60: '#c8460d',
	orange70: '#a0380b',
	orange80: '#782a08',
	orange90: '#501c05',
	orange100: '#280e03',

	// System Yellow
	yellow05: '#fff4d8',
	yellow10: '#ffeab0',
	yellow20: '#ffdf89',
	yellow30: '#ffd462',
	yellow40: '#ffca3a',
	yellow50: '#ffbf13',
	yellow60: '#e4a600',
	yellow70: '#b78500',
	yellow80: '#896400',
	yellow90: '#5b4300',
	yellow100: '#5b4300',

	// System Green
	green05: '#d5fcf2',
	green10: '#abf9e5',
	green20: '#81f7d8',
	green30: '#57f4cb',
	green40: '#2ef1bd',
	green50: '#0fe3ab',
	green60: '#0dbd8f',
	green70: '#0a9772',
	green80: '#087256',
	green90: '#054c39',
	green100: '#02261d',

	// System Blue
	blue05: '#d9effd',
	blue10: '#b4e0fb',
	blue20: '#8ed0f8',
	blue30: '#68c0f6',
	blue40: '#43b1f4',
	blue50: '#1da1f2',
	blue60: '#0c89d6',
	blue70: '#0a6eab',
	blue80: '#075280',
	blue90: '#053755',
	blue100: '#021b2b',

	// System Purple
	purple05: '#efe6fc',
	purple10: '#dfcdf9',
	purple20: '#cfb4f7',
	purple30: '#be9bf4',
	purple40: '#ae82f1',
	purple50: '#9e69ee',
	purple60: '#7d36e8',
	purple70: '#6017cd',
	purple80: '#48119a',
	purple90: '#300c67',
	purple100: '#180633',
}

export const success = {
	light: colors.green10,
	main: colors.green50,
	dark: colors.green70,
}

export const warning = {
	light: colors.yellow10,
	main: colors.yellow50,
	dark: colors.yellow70,
}

export const danger = {
	light: colors.red10,
	main: colors.red50,
	dark: colors.red70,
}

export const info = {
	light: colors.blue10,
	main: colors.blue20,
	dark: colors.blue40,
}

export const sp = {
	unset: 'unset',
	auto: 'auto',
	0: '0px',
	px: '1px',
	0.5: '4px',
	1: '8px',
	1.25: '10px',
	1.5: '12px',
	2: '16px',
	2.25: '18px',
	2.5: '20px',
	3: '24px',
	3.5: '28px',
	4: '32px',
	4.5: '36px',
	5: '40px',
	5.5: '44px',
	6: '48px',
	6.5: '52px',
	7: '56px',
	7.5: '60px',
	8: '64px',
	9: '76px',
	10: '80px',
	11: '88px',
	12: '96px',
	13: '104px',
	14: '112px',
	14_5: '116px',
	15: '120px',
	16: '128px',
	17: '136px',
	19: '152px',
	20: '160px',
	25: '200px',
	30: '240px',
	40: '320px',
	60: '480px',
	80: '640px',
}

export const contain = {
	xs: '480px',
	sm: '639px',
	md: '1023px',
	lg: '1366px',
	xl: '1799px',
	xxl: '2256px',
	offset: '2384px',
}
export const device = {
	sm: '375px',
	md: '640px',
	lg: '1024px',
	xl: '1376px',
	xxl: '1800px',
	max: '2096px',
}
export const radius = {
	none: `0`,
	xs: `2px`,
	sm: `3px`,
	md: `4px`,
	lg: `6px`,
	xl: `8px`,
	'2xl': `1rem`,
	'3xl': `1.5rem`,
	circle: `9999px`,
}
export const shadow = {
	sm: css`
		filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
	`,
	base: css`
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
	`,
	md: css`
		filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
	`,
	lg: css`
		filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
	`,
	xl: css`
		filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
	`,
	'2xl': css`
		filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
	`,
	none: css`border-radius: filter: drop-shadow(0 0 #0000)`,
}
// Font Weight
export const fw = {
	0: 'normal',
	1: 100,
	2: 200,
	3: 300,
	4: 400,
	5: 500,
	6: 600,
	7: 700,
	8: 800,
	9: 900,
}
export const zindex = {
	bottom: -1,
	1: 1,
	2: 2,
	3: 3,
	high: 1000,
	top: 1001,
}

export const grid = (rows: string = '12', size: string = '1fr') => {
	return css`
		display: grid;
		grid-template-columns: repeat(${rows}, ${size});
	`
}

interface FontSizingProps {
	fs: string
	lh: string
	fw?: number
}

export const fontSizing = (fs: string = '16px', lh: string = '24px', fw: number = 400) => {
	return `
		font-size: ${rem(fs)};
		line-height: ${em(lh)};
		font-weight: ${fw};
	`
}

export const below = (amount: string): any => {
	return (...args: [any]): any => css`
		@media (max-width: ${amount}) {
			${css(...args)};
		}
	`
}

export const above = (amount: string): any => {
	return (...args: [any]): any => css`
		@media (min-width: ${amount}) {
			${css(...args)};
		}
	`
}

export const media: any = {
	sm: (...args: [any]): any => css`
		@media (min-width: ${device['sm']}) {
			${css(...args)};
		}
	`,
	md: (...args: [any]): any => css`
		@media (min-width: ${device['md']}) {
			${css(...args)};
		}
	`,
	lg: (...args: [any]): any => css`
		@media (min-width: ${device['lg']}) {
			${css(...args)};
		}
	`,
	xl: (...args: [any]): any => css`
		@media (min-width: ${device['xl']}) {
			${css(...args)};
		}
	`,
	xxl: (...args: [any]): any => css`
		@media (min-width: ${device['xxl']}) {
			${css(...args)};
		}
	`,
}

export const container = {
	xs: css`
		max-width: ${rem(contain.xs)};
		margin-right: auto;
		margin-left: auto;
	`,
	sm: css`
		max-width: ${rem(contain.sm)};
		margin-right: auto;
		margin-left: auto;
	`,
	md: css`
		max-width: ${rem(contain.md)};
		margin-right: auto;
		margin-left: auto;
	`,
	lg: css`
		max-width: ${rem(contain.lg)};
		margin-right: auto;
		margin-left: auto;
	`,
	xl: css`
		max-width: ${rem(contain.xl)};
		margin-right: ${rem(sp[2])};
		margin-left: ${rem(sp[2])};

		${media.md`
			margin-right: ${rem(sp[5])};
			margin-left: ${rem(sp[5])};
		`}

		${media.xl`
			margin-right: ${rem(sp[14])};
			margin-left: ${rem(sp[14])};
		`}

		${media.xxl`
			margin-right: ${rem(sp[20])};
			margin-left: ${rem(sp[20])};
		`}

		${above(contain.offset)`
			max-width: ${math(`${rem(contain.xxl)} - ${rem(sp['40'])}`)};
			margin-right: auto;
			margin-left: auto;
		`}
	`,
	xxl: css`
		max-width: ${rem(contain.xxl)};
		margin-right: ${rem(sp[1])};
		margin-left: ${rem(sp[1])};

		${media.md`
			margin-right: ${rem(sp[3])};
			margin-left: ${rem(sp[3])};
		`}

		${media.lg`
			margin-right: ${rem(sp[6])};
			margin-left: ${rem(sp[6])};
		`}

		${media.xl`
			margin-right: ${rem(sp[8])};
			margin-left: ${rem(sp[8])};
		`}

		${above(contain.offset)`
			width: ${rem(contain.xxl)};
			margin-right: auto;
			margin-left: auto;
		`}
	`,
	appbar: css`
		max-width: ${rem(contain.xxl)};
		margin-right: ${rem(sp[2])};
		margin-left: ${rem(sp[2])};

		${media.md`
			margin-right: ${rem(sp[3])};
			margin-left: ${rem(sp[3])};
		`}

		${media.lg`
			margin-right: ${rem(sp[4])};
			margin-left: ${rem(sp[4])};
		`}

		${media.xxl`
			margin-right: ${rem(sp[5])};
			margin-left: ${rem(sp[5])};
		`}
	`,
}
// Font Sizes
export const base = css`
	font-size: ${font.base};
`
//  Start

export const h1 = css`
	font-size: ${rem('32px')};
	line-height: 1.15;
	font-weight: 600;

	${media.md`
		font-size: ${rem('48px')};
	`}

	${media.lg`
		font-size: ${rem('52px')};
	`}
`

export const h2 = css`
	font-size: ${rem('28px')};
	line-height: 1.15;
	font-weight: 600;

	${media.md`
		font-size: ${rem('40px')};
	`}

	${media.lg`
		font-size: ${rem('41px')};
	`}
`

export const h3 = css`
	font-size: ${rem('25px')};
	line-height: 1.15;
	font-weight: 600;

	${media.lg`
		font-size: ${rem('32px')};
	`}
`

export const h4 = css`
	font-size: ${rem('22px')};
	line-height: 1.2;
	font-weight: 600;

	${media.md`
		font-size: ${rem('25px')};
	`}
`

export const h5 = css`
	font-size: ${rem('18px')};
	line-height: 1.2;
	font-weight: 600;

	${media.md`
		font-size: ${rem('20px')};
		line-height: 1.4;
	`}
`

export const body = {
	base: css`
		font-size: ${rem('16px')};
		line-height: 1.5;
		font-weight: 400;

		${media.md`
			font-size: ${rem('18px')};
			line-height: 1.55;
		`}

		${media.lg`
			font-size: ${rem('20px')};
			line-height: 1.5;
		`}
	`,
	large: css`
		font-size: ${rem('25px')};
		line-height: 1.5;
		font-weight: 400;

		${media.lg`
			font-size: ${rem('28px')};
		`}
	`,
	bold: css`
		font-size: ${rem('16px')};
		line-height: 1.5;
		font-weight: 600;

		${media.md`
			font-size: ${rem('18px')};
			line-height: 1.55;
		`}

		${media.lg`
			font-size: ${rem('20px')};
			line-height: 1.5;
		`}
	`,
	small: css`
		font-size: ${rem('14px')};
		line-height: 1.5;
		font-weight: 400;

		${media.md`
			font-size: ${rem('16px')};
		`}
	`,
	'small-bold': css`
		font-size: ${rem('14px')};
		line-height: ${rem('24px')};
		font-weight: 600;

		${media.md`
			font-size: ${rem('16px')};
			line-height: 1.5r;
		`}
	`,
}

// Breadcrumbs, buttons, icon labels, and tabs
export const callToAction = css`
	font-size: ${rem('15px')};
	line-height: 1.2;
	font-weight: 600;

	${media.md`
		font-size: ${rem('16px')};
	`}
`

export const label = css`
	font-size: ${rem('14px')};
	line-height: 1.2;
	font-weight: 400;
`

export const tag = {
	base: css`
		font-size: ${rem('14px')};
		line-height: ${rem('20px')};
		font-weight: 400;
	`,
	important: css`
		font-size: ${rem('12px')};
		line-height: 1.2;
		font-weight: 600;
		letter-spacing: 1px;
		text-transform: uppercase;
	`,
	bold: css`
		font-size: ${rem('14px')};
		line-height: ${rem('20px')};
		font-weight: 600;
	`,
}
// END
export const button = {
	sm: css``,
	md: css``,
	lg: css``,
	hero: css`
		font-size: ${rem(sp[2])};
		padding: ${rem(sp[1.5])};

		${media.md`
			font-size: ${rem('48px')};
		`}

		${media.lg`
			font-size: ${rem('48px')};
		`}

		${media.xl`
			font-size: ${rem('48px')};
		`}

		${media.xxl`
			font-size: ${rem('48px')};
		`}
	`,
}
