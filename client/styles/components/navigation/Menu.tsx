import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { MenuProps } from '@config/interfaces'

export const StyledMenu = styled.nav`
	background-color: ${props => props.theme.palette.background.default};
	padding-top: ${style.sp['1']};
	padding-bottom: ${style.sp['1']};

	${(props: MenuProps) => (props.mode ? `` : ``)}
`

export const StyledMenuItem = styled.div``
