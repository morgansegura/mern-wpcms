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
import { List, ListItem, ListItemText, Typography } from '@core/data-display'
// [Components]
// [Hooks]
import { useAuth, useStorage } from 'hooks'
// [Config]
import {
	ICreateCategoriesLayout,
	ICreateCategoryForm,
	IGetCategories,
} from './CreateCategoryForm.interfaces'
// [Styled]
import * as s from './CreateCategoryForm.styled'
import { Col, Grid } from '@core/layout/grid'
import { Box } from '@core/layout/box'

export const GetCategories: FC<IGetCategories> = ({ updateFormState }) => {
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
				// toast.error(`${err}`)
				console.log(err)
				setLoading(true)
			})
	}

	useEffect(() => {
		getCategories()
	}, [updateFormState])

	return (
		<s.CreateCategoryList>
			{categories && (
				<List>
					{categories.map((cat: { name: string; slug: string }) => (
						<ListItem key={`categories-${cat.slug}`}>
							{loading ? (
								<Skeleton count={categories.length} />
							) : (
								<Link href={`/${cat.slug}`}>
									<a title={`${cat.name} Category`}>
										<ListItemText primary={cat.name} />
									</a>
								</Link>
							)}
						</ListItem>
					))}
				</List>
			)}
		</s.CreateCategoryList>
	)
}

export const CreateCategoryForm: FC<ICreateCategoryForm> = ({ title, copy }) => {
	const [loading, setLoading] = useState(true)
	const [formSubmitState, setFormSubmitState] = useState(false)

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
			setFormSubmitState(true)
		}
		setFormSubmitState(true)
		setLoading(false)
	}, [isSubmitSuccessful])

	if (loading) {
		return <>Loading...</>
	}

	return (
		<p>
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
		</p>
	)
}

const CreatateCategoriesLayout: FC<ICreateCategoriesLayout> = () => {
	return (
		<>
			<Grid gap="2">
				<Col start={[{ sm: '1', lg: '4' }]} end="9">
					<Box mt={[{ lg: '4', xl: '11' }]}>
						<Typography as="h3" variant="h4" children="Categories" />
					</Box>
					<Box mt="0.5">
						<Typography as="p" variant="p" children="Add New Category" />
					</Box>
					<Box mt="3">
						<CreateCategoryForm />
					</Box>
				</Col>
				<Col start={'9'} end={'13'}>
					<Box mt={[{ sm: '8', lg: '4', xl: '11' }]}>
						<Typography as="h4" variant="h4">
							Your Categories
						</Typography>
					</Box>
					<Box ml-xl="1">
						<GetCategories />
					</Box>
				</Col>
			</Grid>
		</>
	)
}

export default CreatateCategoriesLayout
