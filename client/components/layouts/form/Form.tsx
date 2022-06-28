import { FC } from 'react'

// [Interfaces]
import { IForm } from './Form.interfaces'
// [Styles]
import * as s from './Form.styled'

const Form: FC<IForm> = ({ children }) => {
	return <s.Form>{children}</s.Form>
}

export default Form
