import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'

export const Layout = styled.div`
	position: relative;
`

export const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	main {
		flex: 1 0 auto;
	}
`

export const StyledContentBlock = styled.div`
	margin-top: ${style.sp['4']};

	&:first-of-type {
		margin-top: ${style.sp['10']};
	}
`
