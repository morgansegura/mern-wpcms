import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { AuthContext } from '@components/providers'

const useAuth = () => {
	const router = useRouter()
	const [auth, setAuth] = useContext(AuthContext)
	const { removeStorage } = useStorage()

	const signout = (path: string = '/') => {
		removeStorage('auth')
		setAuth({
			user: null,
			token: '',
		})
		console.log('Signout function deployed')
		router.push(path)
	}

	const hasAuth = auth && auth.user === null ? false : true

	const authRedirect = (path: string = '/signin') => {
		router.push(path)
	}

	return { hasAuth, authRedirect, signout }
}

export default useAuth
