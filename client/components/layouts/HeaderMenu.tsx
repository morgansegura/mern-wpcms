import React from 'react'
import Link from 'next/link'
// [Hooks]
import { useStorage } from 'hooks'
// [Core]
import { DrawerTrigger, Menu } from 'core/navigation'
// [Components]
import { ToggleColorMode } from '@components/providers/ThemesProvider'
import { SignOut } from '@components/inputs'
// [Styles]
import { HeaderMenuItem, HeaderSVG } from '@styles/components/layouts'
// [Icons]
import { FaBars } from 'react-icons/fa'
import { AuthContext } from '@components/providers'

const HeaderMenu: React.FC = () => {
	const [auth, setAuth] = React.useContext(AuthContext)

	React.useEffect(() => {}, [auth])

	const unauthItems = [
		{
			label: (
				<HeaderMenuItem>
					<Link href="/signin">
						<a>Signin</a>
					</Link>
				</HeaderMenuItem>
			),
			key: 'signin',
		},
		{
			label: (
				<HeaderMenuItem>
					<Link href="/signup">
						<a>Signup</a>
					</Link>
				</HeaderMenuItem>
			),
			key: 'signup',
		},
		{
			label: (
				<HeaderMenuItem>
					<HeaderSVG>
						<ToggleColorMode theme="light" />
					</HeaderSVG>
				</HeaderMenuItem>
			),
			key: 'open-drawer',
		},
		{
			label: (
				<HeaderMenuItem>
					<HeaderSVG>
						<DrawerTrigger>
							<FaBars />
						</DrawerTrigger>
					</HeaderSVG>
				</HeaderMenuItem>
			),
			key: 'toggle-color',
		},
	]
	const authItems = [
		{
			label: (
				<HeaderMenuItem>
					<SignOut />
				</HeaderMenuItem>
			),
			key: 'signout',
		},
		{
			label: (
				<HeaderMenuItem>
					<HeaderSVG>
						<ToggleColorMode theme="light" />
					</HeaderSVG>
				</HeaderMenuItem>
			),
			key: 'open-drawer',
		},
		{
			label: (
				<HeaderMenuItem>
					<HeaderSVG>
						<DrawerTrigger>
							<FaBars />
						</DrawerTrigger>
					</HeaderSVG>
				</HeaderMenuItem>
			),
			key: 'toggle-color',
		},
	]

	return (
		<>{auth && auth.user === null ? <Menu items={unauthItems} /> : <Menu items={authItems} />}</>
	)
}

export default HeaderMenu
