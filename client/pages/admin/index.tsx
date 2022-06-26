import { FC, useContext, useEffect } from 'react'
import { pathConfig as path } from 'api'
import { Layout, StyledContentBlock, StyledH2 } from '@components/layouts'
import { Container } from 'core/layout'
import { useAuth } from 'hooks'
import { AuthContext } from '@components/providers'

const Admin: FC = () => {
	// const [auth, setAuth] = useContext(AuthContext)
	// const { hasAuth, authRedirect } = useAuth()

	// const whoAreYou = () => {
	// 	if (!hasAuth) {
	// 		authRedirect(`${path.base.landing.href}`)
	// 	}
	// }

	// useEffect(() => {
	// 	whoAreYou()
	// }, [])

	return (
		<>
			<Layout>
				<Container contain="xl">
					<StyledContentBlock>
						<StyledH2>Admin Page</StyledH2>
					</StyledContentBlock>
				</Container>
			</Layout>
		</>
	)
}

export default Admin
