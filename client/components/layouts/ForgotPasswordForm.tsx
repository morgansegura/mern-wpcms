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
import { IForgotPasswordForm, IResetPasswordForm } from './form/Form.interfaces'
// [Styled]
import * as s from './form/Form.styled'

export const ResetPasswordForm: FC<IResetPasswordForm> = ({ title, copy }) => {
	const { hasAuth, authRedirect } = useAuth()
	const [auth, setAuth] = useContext(AuthContext)

	const [loding, setLoading] = useState(false)

	const schema = yup.object().shape({
		email: yup.string().email().required('Email is a required field.'),
		resetCode: yup.string().required(),
		password: yup.string().min(8).max(32).required(),
		passwordConfirm: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords must match')
			.required('Password confirmation is required'),
	})

	const onSubmit = async () => {
		authService
			.resetPassword({
				email: watch('email'),
				resetCode: watch('resetCode'),
				password: watch('password'),
				passwordConfirm: watch('passwordConfirm'),
			})
			.then((res: { user: { username: string }; error: string }) => {
				if (res?.error) {
					toast.error(`Reset password failed. Please try again.`)
					setLoading(false)
				} else {
					setAuth(res)
					toast.success(`Password successfully updated! Please login with yout new credentials.`)
					setLoading(true)
				}
			})
			.catch((err: any) => {
				console.log(`Reset password failed. Please try again.`)
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

	useEffect(() => {
		if (hasAuth) {
			authRedirect(`/signin`)
		}
	}, [hasAuth, onSubmit])

	return (
		<>
			<s.Form onSubmit={handleSubmit(onSubmit)}>
				{title && <s.FormTitle>{title}</s.FormTitle>}
				{copy && <s.FormCopy>{copy}</s.FormCopy>}
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
					type="resetCode"
					name="resetCode"
					label="Reset Code"
					placeholder="Reset Code"
					register={register}
					errors={errors}
					error={errors.resetCode?.message}
					required
					watch={watch}
				/>
				{errors.resetCode?.message && (
					<TextFieldWarning>{errors.resetCode?.message}</TextFieldWarning>
				)}
				<TextField
					type="password"
					name="password"
					label="New Password"
					placeholder="New Password"
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
					label="Confirm New Password"
					placeholder="Confirm New Password"
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
					<s.FormSubmit type="submit">Submit</s.FormSubmit>
				</s.FormSubmitBlock>
				<s.FormAltMessage>
					Alternative options.
					<Link href={`${path.auth.signin.href}`}>
						<a>{path.auth.signin.label}</a>
					</Link>
					<Link href={`${path.auth.signup.href}`}>
						<a>{path.auth.signup.label}</a>
					</Link>
				</s.FormAltMessage>
			</s.Form>
		</>
	)
}

const ForgotPasswordForm: FC<IForgotPasswordForm> = ({ title, copy }) => {
	const { hasAuth, authRedirect } = useAuth()
	const [auth, setAuth] = useContext(AuthContext)
	const [loding, setLoading] = useState(false)
	const [resetPasswordVisible, setResetPasswordVisible] = useState(false)

	const schema = yup.object().shape({
		email: yup.string().email().required('Email is a required field.'),
	})

	const onSubmit = async () => {
		authService
			.forgotPassword({
				email: watch('email'),
			})
			.then(res => {
				if (res?.error) {
					toast.error(`Something went wrong. Please Try again.`)
					setLoading(false)
				} else {
					toast.success(`Password reset code was sent to your email.`)
					setLoading(true)
					setResetPasswordVisible(true)
				}
			})
			.catch((err: any) => {
				console.log(`Error ${err?.messsage}`)
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

	return (
		<>
			{resetPasswordVisible ? (
				<ResetPasswordForm
					title="Reset Your Password"
					copy="Enter the reset code along with your credentials."
				/>
			) : (
				<s.Form onSubmit={handleSubmit(onSubmit)}>
					{title && <s.FormTitle>{title}</s.FormTitle>}
					{copy && <s.FormCopy>{copy}</s.FormCopy>}
					<TextField
						type="email"
						name="email"
						placeholder="Email"
						register={register}
						label="Email"
						errors={errors}
						autoComplete="off"
						error={errors.email?.message}
						required
						watch={watch}
					/>
					{errors.email?.message && <TextFieldWarning>{errors.email?.message}</TextFieldWarning>}

					<s.FormSubmitBlock>
						<s.FormSubmit type="submit">Submit</s.FormSubmit>
					</s.FormSubmitBlock>
					<s.FormAltMessage>
						Alternative options.
						<Link href={`${path.auth.signin.href}`}>
							<a>{path.auth.signup.label}</a>
						</Link>
						<Link href={`${path.auth.signup.href}`}>
							<a>{path.auth.signup.label}</a>
						</Link>
					</s.FormAltMessage>
				</s.Form>
			)}
		</>
	)
}

export default ForgotPasswordForm
