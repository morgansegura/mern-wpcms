import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { math } from 'polished'

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

export const Layout = styled.div`
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
		position: fixed;
		top: ${style.sp['11']};
		bottom: 0;
		left: auto;
		right: 0;
		border-radius: ${style.radius.lg} 0 0 0;
		height: calc(100vh - ${style.sp['11']});
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

export const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	main {
		flex: 1 0 auto;
	}
`

export const StyledDrawerMenuIcon = styled(DrawerMenuIcon)``
export const StyledDrawerMenuItem = styled(DrawerMenuItem)``

export const StyledH1 = styled.h2`
	${style.h1}
`

export const StyledH2 = styled.h2`
	${style.h2}
`

export const StyledH3 = styled.h2`
	${style.h2}
`

export const StyledH4 = styled.h2`
	${style.h2}
`

export const StyledH5 = styled.h2`
	${style.h2}
`

export const StyledH6 = styled.h6`
	${style.body.bold}
`

export const StyledCopy = styled.p`
	${style.body.base}
`

export const StyledCopyBold = styled.p`
	${style.body.bold}
`

export const StyledCopySmall = styled.p`
	${style.body.small}
`

export const StyledCopySmallBold = styled.p`
	${style.body['small-bold']}
`

export const StyledCopyLarge = styled.p`
	${style.body.large}
`

export const StyledContentBlock = styled.div`
	margin-top: ${style.sp['4']};

	&:first-of-type {
		margin-top: ${style.sp['10']};
	}
`
