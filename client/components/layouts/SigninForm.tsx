import React from 'react'
import { SigninFormProps } from '@config/interfaces'
import Link from 'next/link'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { authService } from 'api'
// [Core]
import TextField from 'core/inputs/TextField'
// import RippleEffect from 'core/utils/RippleEffect'

import {
	StyledForm,
	StyledFormAltMessage,
	StyledFormSubmit,
	StyledFormSubmitBlock,
	StyledFormTitle,
} from 'core/styles/inputs'
// [Styled]
import { Renderable, ValueFunction, Toast } from 'react-hot-toast/dist/core/types'

const SigninForm: React.FC<SigninFormProps> = ({ title }) => {
	const router = useRouter()
	const [registered, setRegistered] = React.useState(false)
	// const { auth } = paths

	const schema = yup.object().shape({
		// username: yup.string().max(20).required(),
		email: yup.string().email().required(),
		password: yup.string().min(8).max(32).required(),
	})

	const onSubmit = async () => {
		authService
			.signin({
				email: watch('email'),
				password: watch('password'),
			})
			.then(res => {
				setRegistered(true)
				toast.success(`Welcome back ${res.user.username}`)
				// console.log(res)
			})
			.catch((err: any) => {
				toast.error(`Error ${err}`)
				// console.log(err)
			})
	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	React.useEffect(() => {
		if (registered) {
			router.push('/signin')
			// toast.error(`📩  Please check your email to confirm registration.`)
		}
	}, [registered])

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				<StyledFormTitle>{title}</StyledFormTitle>
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
