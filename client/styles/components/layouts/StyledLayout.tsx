import styled from 'styled-components'
import * as style from '@styles/config/utilities'
import { StyledMenu, StyledHeader, StyledFooter } from '@styles/components/layouts'

export const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	main {
		flex: 1 0 auto;
	}

	/* ${StyledHeader} {
	}

	${StyledFooter} {
	} */
`
