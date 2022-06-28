import { FC } from 'react'

// [Interfaces]
import { ITypography } from './Typography.interfaces'
// [Styles]
import * as s from './Typography.styled'

/*
	- [√] type: H1-H6, p, b i, strong, hr, spacing-bar-x-y, -- string
		// '@styles/config/utilities'
	- [X] direction?
	- [X] spacing: [t, r, b, l]
	- [√] as: any DOM Element
	- [√] accepts children
*/

const Typography: FC<ITypography> = ({ children, as = 'div', variant = 'p' }) => {
	return (
		<s.Typography as={as} variant={variant}>
			{children}
		</s.Typography>
	)
}

export default Typography
