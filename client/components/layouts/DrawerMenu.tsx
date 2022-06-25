import React from 'react'
import Link from 'next/link'
// [Hooks]
import { useAuth } from 'hooks'
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
import { SignOut } from '@components/inputs'

const DrawerMenu: React.FC = () => {
	const { hasAuth } = useAuth()

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
			key: 'link1',
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
			key: 'link2',
		},
		{
			label: (
				<StyledDrawerMenuItem>
					<SignOut />
				</StyledDrawerMenuItem>
			),
			key: 'signout',
		},
	]

	return (
		<>
			<StyledDrawerMenuContainer>
				{!hasAuth ? (
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
