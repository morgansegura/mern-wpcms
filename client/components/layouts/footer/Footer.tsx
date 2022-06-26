import { FC } from 'react'

// [Interfaces]
import { IFooter } from './Footer.interfaces'
// [Styles]
import * as s from './Footer.styled'

const Footer: FC<IFooter> = ({ children }) => {
	return (
		<s.Footer>
			<s.FooterContainer>{children}</s.FooterContainer>
		</s.Footer>
	)
}

export default Footer
