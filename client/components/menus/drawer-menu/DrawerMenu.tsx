import { FC } from 'react'

// [Core]
import { Accordion } from '@core/surfaces'
// [Interfaces]
import { IDrawerMenu } from './DrawerMenu.interfaces'

// [Styles]
import * as s from './DrawerMenu.styled'

const DrawerMenu: FC<IDrawerMenu> = ({ items }) => {
	return (
		<s.DrawerMenu>
			<Accordion items={items} />
		</s.DrawerMenu>
	)
}

export default DrawerMenu
