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
import { ForgotPasswordFormProps, ResetPasswordFormProps } from '@config/interfaces'
// [Styled]
import {
	StyledForm,
	StyledFormAltMessage,
	StyledFormCopy,
	StyledFormSubmit,
	StyledFormSubmitBlock,
	StyledFormTitle,
	StyledTextFieldWarning,
} from 'core/styles/inputs'

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ title, copy }) => {
	const { hasAuth, authRedirect } = useAuth()
	const [auth, setAuth] = React.useContext(AuthContext)

	const [loding, setLoading] = React.useState(false)

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

	React.useEffect(() => {
		if (hasAuth) {
			authRedirect(`${path.auth.signin.href}`)
		}
	}, [hasAuth, onSubmit])

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				{title && <StyledFormTitle>{title}</StyledFormTitle>}
				{copy && <StyledFormCopy>{copy}</StyledFormCopy>}
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
					<StyledTextFieldWarning>{errors.resetCode?.message}</StyledTextFieldWarning>
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
					<StyledTextFieldWarning>{errors.password?.message}</StyledTextFieldWarning>
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
					<StyledTextFieldWarning>{errors.passwordConfirm?.message}</StyledTextFieldWarning>
				)}

				<StyledFormSubmitBlock>
					<StyledFormSubmit type="submit">Submit</StyledFormSubmit>
				</StyledFormSubmitBlock>
				<StyledFormAltMessage>
					Alternative options.
					<Link href={`${path.auth.signin.href}`}>
						<a>{path.auth.signin.label}</a>
					</Link>
					<Link href={`${path.auth.signup.href}`}>
						<a>{path.auth.signup.label}</a>
					</Link>
				</StyledFormAltMessage>
			</StyledForm>
		</>
	)
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ title, copy }) => {
	const { hasAuth, authRedirect } = useAuth()
	const [auth, setAuth] = React.useContext(AuthContext)
	const [loding, setLoading] = React.useState(false)
	const [resetPasswordVisible, setResetPasswordVisible] = React.useState(false)

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
				<StyledForm onSubmit={handleSubmit(onSubmit)}>
					{title && <StyledFormTitle>{title}</StyledFormTitle>}
					{copy && <StyledFormCopy>{copy}</StyledFormCopy>}
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
					{errors.email?.message && (
						<StyledTextFieldWarning>{errors.email?.message}</StyledTextFieldWarning>
					)}

					<StyledFormSubmitBlock>
						<StyledFormSubmit type="submit">Submit</StyledFormSubmit>
					</StyledFormSubmitBlock>
					<StyledFormAltMessage>
						Alternative options.
						<Link href={`${path.auth.signin.href}`}>
							<a>{path.auth.signup.href}</a>
						</Link>
						<Link href={`${path.auth.signup.href}`}>
							<a>{path.auth.signup.label}</a>
						</Link>
					</StyledFormAltMessage>
				</StyledForm>
			)}
		</>
	)
}

export default ForgotPasswordForm
