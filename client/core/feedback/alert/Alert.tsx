import { FC } from 'react'

// [Interfaces]
import { IAlert } from './Alert.interfaces'
// [Styles]
import * as s from './Alert.styled'

const Alert: FC<IAlert> = ({ children }) => {
	return <s.AlertContainer>{children}</s.AlertContainer>
}

export default Alert
