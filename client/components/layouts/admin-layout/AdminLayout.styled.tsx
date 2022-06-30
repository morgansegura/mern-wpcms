import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'

import {
	DrawerMenuItem,
	DrawerMenuIcon,
	DrawerContainer,
	DrawerFrame,
} from 'core/navigation/drawer'

import {
	AccordionContainer,
	AccordionTab,
	AccordionTabContainer,
	AccordionTabTitleIcon,
	AccordionTabActionIcon,
	AccordionTabContentMenuLink,
	AccordionContentItem,
	Accordion,
} from 'core/surfaces/accordion'
import { IGrid, IGridColumn } from './AdminLayout.interfaces'

export const Layout = styled.div``

export const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	main {
		flex: 1 0 auto;
	}

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
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['06']
				: props.theme.palette.neutral['70']};
		background-color: ${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['60']
				: props.theme.palette.neutral['05']};

		border-bottom: 1px solid
			${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.neutral['60']
					: props.theme.palette.neutral['07']};

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
					props.theme.palette.name === 'light'
						? props.theme.palette.neutral['06']
						: props.theme.palette.neutral['60']};

				&:hover {
					color: ${props =>
						props.theme.palette.name === 'light'
							? props.theme.palette.neutral['06']
							: props.theme.palette.neutral['60']};
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
		${props => console.log(props)}
		background-color: ${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['60']
				: props.theme.palette.neutral['05']};
		transform: translateX(100%) translateY(0);

		${props =>
			props.open &&
			css`
				box-shadow: 0 0 60px
						${props =>
							props.theme.palette.name === 'light'
								? props.theme.palette.neutral['20']
								: props.theme.palette.neutral['00']},
					0 0 30px
						${props =>
							props.theme.palette.name === 'light'
								? props.theme.palette.neutral['08']
								: props.theme.palette.neutral['06']};
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
