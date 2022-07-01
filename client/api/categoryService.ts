import { fetchWrapper } from './fetchWrapper'

const baseUrl = ''
interface ICreateCategory {
	name?: string
	slug?: string
}
interface IUpdateCategory {
	slug?: string
}

interface IRemoveCategory {}

export const categoryService = {
	create,
	categories,
	remove,
	update,
}

function create(params: ICreateCategory) {
	return fetchWrapper.post(`${baseUrl}/category`, params)
}

function remove(params: IRemoveCategory) {
	return fetchWrapper.delete(`${baseUrl}/category/${params}`)
}

function update(params: IUpdateCategory) {
	return fetchWrapper.put(`${baseUrl}/category/:slug`, params)
}

function categories() {
	return fetchWrapper.get(`${baseUrl}/categories`)
}
