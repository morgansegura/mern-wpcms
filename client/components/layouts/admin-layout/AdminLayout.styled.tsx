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

export const Layout = styled.div``

export const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	main {
		flex: 1 0 auto;
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
`
