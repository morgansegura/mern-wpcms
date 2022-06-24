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
import { HeaderMenuContainer, HeaderMenuItem, HeaderSVG } from '@styles/components/layouts'
// [Icons]
import { FaBars } from 'react-icons/fa'
import { AuthContext } from '@components/providers'

const HeaderMenu: React.FC = () => {
	const { getStorage } = useStorage()
	const [auth, setAuth] = React.useContext(AuthContext)
	const [theme, setTheme] = React.useState(getStorage('theme') || 'dark')

	React.useEffect(() => {
		setTheme(getStorage('theme') === 'light' ? 'light' : 'dark')
		console.log(theme)
	}, [getStorage('theme')])

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
						<DrawerTrigger>
							<FaBars />
						</DrawerTrigger>
					</HeaderSVG>
				</HeaderMenuItem>
			),
			key: 'toggle-color',
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
						<DrawerTrigger>
							<FaBars />
						</DrawerTrigger>
					</HeaderSVG>
				</HeaderMenuItem>
			),
			key: 'toggle-color',
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
	]

	return <>{auth && auth === null ? <Menu items={unauthItems} /> : <Menu items={authItems} />}</>
}

export default HeaderMenu
