import { FC } from 'react'

// [Interfaces]
import { IContainer } from './Container.interfaces'
// [Styles]
import * as s from './Container.styled'

const Container: FC<IContainer> = ({ children, contain }) => {
	return <s.Container contain={contain}>{children}</s.Container>
}

export default Container
