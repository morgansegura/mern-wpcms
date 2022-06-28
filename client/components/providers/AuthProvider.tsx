import { createContext, FC, useEffect, useState } from 'react'
import { useStorage } from 'hooks'
import { IAuthProvider } from '@components/providers/Provider.interfaces'

const AuthContext = createContext<any | null>(null)

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
	const { getStorage, setStorage } = useStorage()
	const [auth, setAuth] = useState({
		user: null,
		token: '',
	})

	const setAuthState = () => {
		if (getStorage('auth')) {
			setAuth(JSON.parse(getStorage('auth')))
		}
	}

	useEffect(() => {
		setAuthState()
	}, [])

	return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
