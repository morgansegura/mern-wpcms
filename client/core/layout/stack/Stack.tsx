import { FC } from 'react'

// [Interfaces]
import { IStack } from './Stack.interfaces'
// [Styles]
import * as s from './Stack.styled'

const Stack: FC<IStack> = ({ children }) => {
	return <s.Stack>{children}</s.Stack>
}

export default Stack
