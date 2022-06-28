import { useEffect, useState } from 'react'
// [Hooks]
import { useStorage } from 'hooks'

const useThemeMode = () => {
	const { getStorage, setStorage } = useStorage()
	const presetTheme = 'dark'
	const defaultTheme = getStorage('settings') ? JSON.parse(getStorage('settings')) : presetTheme
	const [themeMode, setThemeMode] = useState(defaultTheme)

	const setTheme = (themeOptions: string) => {
		setThemeMode(themeOptions)

		setStorage(
			'settings',
			JSON.stringify({
				theme: themeMode,
			}),
		)
	}

	const getTheme = (): string => {
		const theme = themeMode
		return theme
	}

	useEffect(() => {
		setTheme(themeMode)
	}, [themeMode])

	return { setTheme, getTheme }
}

export default useThemeMode
