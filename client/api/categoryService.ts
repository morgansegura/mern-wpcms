import { fetchWrapper } from './fetchWrapper'

const baseUrl = 'category'
interface ICreateCategory {
	name?: string
	slug?: string
}

export const categoryService = {
	create,
	categories,
}

function create(params: ICreateCategory) {
	return fetchWrapper.post(`${baseUrl}`, params)
}

function categories() {
	return fetchWrapper.get(`${baseUrl}`)
}
