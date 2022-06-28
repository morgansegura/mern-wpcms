import axios from 'axios'
import { useStorage } from 'hooks'

const client = (() => {
	let API_PATH

	if (typeof window === 'undefined') {
		API_PATH = process.env.NEXT_PUBLIC_API
	} else {
		API_PATH = process.env.API
	}

	return axios.create({
		withCredentials: true,
		baseURL: API_PATH,
	})
})()

const { getStorage } = useStorage()
const { token } = getStorage('auth') ? JSON.parse(getStorage('auth')) : ''

client.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const fetchWrapper = {
	get,
	post,
	put,
	patch,
	delete: _delete,
}

function get(url: string, credentials: boolean = true) {
	const options = {
		url,
		method: 'get',
		headers: { 'Content-Type': 'application/json' },
	}
	return request(options, { withCredentials: credentials })
}

function post(url: string, data: any | null, credentials: boolean = true) {
	const options = {
		url,
		method: 'post',
		data,
		headers: { 'Content-Type': 'application/json' },
	}
	return request(options, { withCredentials: credentials })
}

function put(url: string, data: any, credentials: boolean = true) {
	const options = {
		url,
		method: 'put',
		data,
		headers: { 'Content-Type': 'application/json' },
	}
	return request(options, { withCredentials: credentials })
}

function patch(url: string, data: any, credentials: boolean = true) {
	const options = {
		url,
		method: 'patch',
		data,
		headers: { 'Content-Type': 'application/json' },
	}
	return request(options, { withCredentials: credentials })
}

function _delete(url: string, credentials: boolean = true) {
	const options = {
		url,
		method: 'delete',
		headers: { 'Content-Type': 'application/json' },
	}
	return request(options, { withCredentials: credentials })
}

async function request(options: any, store?: any) {
	const onSuccess = function (response: { data: any }) {
		const { data } = response
		return data
	}

	const onError = function (error: { response: any }) {
		return Promise.reject(error.response)
	}

	return client(options).then(onSuccess).catch(onError)
}

// export default request
