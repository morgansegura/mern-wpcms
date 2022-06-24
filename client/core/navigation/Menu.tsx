import React, { Fragment } from 'react'
// [Config]
import { MenuProps } from '@config/interfaces/MenuProps'
// [Styles]
import { MenuContainer } from 'core/styles/navigation'

const Menu: React.FC<MenuProps> = ({ items, mode }) => {
	return (
		<MenuContainer mode={mode}>
			<>{items && items.map(item => <Fragment key={item.key}>{item.label}</Fragment>)}</>
		</MenuContainer>
	)
}

export default Menu
