import React from 'react'
// [Config]
import { DrawerProps, DrawerTriggerProps } from 'core/config/interfaces'
// [Styles]
import { StyledDrawerContainer, StyledDrawerTrigger } from 'core/styles/navigation'

export const DrawerTrigger: React.FC<DrawerTriggerProps> = ({ children }) => {
	return <StyledDrawerTrigger>{children}</StyledDrawerTrigger>
}

const Drawer: React.FC<DrawerProps> = ({ children }) => {
	return <StyledDrawerContainer>{children}</StyledDrawerContainer>
}

export default Drawer
