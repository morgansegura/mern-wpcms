import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { GlobalStyle } from '@styles/config/globalStyles'
import { useStorage } from 'hooks'
import { themeLight, themeDark } from 'styles/theme/default'
import { MdBrightness4, MdBrightness7 } from 'react-icons/md'

import { ThemesProviderProps, ToggleModeProps } from '@config/interfaces'

type ThemeType = { theme: any }

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  ${GlobalStyle}
`
const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export function ToggleColorMode(props?: ToggleModeProps) {
	const { getStorage } = useStorage()
	const colorMode = React.useContext(ColorModeContext)
	const [themeMode, setThemeMode] = React.useState(
		getStorage('theme') === 'light' ? 'light' : 'dark',
	)

	const toggleMode = () => {
		if (themeMode === 'dark') {
			setThemeMode('light')
		} else {
			setThemeMode('dark')
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

const ThemesProvider: React.FC<ThemesProviderProps> = ({ children }) => {
	const { getStorage, setStorage } = useStorage()
	const [themeMode, setThemeMode] = React.useState(getStorage('theme') || 'light')

	setStorage('theme', themeMode)

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setThemeMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'))
				themeMode === 'light' ? setStorage('theme', 'dark') : setStorage('theme', 'light')
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
