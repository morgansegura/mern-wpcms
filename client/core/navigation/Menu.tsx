import React, { Fragment } from 'react'
// [Config]
import { MenuItemProps, MenuProps } from '@config/interfaces/MenuProps'
// [Styles]
import { MenuContainer } from 'core/styles/navigation'

const Menu: React.FC<MenuProps> = ({ items }) => {
	return (
		<MenuContainer>
			<>{items && items.map(item => <Fragment key={item.key}>{item.label}</Fragment>)}</>
		</MenuContainer>
	)
}

export default Menu
