import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'
import {
	IAccordionTrigger,
	TAccordionTab,
	TAccordionContent,
	IAccordion,
} from './Accordion.interfaces'

export const ScrollBar = css`
	/* width */
	&::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	&::-webkit-scrollbar-track {
		background-color: ${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['08']
				: props.theme.palette.neutral['50']};

		border-radius: ${style.radius.sm};
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		border-radius: ${style.radius.sm};
		border: 1px solid;
		border-color: ${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['08']
				: props.theme.palette.neutral['40']};
		background-color: ${props =>
			props.theme.palette.name === 'light'
				? props.theme.palette.neutral['05']
				: props.theme.palette.neutral['70']};

		transition: all 0.3s ease-out;

		&:hover {
			border-color: ${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.neutral['08']
					: props.theme.palette.neutral['50']};
			background-color: ${props =>
				props.theme.palette.name === 'light'
					? props.theme.palette.neutral['00']
					: props.theme.palette.neutral['80']};
		}
	}
`

export const Accordion = styled.div`
	position: relative;
	display: flex;
`
export const AccordionContainer = styled.div`
	flex: 1 0 auto;
	/* overflow-y: auto; */
`
export const AccordionTab = styled.div<TAccordionTab>`
	padding: ${style.sp[0.5]} ${style.sp[1]};
`

export const AccordionTabTitle = styled.div`
	${style.fontSizing('16px', '32px', 700)};
`
export const AccordionTabTitleIcon = styled.div`
	display: flex;
	align-self: center;
	margin-right: ${style.sp['2']};
`
export const AccordionTabActionIcon = styled.div<IAccordion>`
	position: absolute;
	display: flex;
	right: 0;
	align-self: center;
	transition: transform 0.3s ease-out;

	${props =>
		props.open &&
		`
			transform: rotate(-180deg);
	`}
`

export const AccordionTabContainer = styled.div<IAccordion>`
	position: relative;
	display: flex;
	cursor: pointer;
`

export const AccordionTabContent = styled.div``

export const AccordionTabContentMenuLink = styled.div`
	display: flex;

	a {
		flex: 1 0 auto;
		${style.fontSizing('16px', '24px', 700)};
		text-decoration: none;
		padding-left: ${style.sp['5']};
	}
`

export const AccordionContent = styled.div<TAccordionContent>`
	overflow-y: scroll;
	transition: height 0.3s ease-out;

	${props =>
		props.open &&
		`
	    overflow: visible;
        height: 100%;
    `}
	${props =>
		props.close &&
		`
	    overflow: hidden;
        height: 0;
    `}
`
export const AccordionContentItem = styled.div``
export const AccordionTrigger = styled.div<IAccordionTrigger>`
	cursor: pointer;
`
