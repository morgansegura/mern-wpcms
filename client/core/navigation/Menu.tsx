import React from 'react'
// [Config]
import { MenuProps } from '@config/interfaces/MenuProps'
// [Styles]
import { StyledMenuContainer } from 'core/styles/navigation'

const Menu: React.FC<MenuProps> = ({ children }) => {
	return <StyledMenuContainer>{children}</StyledMenuContainer>
}

export default Menu
