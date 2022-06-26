import { FC } from 'react'

// [Interfaces]
import { IAvatar } from './Avatar.interfaces'
// [Styles]
import * as s from './Avatar.styled'

const Avatar: FC<IAvatar> = ({ children }) => {
	return <s.AvatarContainer>{children}</s.AvatarContainer>
}

export default Avatar
