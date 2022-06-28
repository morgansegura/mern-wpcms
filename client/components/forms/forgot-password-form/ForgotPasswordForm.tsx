import { FC, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// [API]
import { authService, pathConfig as path } from 'api'
// [Core]
import { Form, FormSubmit, TextField, TextFieldWarning } from '@core/inputs'

// [Components]
import { ResetPasswordForm } from '@components/forms'
// [Hooks]
import { useAuth } from 'hooks'

// [Config]
import { IForgotPasswordForm } from './ForgotPasswordForm.interfaces'
// [Styled]
import * as sf from '@core/inputs/form/Form.styled'
import * as s from './ForgotPasswordForm.styled'

const ForgotPasswordForm: FC<IForgotPasswordForm> = ({ title, copy }) => {
	const { hasAuth, roleBasedRedirect } = useAuth()
	const [loading, setLoading] = useState(false)
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
					setLoading(true)
				} else {
					toast.success(`Password reset code was sent to your email.`)
					setLoading(false)
					setResetPasswordVisible(true)
				}
			})
			.catch((err: any) => {
				console.log(err)
				setLoading(true)
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
		<>
			{resetPasswordVisible ? (
				<ResetPasswordForm
					title="Reset Your Password"
					copy="Enter the reset code along with your credentials."
				/>
			) : (
				<s.ForgotPasswordForm>
					<Form onSubmit={handleSubmit(onSubmit)} title={title} copy={copy}>
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

						<FormSubmit label="Submit" />

						<sf.FormAltMessage>
							Alternative options.
							<Link href={`${path.auth.signin.href}`}>
								<a>{path.auth.signup.label}</a>
							</Link>
							<Link href={`${path.auth.signup.href}`}>
								<a>{path.auth.signin.label}</a>
							</Link>
						</sf.FormAltMessage>
					</Form>
				</s.ForgotPasswordForm>
			)}
		</>
	)
}

export default ForgotPasswordForm
