import React from 'react'
import Link from 'next/link'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { ToggleColorMode } from '@components/providers/ThemesProvider'
// [Config]
import { MenuItemProps } from '@config/interfaces'
// [Styles]
import { StyledMenu, StyledMenuItem } from '@styles/components/layouts'

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
				<Link href="/signin">
					<a>Signin</a>
				</Link>
			),
			key: 'signin',
		},
		{
			label: (
				<Link href="/signup">
					<a>Signup</a>
				</Link>
			),
			key: 'signup',
		},
		{
			label: <ToggleColorMode theme="light" />,
			key: 'toggle-color',
		},
	]

	return (
		<StyledMenu>
			{items && items.map(({ label, key }) => <StyledMenuItem key={key}>{label}</StyledMenuItem>)}
		</StyledMenu>
	)
}

export default Menu
