import { createContext, FC, useEffect, useState } from 'react'
import axios from 'axios'
import { useStorage } from 'hooks'
import { AuthProviderProps } from '@config/interfaces'

const AuthContext = createContext<any | null>(null)

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const { getStorage, setStorage } = useStorage()
	const [auth, setAuth] = useState({
		user: null,
		token: '',
	})

	if (typeof window === 'undefined') {
		axios.defaults.baseURL = process.env.API
		axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`
	} else {
		axios.defaults.baseURL = process.env.NEXT_PUBLIC_API
		axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`
	}

	const setAuthState = () => {
		if (getStorage('auth')) {
			setAuth(JSON.parse(getStorage('auth')))
		} else {
			setAuth(auth)
			setStorage('auth', JSON.stringify(auth))
		}
	}

	useEffect(() => {
		setAuthState()
	}, [])

	return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
