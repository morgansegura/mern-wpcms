import React, { FC, Fragment } from 'react'

// [Interfaces]
import { IMenu, TMenuItem } from './Menu.interfaces'
// [Styles]
import * as s from './Menu.styled'

const Menu: FC<IMenu> = ({ items, mode }) => {
	return (
		<s.MenuContainer mode={mode}>
			<>
				{items && items.map((item: TMenuItem) => <Fragment key={item.key}>{item.label}</Fragment>)}
			</>
		</s.MenuContainer>
	)
}

export default Menu
