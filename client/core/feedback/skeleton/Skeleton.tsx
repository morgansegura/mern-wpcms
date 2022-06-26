import { FC } from 'react'

// [Interfaces]
import { ISkeleton } from './Skeleton.interfaces'
// [Styles]
import * as s from './Skeleton.styled'

const Skeleton: FC<ISkeleton> = ({ children }) => {
	return <s.SkeletonContainer>{children}</s.SkeletonContainer>
}

export default Skeleton
