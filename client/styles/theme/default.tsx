// [Settings]
import {
	Breakpoints,
	Components,
	Direction,
	Mixins,
	Palette,
	Shadows,
	Shape,
	Spacing,
	Transitions,
	Typography,
	zIndex,
} from 'styles/theme/settings'

// [Interfaces]

const baseTheme = {
	breakpoints: {
		...Breakpoints,
	},
	shadows: {
		...Shadows,
	},
	shape: {
		...Shape,
	},
	spacing: {
		...Spacing,
	},
	components: { ...Components },
	mixins: { ...Mixins },
	transitions: {
		easing: {
			...Transitions.easing,
		},
		duration: {
			...Transitions.duration,
		},
	},
	zIndex: { ...zIndex },
	direction: Direction,
	palette: {},
	typography: {},
}

export const themeLight = {
	...baseTheme,
	palette: {
		...Palette.light,
	},
}

export const themeDark = {
	...baseTheme,
	palette: {
		...Palette.dark,
	},
}
