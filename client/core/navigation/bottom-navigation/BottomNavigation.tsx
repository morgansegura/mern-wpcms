import { FC } from 'react'

// [Interfaces]
import { IBottomNavigation } from './BottomNavigation.interfaces'
// [Styles]
import * as s from './BottomNavigation.styled'

const BottomNavigation: FC<IBottomNavigation> = ({ children }) => {
	return <s.BottomNavigationContainer>{children}</s.BottomNavigationContainer>
}

export default BottomNavigation
