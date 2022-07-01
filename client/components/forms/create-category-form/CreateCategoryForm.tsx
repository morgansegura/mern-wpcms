import { createContext, FC, useContext, useEffect, useState } from 'react'
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
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemIcons,
	ListItemText,
	Typography,
} from '@core/data-display'
import { Col, Grid } from '@core/layout/grid'
import { Box } from '@core/layout/box'

// [Config]
import {
	ICategory,
	ICreateCategoriesLayout,
	ICreateCategoryForm,
	IGetCategories,
	IUpdateCategoriesProvider,
	TCategory,
} from './CreateCategoryForm.interfaces'
// [Styled]
import * as s from './CreateCategoryForm.styled'
import { IconDelete, IconUpdate, IconRemove } from '@components/icons'
import { rmSync } from 'fs'
import { Dialog, DialogProvider, DialogTrigger } from '@core/feedback/dialog'
import { ActiveDialogContext } from '@core/feedback/dialog/Dialog'

export const UpdateCategoriesContext = createContext<any | null>(null)

export const UpdateCategoriesProvider: FC<IUpdateCategoriesProvider> = ({ children }) => {
	const [update, setUpdate] = useState(false)
	return (
		<UpdateCategoriesContext.Provider value={[update, setUpdate]}>
			{children}
		</UpdateCategoriesContext.Provider>
	)
}

export const RemoveCategory: FC<ICategory> = ({ item }) => {
	return (
		<>
			<ListItemIcon onClick={() => handleRemove(item)}>
				<IconDelete />
			</ListItemIcon>
		</>
	)
}

export const UpdateCategoryForm: FC<ICategory> = ({ item }) => {
	const [update, setUpdate] = useContext(UpdateCategoriesContext)
	const [loading, setLoading] = useState(true)
	const [_, setFormSubmitState] = useState(false)

	const schema = yup.object().shape({
		name: yup.string().required(),
	})

	const onSubmit = async () => {
		try {
			await categoryService
				.update({
					name: watch('name'),
					slug: watch('slug'),
				})
				.then(res => {
					if (res?.data === undefined) {
						toast.error(`Categories must be unique.`)
					} else {
						toast.success(`Category updated successfully`)
						setUpdate(true)
					}
				})
		} catch (err) {
			console.log('Error:', err)
		}
	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitSuccessful },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	useEffect(() => {}, [])

	return (
		<s.UpdateCategoryForm>
			<Form onSubmit={handleSubmit(onSubmit)} variant="light" copy="Update Category">
				<TextField
					type="text"
					name="name"
					placeholder="Updated Category Name"
					register={register}
					label="Updated Category Name"
					errors={errors}
					error={errors.name?.message}
					required
					watch={watch}
				/>
				{errors.name?.message && <TextFieldWarning>{errors.name?.message}</TextFieldWarning>}

				<FormSubmit label="Update" />
			</Form>
		</s.UpdateCategoryForm>
	)
}

export const GetCategories: FC<IGetCategories> = () => {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)
	const [update, setUpdate] = useContext(UpdateCategoriesContext)

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

	const handleRemove = async (item: TCategory) => {
		const { slug } = item
		try {
			await categoryService.remove(slug).then(res => {
				setCategories(categories.filter((cat: TCategory) => cat.slug !== res.slug))
				toast.success(`Successfully deleted category.`)
			})
		} catch (err) {
			console.log(err)
			toast.error(`Failed to delete category.`)
		}
	}

	const handleUpdate = async (item: TCategory) => {
		const { slug } = item
		try {
			await categoryService.update(slug).then(res => {
				setCategories(categories.filter((cat: TCategory) => cat.slug !== res.slug))
				toast.success(`Successfully deleted category.`)
			})
		} catch (err) {
			console.log(err)
			toast.error(`Failed to add category.`)
		}
	}

	useEffect(() => {
		getCategories()
	}, [update])

	return (
		<s.CreateCategoryList>
			{categories && (
				<List>
					{categories.map((cat: TCategory) => (
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
							<ListItemIcons>
								<ListItemIcon>
									<DialogProvider>
										<DialogTrigger>
											<IconUpdate />
										</DialogTrigger>
										<Dialog content={<UpdateCategoryForm item={cat} />} />
									</DialogProvider>
								</ListItemIcon>
								<ListItemIcon onClick={() => handleRemove(cat)}>
									<IconDelete />
								</ListItemIcon>
							</ListItemIcons>
						</ListItem>
					))}
				</List>
			)}
		</s.CreateCategoryList>
	)
}

export const CreateCategoryForm: FC<ICreateCategoryForm> = ({ title, copy }) => {
	const [update, setUpdate] = useContext(UpdateCategoriesContext)
	const [loading, setLoading] = useState(true)
	const [_, setFormSubmitState] = useState(false)

	const schema = yup.object().shape({
		name: yup.string().required(),
	})

	const onSubmit = async () => {
		try {
			await categoryService
				.create({
					name: watch('name'),
					slug: watch('slug'),
				})
				.then(res => {
					if (res?.data === undefined) {
						toast.error(`Categories must be unique.`)
					} else {
						toast.success(`Category created successfully`)
						setUpdate(true)
					}
				})
		} catch (err) {
			console.log('Error:', err)
		}
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
			setUpdate(true)
		}
		setFormSubmitState(false)
		setUpdate(false)
		setLoading(false)
	}, [isSubmitSuccessful])

	if (loading) {
		return <>Loading...</>
	}

	return (
		<>
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
		</>
	)
}

const CreatateCategoriesLayout: FC<ICreateCategoriesLayout> = () => {
	return (
		<UpdateCategoriesProvider>
			<Grid gap="6">
				<Col start={'1'} end={[{ sm: '13', lg: '9', xl: '5' }]}>
					<Box mt={[{ lg: '4', xl: '11' }]}>
						<Typography as="h3" variant="h4" copy="Categories" />
					</Box>
					<Box mt="0.5">
						<Typography as="p" variant="p" copy="Add New Category" />
					</Box>
					<Box mt="3">
						<CreateCategoryForm />
					</Box>
				</Col>
				<Col start={[{ sm: '1', lg: '9', xl: '5' }]} end={'13'}>
					<Box mt={[{ sm: '8', lg: '4', xl: '11' }]}>
						<Typography as="h4" variant="h4" copy="Your Categories" />
					</Box>
					<Box ml-xl="1">
						<Grid repeat="3">
							<Col>
								<GetCategories />
							</Col>
						</Grid>
					</Box>
				</Col>
			</Grid>
		</UpdateCategoriesProvider>
	)
}

export default CreatateCategoriesLayout
