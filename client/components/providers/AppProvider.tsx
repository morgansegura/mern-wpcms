import { FC } from 'react'
import axios from 'axios'
import { AuthProvider, ThemesProvider } from '@components/providers'
import { AppProviderProps } from '@config/interfaces'

const AppProvider: FC<AppProviderProps> = ({ children }) => {
	axios.defaults.baseURL = ``
	axios.defaults.withCredentials = true

	return (
		<AuthProvider>
			<ThemesProvider>{children}</ThemesProvider>
		</AuthProvider>
	)
}

export default AppProvider
