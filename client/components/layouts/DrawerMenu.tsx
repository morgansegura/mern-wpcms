import React from 'react'
import Link from 'next/link'
// [Hooks]
import { useStorage } from 'hooks'
// [Core]
import { Menu } from 'core/navigation'
// [Components]
import { AuthContext } from '@components/providers'
import {
	StyledDrawerMenu,
	StyledDrawerMenuContainer,
	StyledDrawerMenuItem,
	StyledDrawerMenuTitle,
} from '@styles/components/layouts'

const DrawerMenu: React.FC = () => {
	const [auth, setAuth] = React.useContext(AuthContext)

	const unauthItems = [
		{
			label: <StyledDrawerMenuTitle>authLinks</StyledDrawerMenuTitle>,
			key: 'title',
		},
		{
			label: (
				<StyledDrawerMenuItem>
					<Link href="/">
						<a>Auth Link1</a>
					</Link>
				</StyledDrawerMenuItem>
			),
			key: 'signout',
		},
	]
	const authItems = [
		{
			label: <StyledDrawerMenuTitle>authLinks</StyledDrawerMenuTitle>,
			key: 'title',
		},
		{
			label: (
				<StyledDrawerMenuItem>
					<Link href="/">
						<a>Auth Link1</a>
					</Link>
				</StyledDrawerMenuItem>
			),
			key: 'signout',
		},
	]

	return (
		<>
			<StyledDrawerMenuContainer>
				{auth && auth === null ? (
					<>
						<StyledDrawerMenu>
							<Menu mode="stacked" items={unauthItems} />
						</StyledDrawerMenu>
					</>
				) : (
					<>
						<StyledDrawerMenu>
							<Menu mode="stacked" items={authItems} />
						</StyledDrawerMenu>
					</>
				)}
			</StyledDrawerMenuContainer>
		</>
	)
}

export default DrawerMenu
