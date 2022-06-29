import { FC, useContext } from 'react'
import { useAuth } from 'hooks'
import Link from 'next/link'

// [Core]
import { DrawerTrigger } from '@core/navigation/drawer'
import { Menu } from '@core/navigation/menu'
// [Components]
import { IconDashboard, IconHamburger, IconSignout } from '@components/icons'
import { AuthContext, ToggleColorMode } from '@components/providers'
// [Interfaces]
import { IDrawerMenu } from './DrawerMenu.interfaces'

// [Styles]
import * as s from './DrawerMenu.styled'

const DrawerMenu: FC<IDrawerMenu> = () => {
	const { signout } = useAuth()
	const { hasAuth, getUserRole, roleBasedPath } = useAuth()
	const [auth, setAuth] = useContext(AuthContext)

	const unauthItems = [
		{
			label: (
				<s.DrawerMenuItem>
					<Link href="/signin">
						<a>Signin</a>
					</Link>
				</s.DrawerMenuItem>
			),
			key: 'signin',
		},
		{
			label: (
				<s.DrawerMenuItem>
					<Link href="/signup">
						<a>Signup</a>
					</Link>
				</s.DrawerMenuItem>
			),
			key: 'signup',
		},
		{
			label: (
				<s.DrawerMenuItem>
					<s.DrawerSVG>
						<ToggleColorMode theme="light" />
					</s.DrawerSVG>
				</s.DrawerMenuItem>
			),
			key: 'open-drawer',
		},
	]
	const authItems = [
		{
			label: (
				<s.DrawerMenuItem>
					<Link href={roleBasedPath()}>
						<a>
							<IconDashboard /> {auth?.user?.username || `Dashboard`}
						</a>
					</Link>
				</s.DrawerMenuItem>
			),
			key: 'dashboard',
		},
		{
			label: (
				<s.DrawerMenuItem>
					<Link href="/">
						<a onClick={() => signout()}>
							<IconSignout />
							Signout
						</a>
					</Link>
				</s.DrawerMenuItem>
			),
			key: 'signout',
		},
		{
			label: (
				<s.DrawerMenuItem>
					<s.DrawerSVG>
						<ToggleColorMode theme="light" />
					</s.DrawerSVG>
				</s.DrawerMenuItem>
			),
			key: 'open-drawer',
		},
		{
			label: (
				<s.DrawerMenuItem>
					<s.DrawerSVG>
						<DrawerTrigger>
							<IconHamburger />
						</DrawerTrigger>
					</s.DrawerSVG>
				</s.DrawerMenuItem>
			),
			key: 'toggle-color',
		},
	]

	return (
		<s.DrawerMenu>
			<Menu items={hasAuth ? authItems : unauthItems} />
		</s.DrawerMenu>
	)
}

export default DrawerMenu
