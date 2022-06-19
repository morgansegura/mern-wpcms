import React from 'react'
import { useStorage } from 'hooks'
// [antd]
import { ToggleColorMode } from '@components/providers/ThemesProvider'
import Link from 'next/link'
import { StyledMenu } from '@styles/components/navigation/Menu'

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
					<a>Signin</a>
				</Link>
			),
			key: 'signup',
		},
		{
			label: <ToggleColorMode theme="light" />,
			key: 'toggle-color',
		},
	]

	return <StyledMenu mode="horizontal" items={items} />
}

export default Menu
