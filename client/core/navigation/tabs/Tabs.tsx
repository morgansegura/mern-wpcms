import { FC } from 'react'

// [Interfaces]
import { ITabs } from './Tabs.interfaces'
// [Styles]
import * as s from './Tabs.styled'

const Tabs: FC<ITabs> = ({ children }) => {
	return <s.TabsContainer>{children}</s.TabsContainer>
}

export default Tabs
