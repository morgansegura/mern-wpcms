import React from 'react'
import { useStorage } from 'hooks'
import { AuthProviderProps } from '@config/interfaces'

const AuthContext = React.createContext<any | null>(null)

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const { getStorage } = useStorage()
	const [auth, setAuth] = React.useState({
		user: null,
		token: '',
	})

	React.useEffect(() => {
		if (getStorage('auth')) {
			setAuth(JSON.parse(getStorage('auth')))
		}
	}, [])

	return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
