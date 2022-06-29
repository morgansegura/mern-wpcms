import { FC } from 'react'

// [Interfaces]
import { IForm, IFormSubmit } from './Form.interfaces'
// [Styles]
import * as s from './Form.styled'

export const FormSubmit: FC<IFormSubmit> = ({ label }) => {
	return (
		<s.FormSubmitBlock>
			<s.FormSubmit type="submit">{label}</s.FormSubmit>
		</s.FormSubmitBlock>
	)
}

const Form: FC<IForm> = ({ children, title, copy, onSubmit, autoComplete = 'nofill' }) => {
	return (
		<s.Form onSubmit={onSubmit} autoComplete={autoComplete}>
			{title && <s.FormTitle>{title}</s.FormTitle>}
			{copy && <s.FormCopy>{copy}</s.FormCopy>}
			{children}
		</s.Form>
	)
}

export default Form
