import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// [API]
import { authService, pathConfig as path } from 'api'
// [Core]
import { TextField } from 'core/inputs'
// import RippleEffect from 'core/utils/RippleEffect'
// [Config]
import { SigninFormProps } from '@config/interfaces'
// [Styled]
import {
	StyledForm,
	StyledFormAltMessage,
	StyledFormSubmit,
	StyledFormSubmitBlock,
	StyledFormTitle,
	StyledTextFieldWarning,
} from 'core/styles/inputs'

const SigninForm: React.FC<SigninFormProps> = ({ title }) => {
	const router = useRouter()
	const [loggedIn, setLoggedIn] = React.useState(false)
	const { auth } = path

	const schema = yup.object().shape({
		// username: yup.string().max(20).required(),
		email: yup.string().email().required('Email is a required field.'),
		password: yup.string().min(8).max(32).required(),
	})

	const onSubmit = async () => {
		authService
			.signin({
				email: watch('email'),
				password: watch('password'),
			})
			.then(res => {
				setLoggedIn(true)
				toast.success(`Welcome back ${res.user.username}`)
			})
			.catch((err: any) => {
				toast.error(`Error ${err}`)
			})
	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	React.useEffect(() => {
		if (loggedIn) {
			router.push(`${path.base.landing.href}`)
			// toast.error(`📩  Please check your email to confirm registration.`)
		}
	}, [loggedIn, onSubmit])

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				<StyledFormTitle>{title}</StyledFormTitle>
				<TextField
					type="email"
					name="email"
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
					<StyledFormSubmit type="submit">
						Signin
						{/* <RippleEffect color="primary" /> */}
					</StyledFormSubmit>
				</StyledFormSubmitBlock>
				<StyledFormAltMessage>
					Need a membership?
					<Link href="/signup">
						<a>Signup </a>
					</Link>
				</StyledFormAltMessage>
			</StyledForm>
			<Toaster />
		</>
	)
}

export default SigninForm
