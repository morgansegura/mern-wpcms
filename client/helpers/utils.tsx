const formatDate = (date: any) =>
	new Intl.DateTimeFormat('en-US', {
		month: 'short',
		year: '2-digit',
	}).format(date)

const useInitials = (nameString: string) => {
	const fullName = nameString.split(' ')
	const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0)
	return initials.toUpperCase()
}

const emptyObject = (obj: {}) => {
	return Object.keys(obj).length === 0
}

const readStringValue = (string: string, value: string) => {
	return string.includes(value)
}

export { formatDate, useInitials, emptyObject, readStringValue }
