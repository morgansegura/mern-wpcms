import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rippleEffect } from 'core/styles/utils/keyframes'

export const StyledRipple = styled.div`
	&.RippleContainer-root {
		position: relative;
		z-index: ${style.zindex['2']};
		overflow: hidden;
		cursor: pointer;
		${props =>
			props.color && props.color === 'primary'
				? css`
						& > .RippleEffect-root {
							background-color: ${props => props.theme.palette.primary.main};
						}
				  `
				: props.color && props.color === 'secondary'
				? css`
						& > .RippleEffect-root {
							background-color: ${props => props.theme.palette.secondary.main};
						}
				  `
				: props.color && props.color === 'error'
				? css`
						& > .RippleEffect-root {
							background-color: ${props => props.theme.palette.error.main};
						}
				  `
				: props.color && props.color === 'success'
				? css`
						& > .RippleEffect-root {
							background-color: ${props => props.theme.palette.success.main};
						}
				  `
				: props.color && props.color === 'info'
				? css`
						& > .RippleEffect-root {
							background-color: ${props => props.theme.palette.info.main};
						}
				  `
				: ``};
	}
	& > .RippleEffect-root {
		position: absolute;
		overflow: hidden;
		display: flex;
		z-index: ${style.zindex['2']};
		width: 20px;
		height: 20px;
		content: '';
		border-radius: 9999px;
		opacity: 1;
		animation: 0.9s ease 1 forwards ${rippleEffect};
	}

	& > .RippleContent-root {
		display: flex;
		position: relative;
		z-index: ${style.zindex['3']};
	}
`
