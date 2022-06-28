import { FC, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// [API]
import { categoryService, pathConfig as path } from 'api'
// [Core]
import { TextField, TextFieldWarning } from 'core/inputs'
// [Components]
import { AuthContext } from '@components/providers'
// [Hooks]
import { useAuth, useStorage } from 'hooks'
// [Config]
import { ICreateCategoryForm } from './form/Form.interfaces'
// [Styled]
import * as s from './form/Form.styled'

const CreateCategoryForm: FC<ICreateCategoryForm> = ({ title, copy }) => {
	const [loading, setLoading] = useState(false)

	const schema = yup.object().shape({
		name: yup.string().required(),
	})

	const onSubmit = async () => {
		categoryService
			.create({
				name: watch('name'),
				slug: watch('slug'),
			})
			.then((res: { user: { username: string }; error: string }) => {
				if (res?.error) {
					toast.error(`The credentials given are incorrect.`)
					setLoading(false)
				} else {
					toast.success(`Category created successfully`)
					setLoading(true)
				}
			})
			.catch(err => {
				console.log(`Error ${err?.message}`)
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
		// if (hasAuth) {
		// 	authRedirect(`${path.admin.base.landing.href}`)
		// }
	}, [])

	return (
		<>
			<s.Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				{title && <s.FormTitle>{title}</s.FormTitle>}
				{copy && <s.FormCopy>{copy}</s.FormCopy>}
				<TextField
					type="text"
					name="name"
					placeholder="Category Name"
					register={register}
					label="Category Name"
					errors={errors}
					error={errors.name?.message}
					required
					watch={watch}
				/>
				{errors.name?.message && <TextFieldWarning>{errors.name?.message}</TextFieldWarning>}

				<s.FormSubmitBlock>
					<s.FormSubmit disabled={loading} type="submit">
						Create
					</s.FormSubmit>
				</s.FormSubmitBlock>
			</s.Form>
		</>
	)
}

export default CreateCategoryForm
