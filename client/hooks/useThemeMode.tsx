import { useContext, useEffect, useState } from 'react'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { AuthContext } from '@components/providers'

const useThemeMode = () => {
	const { getStorage, setStorage } = useStorage()
	const [auth, setAuth] = useContext(AuthContext)
	const defaultTheme = getStorage('auth') && JSON.parse(getStorage('auth'))
	const [themeMode, setThemeMode] = useState(defaultTheme?.preferences?.theme || 'dark')

	const setTheme = (themeOptions: string = 'dark') => {
		setThemeMode(themeOptions)

		setAuth({
			...auth,
			preferences: {
				theme: themeMode,
			},
		})

		setStorage(
			'auth',
			JSON.stringify({
				...auth,
				preferences: {
					theme: themeMode,
				},
			}),
		)
	}

	const getTheme = (): string => {
		const defaultTheme = getStorage('auth') && JSON.parse(getStorage('auth'))
		const theme = defaultTheme?.preferences?.theme || 'dark'
		return theme
	}

	useEffect(() => {
		setTheme(themeMode)
	}, [themeMode])

	return { setTheme, getTheme }
}

export default useThemeMode
