import { FC } from 'react'

// [Interfaces]
import { IDialogs } from './Dialogs.interfaces'
// [Styles]
import * as s from './Dialogs.styled'

const Dialogs: FC<IDialogs> = ({ children }) => {
	return <s.DialogsContainer>{children}</s.DialogsContainer>
}

export default Dialogs
