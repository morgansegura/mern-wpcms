import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
// [Config]
import { MenuProps, MenuItemProps } from '@config/interfaces'

export const MenuContainer = styled.div<MenuProps>`
	display: flex;
	align-items: center;

	${props =>
		props.mode === 'stacked'
			? css`
					flex-direction: column;
			  `
			: css``}
`

export const SVGContainer = styled.div``

export const MenuItem = styled.div<MenuItemProps>`
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
