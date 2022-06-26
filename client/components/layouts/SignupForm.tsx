import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// [API]
import { authService, pathConfig as path } from 'api'
// [Config]
import { ISignupForm } from './form/Form.interfaces'
// [Core]
import { TextField, TextFieldWarning } from 'core/inputs'

// [Styled]
import * as s from './form/Form.styled'

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
	const router = useRouter()
	const [registered, setRegistered] = useState(false)
	const [loding, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	const onSubmit = () => {
		authService
			.signup({
				fullName: watch('fullName'),
				username: watch('username'),
				email: watch('email'),
				password: watch('password'),
				passwordConfirm: watch('passwordConfirm'),
			})
			.then(res => {
				if (res?.error) {
					toast.error(`Something went wrong. Please try again.`)
					setLoading(false)
				} else {
					setRegistered(true)
					setLoading(true)
				}
			})
			.catch((err: any) => {
				console.log(`Error ${err?.message}`)
			})
	}

	useEffect(() => {
		if (registered) {
			router.push(`${path.auth.signin.href}`)
		}
	}, [registered])

	return (
		<>
			<s.Form onSubmit={handleSubmit(onSubmit)}>
				{title && <s.FormTitle>{title}</s.FormTitle>}
				{copy && <s.FormCopy>{copy}</s.FormCopy>}
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

				<s.FormSubmitBlock>
					<s.FormSubmit type="submit">
						Signup
						{/* <RippleEffect color="primary" /> */}
					</s.FormSubmit>
				</s.FormSubmitBlock>
				<s.FormAltMessage>
					Already a member?{' '}
					<Link href={path.auth.signin.href}>
						<a>{`${path.auth.signin.label}`}</a>
					</Link>
				</s.FormAltMessage>
			</s.Form>
		</>
	)
}

export default SignupForm
