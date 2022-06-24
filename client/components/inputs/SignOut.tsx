import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// [API]
import { authService, pathConfig as path } from 'api'
// [Core]
import { TextField } from 'core/inputs'
// [Components]
import { AuthContext } from '@components/providers'
// [Hooks]
import { useStorage } from 'hooks'
// [Config]
import { SignOutProps } from '@config/interfaces'
// [Styled]
import {
	StyledForm,
	StyledFormAltMessage,
	StyledFormCopy,
	StyledFormSubmit,
	StyledFormSubmitBlock,
	StyledFormTitle,
	StyledTextFieldWarning,
} from 'core/styles/inputs'
import { HeaderMenuItem } from '@styles/components/layouts'

const SignOut: React.FC<SignOutProps> = () => {
	const router = useRouter()
	const { setStorage } = useStorage()
	const [auth, setAuth] = React.useContext(AuthContext)

	const [loggedIn, setLoggedIn] = React.useState(false)
	const [loding, setLoading] = React.useState(false)

	const schema = yup.object().shape({
		email: yup.string().email().required('Email is a required field.'),
		password: yup.string().min(8).max(32).required(),
	})

	const onSubmit = async () => {
		try {
			setLoggedIn(false)
			setAuth({ user: {}, token: '' })
			setStorage('auth', JSON.stringify({ user: {}, token: '' }))
			setLoading(true)
		} catch (err) {
			toast.error(`Error ${err}`)
		}
		setLoading(false)
	}

	React.useEffect(() => {
		if (loggedIn) {
			router.push(`${path.base.landing.href}`)
		}
	}, [loggedIn, onSubmit])

	return (
		<>
			<HeaderMenuItem>
				<Link href="/">
					<a onClick={onSubmit}>Signout</a>
				</Link>
			</HeaderMenuItem>
		</>
	)
}

export default SignOut
