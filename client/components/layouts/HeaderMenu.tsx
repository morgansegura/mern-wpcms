import { FC, useContext } from 'react'
import { useAuth } from 'hooks'
import Link from 'next/link'

// [Core]
import { DrawerTrigger } from 'core/navigation/drawer'
import { IconDashboard, IconHamburger, IconSignout } from '@components/icons'
import { Menu } from 'core/navigation/menu'
// [Components]
import { ToggleColorMode } from '@components/providers/ThemesProvider'
// [Styles]
import * as s from '@components/layouts/header/Header.styled'
import { AuthContext } from '@components/providers'

const HeaderMenu: FC = () => {
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
		<>
			<Menu items={hasAuth ? authItems : unauthItems} />
		</>
	)
}

export default HeaderMenu
