import { FC } from 'react'

// [Interfaces]
import { ISnackbar } from './Snackbar.interfaces'
// [Styles]
import * as s from './Snackbar.styled'

const Snackbar: FC<ISnackbar> = ({ children }) => {
	return <s.SnackbarContainer>{children}</s.SnackbarContainer>
}

export default Snackbar
