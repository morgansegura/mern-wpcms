import { FC, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// [API]
import { authService, pathConfig as path } from 'api'
// [Core]
import { TextField, TextFieldWarning } from 'core/inputs'
// [Components]
import { AuthContext } from '@components/providers'
// [Hooks]
import { useAuth, useStorage } from 'hooks'
// [Config]
import { ISigninForm } from './form/Form.interfaces'
// [Styled]
import * as s from './form/Form.styled'

const SigninForm: FC<ISigninForm> = ({ title, copy }) => {
	const { roleBasedRedirect, hasToken } = useAuth()
	const { setStorage } = useStorage()
	const [auth, setAuth] = useContext(AuthContext)

	const [loading, setLoading] = useState(true)

	const schema = yup.object().shape({
		email: yup.string().email().required('Email is a required field.'),
		password: yup.string().min(8).max(32).required(),
	})

	const onSubmit = async () => {
		await authService
			.signin({
				email: watch('email'),
				password: watch('password'),
			})
			.then(res => {
				if (res?.error) {
					toast.error(`The credentials given are incorrect.`)
					setLoading(true)
				} else {
					setAuth(res)
					setStorage('auth', JSON.stringify(res))
					toast.success(`Successfully signed in.`)
					setLoading(false)
					roleBasedRedirect()
				}
			})
			.catch(err => {
				console.log(err)
				setLoading(true)
			})
	}

	useEffect(() => {
		if (hasToken()) {
			roleBasedRedirect()
		}
	}, [hasToken])

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	if (loading) {
		return <>Loading...</>
	}

	return (
		<>
			<s.Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				{title && <s.FormTitle>{title}</s.FormTitle>}
				{copy && <s.FormCopy>{copy}</s.FormCopy>}
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
				{errors.email?.message && <TextFieldWarning>{errors.email?.message}</TextFieldWarning>}
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
					<TextFieldWarning>{errors.password?.message}</TextFieldWarning>
				)}
				<s.FormSubmitBlock>
					<s.FormSubmit type="submit">Signin</s.FormSubmit>
				</s.FormSubmitBlock>
				<s.FormAltMessage>
					Need a membership?
					<Link href={`${path.auth.signup.href}`}>
						<a>{path.auth.signup.label}</a>
					</Link>
					<s.ForgotPassword>
						<Link href="/forgot-password">
							<a>Forgot password</a>
						</Link>
					</s.ForgotPassword>
				</s.FormAltMessage>
			</s.Form>
		</>
	)
}

export default SigninForm
