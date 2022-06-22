import React from 'react'
import axios from 'axios'
import { ThemesProvider } from '@components/providers'
import { AppProviderProps } from '@config/interfaces'

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	axios.defaults.baseURL = ``
	axios.defaults.withCredentials = true

	return <ThemesProvider>{children}</ThemesProvider>
}

export default AppProvider
