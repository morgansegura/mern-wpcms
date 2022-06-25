import React from 'react'
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
import { useAuth, useStorage } from 'hooks'
// [Config]
import { SigninFormProps } from '@config/interfaces'
// [Styled]
import {
	StyledForgotPassword,
	StyledForm,
	StyledFormAltMessage,
	StyledFormCopy,
	StyledFormSubmit,
	StyledFormSubmitBlock,
	StyledFormTitle,
	StyledTextFieldWarning,
} from 'core/styles/inputs'

const SigninForm: React.FC<SigninFormProps> = ({ title, copy }) => {
	const { hasAuth, authRedirect } = useAuth()
	const { setStorage } = useStorage()
	const [auth, setAuth] = React.useContext(AuthContext)

	const [loggedIn, setLoggedIn] = React.useState(false)
	const [loding, setLoading] = React.useState(false)

	const schema = yup.object().shape({
		email: yup.string().email().required('Email is a required field.'),
		password: yup.string().min(8).max(32).required(),
	})

	const onSubmit = async () => {
		authService
			.signin({
				email: watch('email'),
				password: watch('password'),
			})
			.then((res: { user: { username: string }; error: string }) => {
				if (res?.error) {
					toast.error(`The credentials given are incorrect.`)
					setLoading(false)
				} else {
					setLoggedIn(true)
					setAuth(res)
					setStorage('auth', JSON.stringify(res))
					toast.success(`Welcome back ${res.user.username}`)
					setLoading(true)
				}
			})
			.catch(err => {
				console.log(`Error ${err?.message}`)
				setLoading(false)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	React.useEffect(() => {
		if (hasAuth) {
			authRedirect(`${path.admin.base.landing.href}`)
		}
	}, [hasAuth, onSubmit])

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				{title && <StyledFormTitle>{title}</StyledFormTitle>}
				{copy && <StyledFormCopy>{copy}</StyledFormCopy>}
				<TextField
					type="email"
					name="email"
					placeholder="Email"
					register={register}
					label="Email"
					errors={errors}
					error={errors.email?.message}
					required
					watch={watch}
				/>
				{errors.email?.message && (
					<StyledTextFieldWarning>{errors.email?.message}</StyledTextFieldWarning>
				)}
				<TextField
					type="password"
					name="password"
					label="Password"
					placeholder="Password"
					register={register}
					errors={errors}
					error={errors.password?.message}
					required
					watch={watch}
				/>
				{errors.password?.message && (
					<StyledTextFieldWarning>{errors.password?.message}</StyledTextFieldWarning>
				)}
				<StyledFormSubmitBlock>
					<StyledFormSubmit type="submit">Signin</StyledFormSubmit>
				</StyledFormSubmitBlock>
				<StyledFormAltMessage>
					Need a membership?
					<Link href={`${path.auth.signup.href}`}>
						<a>{path.auth.signup.label}</a>
					</Link>
					<StyledForgotPassword>
						<Link href="/forgot-password">
							<a>Forgot password</a>
						</Link>
					</StyledForgotPassword>
				</StyledFormAltMessage>
			</StyledForm>
		</>
	)
}

export default SigninForm
