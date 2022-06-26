import { FC } from 'react'

// [Interfaces]
import { IBadge } from './Badge.interfaces'
// [Styles]
import * as s from './Badge.styled'

const Badge: FC<IBadge> = ({ children }) => {
	return <s.BadgeContainer>{children}</s.BadgeContainer>
}

export default Badge
