import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'

import {
	DrawerMenuItem,
	DrawerMenuIcon,
	DrawerContainer,
	DrawerFrame,
} from '@core/navigation/drawer/Drawer.styled'

import {
	AccordionContainer,
	AccordionTab,
	AccordionTabContainer,
	AccordionTabTitleIcon,
	AccordionTabActionIcon,
	AccordionTabContentMenuLink,
	AccordionContentItem,
	Accordion,
} from '@core/surfaces/accordion/Accordion.styled'

export const Layout = styled.div`
	position: relative;

	${AccordionContainer} => {
		position: absolute;
		top: ${style.sp['8']};
		right: 0;
		bottom: auto;
		left: 0;
		padding-bottom: ${style.sp['2']};
	}

	${AccordionTab} {
		user-select: none;
		padding: ${style.sp['1']} ${style.sp['2']};
		/* border-radius: ${style.radius.lg}; */
		color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral70};
		background-color: ${props =>
			props.theme.palette.name === 'light' ? style.colors.neutral60 : style.colors.neutral05};

		border-bottom: 1px solid
			${props =>
				props.theme.palette.name === 'light' ? style.colors.neutral60 : style.colors.neutral07};

		${AccordionTabTitleIcon} {
			svg {
				width: ${style.sp['2']};
			}
		}
	}

	${AccordionContentItem} {
		${AccordionTabContentMenuLink} {
			a {
				padding-top: ${style.sp['1.5']};
				padding-bottom: ${style.sp['1.5']};
				color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral60};

				&:hover {
					color: ${props =>
						props.theme.palette.name === 'light' ? style.colors.neutral06 : style.colors.neutral60};
				}
			}
		}
		&:first-child {
			a {
				padding-top: ${style.sp['2']};
			}
		}
		&:last-child {
			a {
				color: orange;
				padding-bottom: ${style.sp['2.5']};
			}
		}
	}

	/* [Drawer] */

	${DrawerContainer} => {
		transform: translateX(100%) translateY(0);
		${props =>
			props.open &&
			css`
				background-color: ${props =>
					props.theme.palette.name === 'light' ? style.colors.neutral00 : style.colors.neutral05};
				box-shadow: 0 0 60px
						${props =>
							props.theme.palette.name === 'light'
								? style.colors.neutral20
								: style.colors.neutral00},
					0 0 30px
						${props =>
							props.theme.palette.name === 'light'
								? style.colors.neutral08
								: style.colors.neutral06};
				transform: translateX(0) translateY(0);
				transition: transform 0.3s ease-in;
			`};

		${props =>
			props.close &&
			css`
				box-shadow: none;
				transform: translateX(100%) translateY(0);
				transition: transform 0.45s ease-out;
			`};
	}

	${DrawerFrame} {
		/* transform: translateX(${style.sp['7.5']}); */
	}
`

export const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	main {
		flex: 1 0 auto;
	}
`

export const StyledContentBlock = styled.div`
	margin-top: ${style.sp['4']};

	&:first-of-type {
		margin-top: ${style.sp['10']};
	}
`

/*
	Grid Layouts
*/
