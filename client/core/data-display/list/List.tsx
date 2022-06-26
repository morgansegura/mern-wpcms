import { FC } from 'react'

// [Interfaces]
import { IList } from './List.interfaces'
// [Styles]
import * as s from './List.styled'

const List: FC<IList> = ({ children }) => {
	return <s.ListContainer>{children}</s.ListContainer>
}

export default List
