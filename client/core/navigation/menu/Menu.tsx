import Link from 'next/link'
import React, { FC, Fragment } from 'react'

// [Interfaces]
import { IMenu, TMenuItem } from './Menu.interfaces'
// [Styles]
import * as s from './Menu.styled'

export const MenuItem: FC<TMenuItem> = ({ title, label, active, href, onClick }) => {
	return href ? (
		<Link href={href} data-title={title}>
			<a onClick={onClick}>
				<s.MenuItem>{label}</s.MenuItem>
			</a>
		</Link>
	) : (
		<s.MenuItem>{label}</s.MenuItem>
	)
}

const Menu: FC<IMenu> = ({ items, mode, children }) => {
	return (
		<s.Menu mode={mode}>
			<>
				{items ? (
					items.map((item: TMenuItem) => <MenuItem key={item.key} label={item.label} />)
				) : (
					<MenuItem label={children} />
				)}
			</>
		</s.Menu>
	)
}

export default Menu
