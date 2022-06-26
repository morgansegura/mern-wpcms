import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'
import { rgba } from 'polished'
import { BackdropProps } from '@config/interfaces'
import { RgbaColor } from 'polished/lib/types/color'

export const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	main {
		flex: 1 0 auto;
	}
`

export const StyledDrawer = styled.div`
	position: fixed;
`

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
