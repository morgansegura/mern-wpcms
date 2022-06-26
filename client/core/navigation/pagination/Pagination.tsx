import { FC } from 'react'

// [Interfaces]
import { IPagination } from './Pagination.interfaces'
// [Styles]
import * as s from './Pagination.styled'

const Pagination: FC<IPagination> = ({ children }) => {
	return <s.PaginationContainer>{children}</s.PaginationContainer>
}

export default Pagination
