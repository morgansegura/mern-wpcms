import React from 'react'
import Link from 'next/link'
// [Hooks]
import { useStorage } from 'hooks'
// [Core]
import { DrawerTrigger } from 'core/navigation'
// [Components]
import { ToggleColorMode } from '@components/providers/ThemesProvider'
import { SignOut } from '@components/inputs'
// [Styles]
import { StyledMenu, StyledMenuItem, StyledSVG } from '@styles/components/layouts'
// [Icons]
import { FaBars } from 'react-icons/fa'

const Menu: React.FC = () => {
	const { getStorage } = useStorage()
	const [theme, setTheme] = React.useState(getStorage('theme') || 'light')
	const [current, setCurrent] = React.useState('mail')

	React.useEffect(() => {
		setTheme(getStorage('theme') === 'light' ? 'light' : 'dark')
		console.log(theme)
	}, [getStorage('theme')])

	const items = [
		{
			label: (
				<StyledMenuItem>
					<Link href="/signin">
						<a>Signin</a>
					</Link>
				</StyledMenuItem>
			),
			key: 'signin',
		},
		{
			label: (
				<StyledMenuItem>
					<Link href="/signup">
						<a>Signup</a>
					</Link>
				</StyledMenuItem>
			),
			key: 'signup',
		},
		{
			label: (
				<StyledMenuItem>
					<SignOut />
				</StyledMenuItem>
			),
			key: 'signout',
		},
		{
			label: (
				<StyledMenuItem>
					<StyledSVG>
						<DrawerTrigger>
							<FaBars />
						</DrawerTrigger>
					</StyledSVG>
				</StyledMenuItem>
			),
			key: 'toggle-color',
		},
		{
			label: (
				<StyledMenuItem>
					<StyledSVG>
						<ToggleColorMode theme="light" />
					</StyledSVG>
				</StyledMenuItem>
			),
			key: 'toggle-color',
		},
	]

	return (
		<StyledMenu>
			{items && items.map(({ label, key }) => <React.Fragment key={key}>{label}</React.Fragment>)}
		</StyledMenu>
	)
}

export default Menu
