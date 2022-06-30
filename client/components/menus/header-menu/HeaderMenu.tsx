import { FC, useContext } from 'react'
import { useAuth } from 'hooks'
import Link from 'next/link'

// [Core]
import { DrawerProvider, DrawerTrigger } from '@core/navigation/drawer'
import { Menu } from '@core/navigation/menu'
// [Components]
import { IconDashboard, IconHamburger, IconSignout } from '@components/icons'
import { AuthContext, ToggleColorMode } from '@components/providers'
// [Interfaces]
import { IHeaderMenu } from './HeaderMenu.interfaces'

// [Styles]
import * as s from './HeaderMenu.styled'

const HeaderMenu: FC<IHeaderMenu> = () => {
	const { signout } = useAuth()
	const { hasAuth, getUserRole, roleBasedPath } = useAuth()
	const [auth, setAuth] = useContext(AuthContext)

	const unauthItems = [
		{
			label: (
				<s.HeaderMenuItem>
					<Link href="/signin">
						<a>Signin</a>
					</Link>
				</s.HeaderMenuItem>
			),
			key: 'signin',
		},
		{
			label: (
				<s.HeaderMenuItem>
					<Link href="/signup">
						<a>Signup</a>
					</Link>
				</s.HeaderMenuItem>
			),
			key: 'signup',
		},
		{
			label: (
				<s.HeaderMenuItem>
					<s.HeaderSVG>
						<ToggleColorMode theme="light" />
					</s.HeaderSVG>
				</s.HeaderMenuItem>
			),
			key: 'open-drawer',
		},
	]
	const authItems = [
		{
			label: (
				<s.HeaderMenuItem>
					<Link href={roleBasedPath()}>
						<a>
							<IconDashboard /> {auth?.user?.username || `Dashboard`}
						</a>
					</Link>
				</s.HeaderMenuItem>
			),
			key: 'dashboard',
		},
		{
			label: (
				<s.HeaderMenuItem>
					<Link href="/">
						<a onClick={() => signout()}>
							<IconSignout />
							Signout
						</a>
					</Link>
				</s.HeaderMenuItem>
			),
			key: 'signout',
		},
		{
			label: (
				<s.HeaderMenuItem>
					<s.HeaderSVG>
						<ToggleColorMode theme="light" />
					</s.HeaderSVG>
				</s.HeaderMenuItem>
			),
			key: 'open-drawer',
		},
		{
			label: (
				<s.HeaderMenuItem>
					<s.HeaderSVG>
						<DrawerTrigger>
							<IconHamburger />
						</DrawerTrigger>
					</s.HeaderSVG>
				</s.HeaderMenuItem>
			),
			key: 'toggle-color',
		},
	]

	return (
		<s.HeaderMenu>
			<Menu items={hasAuth ? authItems : unauthItems} />
		</s.HeaderMenu>
	)
}

export default HeaderMenu
