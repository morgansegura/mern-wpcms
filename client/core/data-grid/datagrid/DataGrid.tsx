import { FC } from 'react'

// [Interfaces]
import { IDataGrid } from './DataGrid.interfaces'
// [Styles]
import * as s from './DataGrid.styled'

const DataGrid: FC<IDataGrid> = ({ children }) => {
	return <s.DataGridContainer>{children}</s.DataGridContainer>
}

export default DataGrid
