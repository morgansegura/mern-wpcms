import { FC } from 'react'

// [Interfaces]
import { ICard } from './Card.interfaces'
// [Styles]
import * as s from './Card.styled'

const Card: FC<ICard> = ({ children }) => {
	return <s.CardContainer>{children}</s.CardContainer>
}

export default Card
