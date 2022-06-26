import { FC } from 'react'

// [Interfaces]
import { IForm } from './Form.interfaces'
// [Styles]
import * as s from './Form.styled'

const Form: FC<IForm> = ({ children }) => {
	return <s.FormContainer>{children}</s.FormContainer>
}

export default Form
