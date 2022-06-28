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
		axios.defaults.baseURL = process.env.LOCAL_API
		axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`
	} else {
		axios.defaults.baseURL = process.env.PUBLIC_API
		axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`
	}

	console.log(process.env.LOCAL_API)

	useEffect(() => {
		if (getStorage('auth')) {
			setAuth(JSON.parse(getStorage('auth')))
		}
	}, [auth])

	return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
