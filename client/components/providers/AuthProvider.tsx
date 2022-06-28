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
		axios.defaults.baseURL = 'http://localhost:8000/api'
		// axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`
	} else {
		axios.defaults.baseURL = 'http://localhost:8000/api'
		// axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`
	}

	useEffect(() => {
		if (getStorage('auth')) {
			setAuth(JSON.parse(getStorage('auth')))
		} else {
			setAuth(auth)
		}
	}, [auth])

	return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
