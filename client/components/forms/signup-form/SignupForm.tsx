import { FC, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AuthContext } from '@components/providers'
import axios from 'axios'
import { useStorage, useAuth } from 'hooks'

// [API]
import { authService, pathConfig as path } from 'api'
// [Core]
import { TextField, TextFieldWarning, Form, FormSubmit } from '@core/inputs'
// [Config]
import { ISignupForm } from './SignupForm.interfaces'
// [Styled]
import * as sf from '@core/inputs/form/Form.styled'
import * as s from './SignupForm.styled'

const schema = yup.object().shape({
	fullName: yup.string().required(),
	username: yup.string().max(20).required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).max(32).required(),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Password confirmation is required'),
})

const SignupForm: FC<ISignupForm> = ({ title, copy }) => {
	const [auth, setAuth] = useContext(AuthContext)
	const { setStorage } = useStorage()
	const { roleBasedRedirect, authRedirect, hasAuth } = useAuth()
	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	useEffect(() => {
		if (auth?.token) {
			authRedirect('/')
		}
	}, [auth])

	const onSubmit = async () => {
		setLoading(true)
		try {
			const { data } = await axios.post('/signup', {
				fullName: watch('fullName'),
				username: watch('username'),
				email: watch('email'),
				password: watch('password'),
				passwordConfirm: watch('passwordConfirm'),
			})
			if (data?.error) {
				toast.error(`Something went wrong. Please try again.`)
				setLoading(false)
			} else {
				setAuth(data)
				setStorage('auth', JSON.stringify(data))
				toast.success(`Successfully signed in.`)
				setLoading(false)
				roleBasedRedirect()
			}
		} catch (err) {
			toast.error('Signup failed. Try again.')
			console.log(err)
			setLoading(false)
		}
	}

	if (loading) {
		return <>Loading...</>
	}

	return (
		<>
			<s.SignupForm>
				<Form onSubmit={handleSubmit(onSubmit)} title={title} copy={copy}>
					<TextField
						type="text"
						name="fullName"
						placeholder="Full Name"
						label="Your Full Name"
						error={errors.fullName?.message}
						register={register}
						required
						watch={watch}
					/>
					{errors.fullName?.message && (
						<TextFieldWarning>{errors.fullName?.message}</TextFieldWarning>
					)}
					<TextField
						type="text"
						label="Your Username"
						name="username"
						placeholder="User Name"
						register={register}
						errors={errors}
						error={errors.username?.message}
						required
						watch={watch}
					/>
					{errors.username?.message && (
						<TextFieldWarning>{errors.username?.message}</TextFieldWarning>
					)}
					<TextField
						type="email"
						name="email"
						label="Your Email"
						placeholder="Email"
						register={register}
						errors={errors}
						error={errors.email?.message}
						required
						watch={watch}
					/>
					{errors.email?.message && <TextFieldWarning>{errors.email?.message}</TextFieldWarning>}
					<TextField
						type="password"
						name="password"
						label="Secure Password"
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
					<TextField
						type="password"
						name="passwordConfirm"
						label="Confirm Password"
						placeholder="Confirm Password"
						register={register}
						errors={errors}
						error={errors.passwordConfirm?.message}
						required
						watch={watch}
					/>
					{errors.passwordConfirm?.message && (
						<TextFieldWarning>{errors.passwordConfirm?.message}</TextFieldWarning>
					)}

					<FormSubmit label="Signup" />

					<sf.FormAltMessage>
						Already a member?{' '}
						<Link href={path.auth.signin.href}>
							<a>{`${path.auth.signin.label}`}</a>
						</Link>
					</sf.FormAltMessage>
				</Form>
			</s.SignupForm>
		</>
	)
}

export default SignupForm
