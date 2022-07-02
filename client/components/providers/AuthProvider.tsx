import { createContext, FC, useEffect, useState } from 'react'
import axios from 'axios'

// [Hooks]
import { useStorage } from 'hooks'
// [Helpers]
import { siteMetadata as meta } from 'helpers'
// [Interfaces]
import { IAuthProvider } from '@components/providers/Provider.interfaces'

const AuthContext = createContext<any | null>(null)

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
	const { getStorage, setStorage } = useStorage()

	const [auth, setAuth] = useState({
		user: null,
		token: '',
	})

	if (typeof window !== 'undefined') {
		axios.defaults.baseURL = `${meta.config.localApiURL}`
		axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`
	} else {
		axios.defaults.baseURL = `${meta.config.remoteApiURL}`
		axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`
	}

	useEffect(() => {
		if (getStorage('auth')) {
			setAuth(JSON.parse(getStorage('auth')))
		}
	}, [])

	return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
