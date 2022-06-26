import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'

// [Interfaces]
import { IBackdrop } from './Backdrop.interfaces'

export const Backdrop = styled.div<IBackdrop>`
	position: fixed;
	overflow: hidden;
	z-index: ${style.zindex.bottom};
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	user-select: none;
	background-color: transparent;
	transform-origin: 50% 50%;
	transition: all 0.3s ease-out;

	${props =>
		props.open &&
		css`
			z-index: ${style.zindex.high};
			background-color: ${props =>
				props.theme.palette.name === 'light'
					? rgba(props.theme.palette.neutral['10'], 0.95)
					: rgba(props.theme.palette.neutral['00'], 0.95)};
			transition: all 0.3s ease-in;
		`}
	${props =>
		props.close &&
		css`
			z-index: ${style.zindex.bottom};
			background-color: transparent;
			transition: all 0.9s ease-out;
		`}
`
