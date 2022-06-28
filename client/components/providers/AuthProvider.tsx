import { createContext, FC, useEffect, useState } from 'react'
import axios from 'axios'
import { useStorage } from 'hooks'
import { IAuthProvider } from '@components/providers/Provider.interfaces'

const AuthContext = createContext<any | null>(null)

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
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
		}
	}

	useEffect(() => {
		setAuthState()
		console.log('auth.token', auth.token)
	}, [])

	return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
