import { FC, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// [API]
import { categoryService } from 'api'
// [Core]
import { TextField, TextFieldWarning, Form, FormSubmit } from '@core/inputs'
// [Components]
// [Hooks]
import { useAuth, useStorage } from 'hooks'
// [Config]
import { ICreateCategoryForm } from './CreateCategoryForm.interfaces'
// [Styled]
import * as s from './CreateCategoryForm.styled'

const CreateCategoryForm: FC<ICreateCategoryForm> = ({ title, copy }) => {
	const { roleBasedRedirect, hasAuth } = useAuth()
	const [loading, setLoading] = useState(true)

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
					setLoading(true)
				} else {
					toast.success(`Category created successfully`)
					setLoading(false)
				}
			})
			.catch(err => {
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
		if (!hasAuth) {
			roleBasedRedirect()
		} else {
			setLoading(false)
		}
	}, [hasAuth])

	if (loading) {
		return <>Loading...</>
	}

	return (
		<s.CreateCategoryForm>
			<Form onSubmit={handleSubmit(onSubmit)} title={title} copy={copy}>
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

				<FormSubmit label="Create" />
			</Form>
		</s.CreateCategoryForm>
	)
}

export default CreateCategoryForm
