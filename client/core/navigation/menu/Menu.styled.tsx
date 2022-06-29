import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
// [Config]
import { IMenu, TMenuItem } from './Menu.interfaces'

export const Menu = styled.div<IMenu>`
	display: flex;

	${props =>
		props.mode === 'stacked'
			? css`
					flex-direction: column;
			  `
			: css`
					align-items: center;
			  `}
`

export const SVGContainer = styled.div``

export const MenuItem = styled.div<TMenuItem>`
	cursor: pointer;

	${SVGContainer}, a {
		display: flex;
		align-items: center;
		position: relative;
		z-index: ${style.zindex['1']};
		text-decoration: none;
	}

	svg {
		display: flex;
		align-items: center;
	}
`
