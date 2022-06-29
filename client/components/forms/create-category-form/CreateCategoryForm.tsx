import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Skeleton from 'react-loading-skeleton'

// [API]
import { categoryService } from 'api'
// [Core]
import { TextField, TextFieldWarning, Form, FormSubmit } from '@core/inputs'
// [Components]
// [Hooks]
import { useAuth, useStorage } from 'hooks'
// [Config]
import { ICreateCategoryForm, IGetCategories } from './CreateCategoryForm.interfaces'
// [Styled]
import * as s from './CreateCategoryForm.styled'

export const GetCategories: FC<IGetCategories> = () => {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)

	const getCategories = async () => {
		await categoryService
			.categories()
			.then(res => {
				setCategories(res)
				setLoading(false)
			})
			.catch(err => {
				console.log(err)
				setLoading(true)
			})
	}

	useEffect(() => {
		getCategories()
	}, [])

	return (
		<s.CategoriesList>
			<>
				{console.log(categories)}
				<s.ListItem>{loading ? <Skeleton count={categories.length} /> : categories}</s.ListItem>
			</>
		</s.CategoriesList>
	)
}

const CreateCategoryForm: FC<ICreateCategoryForm> = ({ title, copy }) => {
	const { roleBasedRedirect, hasAuth } = useAuth()
	const [loading, setLoading] = useState(true)

	const schema = yup.object().shape({
		name: yup.string().required(),
	})

	const onSubmit = async () => {
		await categoryService
			.create({
				name: watch('name'),
				slug: watch('slug'),
			})
			.then(res => {
				if (res?.error) {
					toast.error(`The credentials given are incorrect.`)
					setLoading(true)
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
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ name: '' })
		}
		setLoading(false)
	}, [isSubmitSuccessful])

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
