import { FC } from 'react'

// [Interfaces]
import { IRating } from './Rating.interfaces'
// [Styles]
import * as s from './Rating.styled'

const Rating: FC<IRating> = ({ children }) => {
	return <s.RatingContainer>{children}</s.RatingContainer>
}

export default Rating
