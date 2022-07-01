import { FC } from 'react'

// [Interfaces]
import { IDefaultTheme } from './DefaultTheme.interfaces'
// [Styles]
import * as s from './DefaultTheme.styled'

const DefaultTheme: FC<IDefaultTheme> = ({ children }) => {
	return <s.DefaultTheme>{children}</s.DefaultTheme>
}

export default DefaultTheme
