import { FC } from 'react'
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

const HeaderMenu: FC = () => {
	const { hasAuth, signout } = useAuth()

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
					<Link href="/admin">
						<a>
							<IconDashboard />
							Dashboard
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
