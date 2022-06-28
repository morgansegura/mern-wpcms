import { FC, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// [API]
import { authService, pathConfig as path } from 'api'
// [Core]
import { Form, FormSubmit, TextField, TextFieldWarning } from 'core/inputs'

// [Components]
import { AuthContext } from '@components/providers'
// [Hooks]
import { useAuth } from 'hooks'

// [Config]
import { IResetPasswordForm } from './ResetPasswordForm.interfaces'
// [Styled]
import * as sf from '@core/inputs/form/Form.styled'
import * as s from './ResetPasswordForm.styled'

const ResetPasswordForm: FC<IResetPasswordForm> = ({ title, copy }) => {
	const { hasAuth, roleBasedRedirect } = useAuth()
	const [auth, setAuth] = useContext(AuthContext)

	const [loading, setLoading] = useState(false)

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
			.then(res => {
				if (res?.error) {
					toast.error(`Reset password failed. Please try again.`)
					setLoading(false)
				} else {
					setAuth(res)
					toast.success(`Password successfully updated! Please login with yout new credentials.`)
					setLoading(true)
					roleBasedRedirect()
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
			roleBasedRedirect()
		} else {
			setLoading(false)
		}
	}, [hasAuth])

	if (loading) {
		return <>Loading...</>
	}

	return (
		<s.ResetPasswordForm>
			<Form onSubmit={handleSubmit(onSubmit)} title={title} copy={copy}>
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

				<FormSubmit label="Submit" />

				<sf.FormAltMessage>
					Alternative options.
					<Link href={`${path.auth.signin.href}`}>
						<a>{path.auth.signin.label}</a>
					</Link>
					<Link href={`${path.auth.signup.href}`}>
						<a>{path.auth.signup.label}</a>
					</Link>
				</sf.FormAltMessage>
			</Form>
		</s.ResetPasswordForm>
	)
}

export default ResetPasswordForm
