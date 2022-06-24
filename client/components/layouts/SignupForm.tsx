import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// [API]
import { authService } from 'api'
// [Config]
import { SignupFormProps } from '@config/interfaces'
// [Core]
import { TextField } from 'core/inputs'

// [Styled]
import {
	StyledForm,
	StyledFormAltMessage,
	StyledFormTitle,
	StyledFormCopy,
	StyledFormSubmitBlock,
	StyledFormSubmit,
	StyledTextFieldWarning,
} from 'core/styles/inputs'

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

const SignupForm: React.FC<SignupFormProps> = ({ title, copy }) => {
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
			.then(() => {
				setRegistered(true)
			})
			.catch((err: any) => {
				toast.error(`Error ${err}`)
			})
	}

	React.useEffect(() => {
		if (registered) {
			router.push('/signin')
		}
	}, [registered])

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				{title && <StyledFormTitle>{title}</StyledFormTitle>}
				{copy && <StyledFormCopy>{copy}</StyledFormCopy>}
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
					<StyledTextFieldWarning>{errors.fullName?.message}</StyledTextFieldWarning>
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
					<StyledTextFieldWarning>{errors.username?.message}</StyledTextFieldWarning>
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
				{errors.email?.message && (
					<StyledTextFieldWarning>{errors.email?.message}</StyledTextFieldWarning>
				)}
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
					<StyledTextFieldWarning>{errors.password?.message}</StyledTextFieldWarning>
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
					<StyledTextFieldWarning>{errors.passwordConfirm?.message}</StyledTextFieldWarning>
				)}

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
		</>
	)
}

export default SignupForm
