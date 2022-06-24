import { useContext } from 'react'
import { useRouter } from 'next/router'
// [Hooks]
import { useStorage } from 'hooks'
// [Components]
import { AuthContext } from '@components/providers'

const useSignout = (path: string = '/') => {
	const router = useRouter()
	const [auth, setAuth] = useContext(AuthContext)
	const { removeStorage } = useStorage()

	const signout = () => {
		removeStorage('auth')
		setAuth({
			user: null,
			token: '',
		})
		router.push(path)
	}

	return { signout }
}

export default useSignout
