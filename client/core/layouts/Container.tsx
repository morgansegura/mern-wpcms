import React from 'react'
// [Config]
import { ContainerProps } from 'core/config/interfaces'
// [Styles]
import { StyledContainer } from 'core/styles/layouts'

const Container: React.FC<ContainerProps> = ({ children, contain }) => {
	return <StyledContainer contain={contain}>{children}</StyledContainer>
}

export default Container
