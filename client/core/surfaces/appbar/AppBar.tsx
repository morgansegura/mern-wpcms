import { FC } from 'react'
// [Core]
import { Container } from 'core/layout'
// [Interfaces]
import { IAppBar } from './AppBar.interfaces'
// [Styles]
import { AppBarContainer } from './AppBar.styled'

const AppBar: FC<IAppBar> = ({ children }) => {
	return (
		<AppBarContainer>
			<Container>{children}</Container>
		</AppBarContainer>
	)
}

export default AppBar
