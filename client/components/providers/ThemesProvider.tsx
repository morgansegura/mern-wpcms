import { createContext, FC, useContext, useMemo, useState } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { GlobalStyle } from '@styles/config/globalStyles'
import { useStorage, useThemeMode } from 'hooks'
import { themeLight, themeDark } from 'styles/theme/default'
import { MdBrightness4, MdBrightness7 } from 'react-icons/md'

import { IThemesProvider, IThemesProviderToggle } from '@components/providers/Provider.interfaces'

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
				<MdBrightness7 fontSize="small" />
			) : (
				<MdBrightness4 fontSize="small" />
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
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default ThemesProvider
