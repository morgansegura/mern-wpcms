import { FC } from 'react'

// [Interfaces]
import { ITypography } from './Typography.interfaces'
// [Styles]
import * as s from './Typography.styled'

const Typography: FC<ITypography> = ({ children }) => {
	return <s.TypographyContainer>{children}</s.TypographyContainer>
}

export default Typography
