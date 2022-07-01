import { FC, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// [API]
import { authService, pathConfig as path } from 'api'
// [Hooks]
import { useAuth, useStorage } from 'hooks'
// [Core]
import { TextField, TextFieldWarning, Form, FormSubmit } from '@core/inputs'
// [Components]
import { AuthContext } from '@components/providers'
// [Config]
import { ISigninForm } from './SigninForm.interfaces'
// [Styled]
import * as sf from '@core/inputs/form/Form.styled'
import * as s from './SigninForm.styled'

const SigninForm: FC<ISigninForm> = ({ title, copy }) => {
	const { roleBasedRedirect, hasAuth } = useAuth()
	const { setStorage } = useStorage()
	const [auth, setAuth] = useContext(AuthContext)

	const [loading, setLoading] = useState(false)

	const schema = yup.object().shape({
		email: yup.string().email().required('Email is a required field.'),
		password: yup.string().min(8).max(32).required(),
	})

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	const onSubmit = () => {
		authService
			.signin({
				email: watch('email'),
				password: watch('password'),
			})
			.then(res => {
				if (res?.error) {
					toast.error(`The credentials given are incorrect.`)
				} else {
					setAuth(res)
					setStorage('auth', JSON.stringify(res))
					toast.success(`Successfully signed in.`)
					setLoading(false)
					roleBasedRedirect()
				}
			})
			.catch(err => {
				console.log('Error:', err.statusText)
				setLoading(false)
			})
	}

	useEffect(() => {
		if (hasAuth) {
			roleBasedRedirect()
		} else {
			setLoading(false)
		}
	}, [hasAuth])

	if (loading) {
		return <>Loading...</>
	}

	return (
		<>
			<s.SigninForm>
				<Form onSubmit={handleSubmit(onSubmit)} title={title} copy={copy}>
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

					<FormSubmit label="Signin" />

					<sf.FormAltMessage>
						Need a membership?
						<Link href={`${path.auth.signup.href}`}>
							<a>{path.auth.signup.label}</a>
						</Link>
						<sf.ForgotPassword>
							<Link href="/forgot-password">
								<a>Forgot password</a>
							</Link>
						</sf.ForgotPassword>
					</sf.FormAltMessage>
				</Form>
			</s.SigninForm>
		</>
	)
}

export default SigninForm
