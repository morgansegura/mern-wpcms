import { useEffect, useState } from 'react'
// [Hooks]
import { useStorage } from 'hooks'

const useThemeMode = () => {
	const { getStorage, setStorage } = useStorage()
	const { theme } = getStorage('settings') && JSON.parse(getStorage('settings'))
	const [themeMode, setThemeMode] = useState(theme ? theme : 'dark')

	console.log({ theme })

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
