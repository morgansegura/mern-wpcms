import { FC } from 'react'

// [Interfaces]
import { IPaper } from './Paper.interfaces'
// [Styles]
import * as s from './Paper.styled'

const Paper: FC<IPaper> = ({ children }) => {
	return <s.PaperContainer>{children}</s.PaperContainer>
}

export default Paper
