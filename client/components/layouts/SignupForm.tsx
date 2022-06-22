import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// [API]
import { authService } from 'api'
// [Config]
import { SignupFormProps } from '@config/interfaces'
// [Core]
import { TextField } from 'core/inputs'
// import RippleEffect from 'core/utils/RippleEffect'

// [Styled]
import {
	StyledForm,
	StyledFormAltMessage,
	StyledFormTitle,
	StyledFormSubmitBlock,
	StyledFormSubmit,
} from 'core/styles/inputs'

const schema = yup.object().shape({
	fullName: yup.string(),
	username: yup.string().max(20).required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).max(32).required(),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Password confirmation is required'),
})

const SignupForm: React.FC<SignupFormProps> = ({ title }) => {
	const router = useRouter()
	const [registered, setRegistered] = React.useState(false)
	// const { auth } = paths

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
				setRegistered(true)
				toast.success(res.message)
			})
			.catch((err: any) => {
				toast.error(`Error ${err}`)
				// console.log(err)
			})
	}

	React.useEffect(() => {
		if (registered) {
			router.push('/signin')
			// toast.error(`📩  Please check your email to confirm registration.`)
		}
	}, [registered])

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<StyledFormTitle>{title}</StyledFormTitle>
				<TextField
					type="text"
					name="fullName"
					placeholder="Full Name"
					register={register}
					watch={watch}
				/>
				{errors.fullName?.message && <p>{errors.fullName?.message}</p>}
				<TextField
					type="text"
					name="username"
					placeholder="User Name"
					register={register}
					required
					watch={watch}
				/>
				{errors.username?.message && <p>{errors.username?.message}</p>}
				<TextField
					type="email"
					name="email"
					placeholder="Email"
					register={register}
					required
					watch={watch}
				/>
				{errors.email?.message && <p>{errors.email?.message}</p>}
				<TextField
					type="password"
					name="password"
					placeholder="Password"
					register={register}
					required
					watch={watch}
				/>
				{errors.password?.message && <p>{errors.password?.message}</p>}
				<TextField
					type="password"
					name="passwordConfirm"
					placeholder="Confirm Password"
					register={register}
					required
					watch={watch}
				/>
				{errors.passwordConfirm?.message && <p>{errors.passwordConfirm?.message}</p>}

				<StyledFormSubmitBlock>
					<StyledFormSubmit type="submit">
						Signup
						{/* <RippleEffect color="primary" /> */}
					</StyledFormSubmit>
				</StyledFormSubmitBlock>
				<StyledFormAltMessage>
					Already a member?{' '}
					<Link href="/signin">
						<a>Signin </a>
					</Link>
				</StyledFormAltMessage>
			</StyledForm>
			<Toaster />
		</>
	)
}

export default SignupForm
