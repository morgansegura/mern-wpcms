import { useEffect, useState } from 'react'
// [Hooks]
import { useStorage } from 'hooks'

const useThemeMode = () => {
	const { getStorage, setStorage } = useStorage()
	const { theme } = getStorage('settings') ? JSON.parse(getStorage('settings')) : { theme: 'dark' }

	const [themeMode, setThemeMode] = useState(theme)

	const getTheme = (): string => {
		const theme = themeMode
		return theme
	}

	const setTheme = (themeOptions: string) => {
		if (getTheme() === 'dark') {
			setStorage(
				'settings',
				JSON.stringify({
					theme: 'dark',
				}),
			)
		} else {
			setStorage(
				'settings',
				JSON.stringify({
					theme: 'light',
				}),
			)
		}
		setThemeMode(themeOptions)
	}

	useEffect(() => {
		setTheme(themeMode)
	}, [getTheme()])

	return { setTheme, getTheme }
}

export default useThemeMode
