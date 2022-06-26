import { FC } from 'react'

// [Interfaces]
import { IProgress } from './Progress.interfaces'
// [Styles]
import * as s from './Progress.styled'

const Progress: FC<IProgress> = ({ children }) => {
	return <s.ProgressContainer>{children}</s.ProgressContainer>
}

export default Progress
