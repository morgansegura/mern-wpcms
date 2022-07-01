import { createContext, FC, useContext, useMemo, useState } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { useThemeMode } from 'hooks'
// [Components]
import DefaultTheme from '@components/theme/default-theme/DefaultTheme'
// [Icons]
import { IconDarkMode, IconLightMode } from '@components/icons'
// [Interfaces]
import { IThemesProvider, IThemesProviderToggle } from '@components/providers/Provider.interfaces'
// [Styles]
import { GlobalStyle } from '@styles/config/globalStyles'
import { themeLight, themeDark } from '@styles/theme/default'

type ThemeType = { theme: 'light' | 'dark' }

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  ${GlobalStyle}
`
const ColorModeContext = createContext({ toggleColorMode: () => {} })

export function ToggleColorMode(props?: IThemesProviderToggle) {
	const { getTheme, setTheme } = useThemeMode()
	const colorMode = useContext(ColorModeContext)
	const [themeMode, setThemeMode] = useState(getTheme() === 'light' ? 'light' : 'dark')

	const toggleMode = () => {
		if (themeMode === 'dark') {
			setThemeMode('light')
			setTheme('light')
		} else {
			setThemeMode('dark')
			setTheme('dark')
		}
	}

	return (
		<div
			onClick={() => {
				colorMode.toggleColorMode()
				toggleMode()
			}}
		>
			{themeMode === 'dark' ? (
				<IconLightMode fontSize="small" />
			) : (
				<IconDarkMode fontSize="small" />
			)}
		</div>
	)
}

const ThemesProvider: FC<IThemesProvider> = ({ children }) => {
	const { getTheme, setTheme } = useThemeMode()
	const [themeMode, setThemeMode] = useState(getTheme() === 'light' ? 'light' : 'dark')

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setThemeMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'))
				themeMode === 'light' ? setTheme('dark') : setTheme('light')
				setTheme(themeMode)
			},
		}),
		[],
	)

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={themeMode === 'light' ? themeLight : themeDark}>
				<GlobalStyles />
				<DefaultTheme>{children}</DefaultTheme>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default ThemesProvider
