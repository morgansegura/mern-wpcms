import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'
// [Core]
import { Backdrop } from '@core/feedback/backdrop/Backdrop.styled'
import {
	DrawerContainer,
	DrawerMenuItem,
	DrawerMenuClose,
} from '@core/navigation/drawer/Drawer.styled'
import {
	Input,
	Label,
	Placeholder,
	TextFieldWarning,
	TextField,
} from '@core/inputs/textfield/TextField.styled'
import { Menu, SVGContainer, MenuItem } from '@core/navigation/menu/Menu.styled'
import { Form, FormAltMessage, FormSubmit } from '@core/inputs/form/Form.styled'

// [Components]
import { Header, LogoBlock } from '@components/layouts/header/Header.styled'

export const HTMLBody = css`
	background-color: ${props =>
		props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral80};
	color: ${props =>
		props.theme.palette.name === 'light' ? style.colors.neutral90 : style.colors.neutral05};
`

export const ScrollBar = css`
	/* width */
	&::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	&::-webkit-scrollbar-track {
		background-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral80 : style.colors.neutral50};

		border-radius: ${style.radius.sm};
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		border-radius: ${style.radius.sm};
		border: 1px solid;
		border-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral80 : style.colors.neutral40};
		background-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral05 : style.colors.neutral70};

		transition: all 0.3s ease-out;

		&:hover {
			border-color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral80 : style.colors.neutral50};
			background-color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral00 : style.colors.neutral80};
		}
	}
`

export const DefaultTheme = styled.div`
	${Backdrop} {
		background-color: ${props =>
			props.theme.palette.name === 'light'
				? rgba(style.colors.neutral06, 0.95)
				: rgba(style.colors.neutral60, 0.95)};
	}

	/* [Drawer] */
	${DrawerContainer} {
		background-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral05 : style.colors.neutral05};

		box-shadow: 0 0 60px
				${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral10 : style.colors.neutral80},
			0 0 30px
				${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral70};
	}
	${DrawerMenuClose} {
		color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral60 : style.colors.neutral60};

		&::after {
			/* background-color: ${props =>
				props.theme.palette.name === 'light'
					? rgba(style.colors.neutral05, 0)
					: rgba(style.colors.neutral30, 0)}; */
		}
		&:hover {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral90 : style.colors.neutral90};
			&::after {
				background-color: ${props =>
					props.theme.palette.name === 'light'
						? rgba(style.colors.neutral00, 0.75)
						: rgba(style.colors.neutral00, 0.75)};
			}
		}
		&:active {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral50 : style.colors.neutral50};
			&::after {
				background-color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral06};
			}
		}
	}
	/* [Header] */
	${Header} {
		background-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral07 : style.colors.neutral07};
	}

	${LogoBlock} {
		color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral50 : style.colors.neutral80};

		svg {
			fill: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral70 : style.colors.neutral60};

			&:hover {
				fill: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral10 : style.colors.neutral50};
			}
		}
	}

	/* [Form] */
	${FormSubmit} {
		color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.white : style.colors.black};
		background-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.black : style.colors.white};

		&:hover {
			background-color: ${props =>
				props.theme.palette.name === 'light'
					? rgba(style.colors.black, 0.75)
					: rgba(style.colors.white, 0.75)};
		}
		&:active {
			background-color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.black : style.colors.white};
		}
	}

	${FormAltMessage} {
		color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral50 : style.colors.white};

		a {
			color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral60 : style.colors.neutral08};

			border-color: ${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral10 : style.colors.neutral60};

			&:hover {
				color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.white : style.colors.white};
				border-color: ${props =>
					props.theme.palette.name === 'light'
						? style.colors.secondary50
						: style.colors.secondary100};
				background-color: ${props =>
					props.theme.palette.name === 'light'
						? style.colors.secondary50
						: style.colors.secondary50};
			}

			&:active {
				color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.white : style.colors.white};
				border-color: ${props =>
					props.theme.palette.name === 'light'
						? style.colors.secondary50
						: style.colors.secondary100};
				background-color: ${props =>
					props.theme.palette.name === 'light'
						? style.colors.secondary50
						: style.colors.secondary50};
			}

			&.light,
			.light & {
				color: ${style.colors.neutral50};
			}

			&.dark,
			.dark & {
				color: ${style.colors.white};
			}
		}
	}
	${TextField} {
		color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral90 : style.colors.neutral10};

		&.blur {
			${Placeholder} {
				color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral90 : style.colors.neutral10};
			}
			${Input} {
				color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral90 : style.colors.neutral10};
				border-color: ${rgba(style.colors.neutral10, 0.5)};
			}

			.light &,
			&.light {
				${Placeholder} {
					color: ${style.colors.neutral90};
				}
			}
			.dark &,
			&.dark {
				${Placeholder} {
					color: ${style.colors.neutral10};
				}
			}
		}
		&.focus {
			${Placeholder} {
				color: transparent;
			}
			${Input} {
				border-color: ${style.colors.neutral10};
			}
		}

		&.error {
			${Input} {
				border-color: ${style.colors.danger50};
			}
		}

		&.success {
			${Input} {
				border-color: ${style.colors.success50};
			}
		}
	}

	${Label} {
		color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral50 : style.colors.neutral80};
		background-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral05 : style.colors.neutral05};
	}

	${TextFieldWarning} {
		color: ${style.colors.danger50};
	}

	${Form} {
		&.light,
		.light & {
			${FormSubmit} {
				color: ${style.colors.white};
				background-color: ${style.colors.black};

				&:hover {
					background-color: ${rgba(style.colors.black, 0.75)};
				}
				&:active {
					background-color: ${style.colors.black};
				}
			}
			${Label} {
				color: ${style.colors.neutral50};
				background-color: ${style.colors.neutral05};
			}
			${TextField} {
				color: ${style.colors.neutral90};
			}
		}
		&.dark,
		.dark & {
			${FormSubmit} {
				color: ${style.colors.black};
				background-color: ${style.colors.white};
				&:hover {
					background-color: rgba(style.colors.white, 0.75);
				}
				&:active {
					background-color: ${style.colors.white};
				}
			}
			${Label} {
				color: ${style.colors.neutral80};
				background-color: ${style.colors.neutral05};
			}
			${TextField} {
				color: ${style.colors.neutral10};
			}
		}
	}
`

export const BackdropOpen = css``
