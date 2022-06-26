import { FC } from 'react'

// [Interfaces]
import { ITable } from './Table.interfaces'
// [Styles]
import * as s from './Table.styled'

const Table: FC<ITable> = ({ children }) => {
	return <s.TableContainer>{children}</s.TableContainer>
}

export default Table
