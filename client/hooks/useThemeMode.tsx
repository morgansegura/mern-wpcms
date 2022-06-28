import { useEffect, useState } from 'react'
// [Hooks]
import { useStorage } from 'hooks'

const useThemeMode = () => {
	const { getStorage, setStorage } = useStorage()
	const { theme } = getStorage('settings') ? JSON.parse(getStorage('settings')) : { theme: 'dark' }

	const [themeMode, setThemeMode] = useState(theme)

	const setTheme = (themeOptions: string) => {
		setThemeMode(themeOptions)

		setStorage(
			'settings',
			JSON.stringify({
				theme,
			}),
		)
	}

	const getTheme = (): string => {
		const theme = themeMode
		return theme
	}

	useEffect(() => {
		setTheme(themeMode)
	}, [])

	return { setTheme, getTheme }
}

export default useThemeMode
