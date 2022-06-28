import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// [Hooks]
import { useStorage } from 'hooks'
// [Helpers]
import { siteMetadata as meta } from 'helpers'
// [Components]
import { AuthContext } from '@components/providers'

const useAuth = () => {
	const router = useRouter()
	const [auth, setAuth] = useContext(AuthContext)
	const { removeStorage } = useStorage()

	const hasAuth = auth && auth.user === null ? false : true

	const signout = (path: string = '/') => {
		removeStorage('auth')
		setAuth({
			user: null,
			token: '',
		})
		router.push(path)
	}

	const getUserRole = () => {
		return auth?.user?.role ? auth?.user?.role : 'Guest'
	}

	const roleBasedPath = () => {
		return meta?.config.roleType.admins.includes(getUserRole()) ? '/admin' : '/'
	}

	const authRedirect = (path: string = '/signin') => {
		router.push(path)
	}

	const roleBasedRedirect = () => {
		if (hasAuth) {
			meta?.config.roleType.admins.includes(getUserRole())
				? authRedirect('/admin')
				: authRedirect('/')
		} else {
			authRedirect('/')
		}
	}

	const hasToken = () => {
		return auth?.token && auth?.token !== '' ? false : true
	}

	const getToken = () => {
		return hasToken() ? auth?.token : ''
	}

	return {
		hasToken,
		getToken,
		hasAuth,
		authRedirect,
		signout,
		getUserRole,
		roleBasedPath,
		roleBasedRedirect,
	}
}

export default useAuth
