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
	ICategoryList,
	ICreateCategoriesLayout,
	ICreateCategoryForm,
	IGetCategories,
	IRemoveCategory,
	IUpdateCategory,
	TCategory,
} from './CreateCategoryForm.interfaces'
// [Styled]
import * as s from './CreateCategoryForm.styled'
import { IconClose, IconDelete, IconUpdate } from '@components/icons'
import { Dialog } from '@core/feedback/dialog'

import axios from 'axios'

export const UpdateCategory: FC<IUpdateCategory> = ({ icon, handleUpdate }) => {
	return (
		<>
			<ListItemIcon onClick={handleUpdate}>{icon ? icon : <IconUpdate />}</ListItemIcon>
		</>
	)
}

export const RemoveCategory: FC<IRemoveCategory> = ({ icon, handleRemove }) => {
	return (
		<>
			<ListItemIcon onClick={handleRemove}>{icon ? icon : <IconDelete />}</ListItemIcon>
		</>
	)
}

export const CategoryList: FC<ICategoryList> = ({ setCategories, categories, edit, remove }) => {
	const getCategories = async () => {
		try {
			const { data } = await axios.get('/categories')
			setCategories(data)
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		getCategories()
	}, [])

	return (
		<>
			<s.CreateCategoryList>
				<List>
					{categories.map((cat: TCategory) => (
						<ListItem key={`categories-${cat.slug}`}>
							<Link href={`/${cat.slug}`}>
								<a title={`${cat.name} Category`}>
									<ListItemText primary={cat.name} />
								</a>
							</Link>

							<ListItemIcons>
								<UpdateCategory handleUpdate={() => edit(cat)} />
								<RemoveCategory handleRemove={() => remove(cat)} />
							</ListItemIcons>
						</ListItem>
					))}
				</List>
			</s.CreateCategoryList>
		</>
	)
}

export const UpdateCategoryForm: FC<IUpdateCategory> = ({ item, handleUpdate }) => {
	const [loading, setLoading] = useState(true)
	const [_, setFormSubmitState] = useState(false)

	const schema = yup.object().shape({
		name: yup.string().required(),
	})

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitSuccessful },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	useEffect(() => {}, [])

	return (
		<s.UpdateCategoryForm>
			<Form onSubmit={handleSubmit(handleUpdate)} variant="light" copy="Update Category">
				<TextField
					type="text"
					name="name"
					placeholder={`${item?.name}`}
					register={register}
					label={`${item?.name}`}
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

export const CreateCategoryForm: FC<ICreateCategoryForm> = ({ title, copy }) => {
	const [loading, setLoading] = useState(false)
	const [_, setFormSubmitState] = useState(false)

	const [categories, setCategories] = useState([])
	const [toggleDialog, setToggleDialog] = useState({ open: false, close: true })
	const [updatingCategory, setUpdatingCategory] = useState({})

	const schema = yup.object().shape({
		name: yup.string().required(),
	})

	const onCreateCategory = async () => {
		try {
			setLoading(true)
			const { data } = await axios.post('/category', {
				name: watch('name'),
				slug: watch('slug'),
			})
			setCategories([data, ...categories])
			toast.success(`Category created successfully`)
			setLoading(false)
		} catch (err) {
			console.log(err)
			toast.error(`Category creation failed.`)
			setLoading(false)
		}
	}

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) })

	const handleRemove = async (item: TCategory) => {
		const { slug } = item
		try {
			const { data } = await axios.delete(`/category/${slug}`)

			setCategories(categories.filter((cat: TCategory) => cat.slug !== data.slug))
			toast.success(`Successfully deleted category.`)
			setLoading(false)
		} catch (err) {
			console.log(err)
			toast.error(`Successfully deleted category.`)
			setLoading(false)
		}
	}

	const handleEdit = (item: TCategory) => {
		setUpdatingCategory(item)
		setToggleDialog({ open: true, close: false })
	}

	const handleUpdate = async (item: TCategory) => {
		const { slug } = item
		try {
			const { data } = await axios.put(`/category/${updatingCategory?.slug}`, item)
			const newCategories: any = categories.map((cat: any) => {
				if (cat?._id === data?._id) {
					return data
				}
				return cat
			})
			setCategories(newCategories)
			toast.success(`Successfully updated category.`)
			setToggleDialog({ open: false, close: true })
			setUpdatingCategory({})
		} catch (err) {
			console.log(err)
			toast.error(`Failed to update category.`)
		}
	}

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ name: '' })
		}
	}, [isSubmitSuccessful])

	if (loading) {
		return <>Loading...</>
	}

	return (
		<>
			<s.CategoryContainer>
				<s.CategoryFormContainer>
					<s.CategoryFormTitle>Category</s.CategoryFormTitle>

					<s.CategoryFormCopy>Add New Category</s.CategoryFormCopy>

					<s.CreateCategoryForm>
						<Form onSubmit={handleSubmit(onCreateCategory)} title={title} copy={copy}>
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
				</s.CategoryFormContainer>
				<s.CategoryListContainer>
					<s.CategoryFormTitle>Your Categories</s.CategoryFormTitle>

					<CategoryList
						categories={categories}
						setCategories={setCategories}
						edit={handleEdit}
						remove={handleRemove}
					/>
					<Dialog
						toggle={toggleDialog}
						setToggle={() =>
							setToggleDialog({ open: !toggleDialog.open, close: !toggleDialog.close })
						}
						content={<UpdateCategoryForm item={updatingCategory} handleUpdate={handleUpdate} />}
						closeIcon={<IconClose />}
					/>
				</s.CategoryListContainer>
			</s.CategoryContainer>
		</>
	)
}

export default CreateCategoryForm
