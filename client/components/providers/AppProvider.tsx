import { FC } from 'react'
import axios from 'axios'
import { AuthProvider, ThemesProvider } from '@components/providers'
import { IAppProvider } from '@components/providers/Provider.interfaces'

const AppProvider: FC<IAppProvider> = ({ children }) => {
	axios.defaults.baseURL = ``
	axios.defaults.withCredentials = true

	return (
		<AuthProvider>
			<ThemesProvider>{children}</ThemesProvider>
		</AuthProvider>
	)
}

export default AppProvider
