import { FC, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { pathConfig as path } from 'api'
import { Layout, StyledContentBlock, StyledH2 } from '@components/layouts'
import { Container } from 'core/layout'
import { useAuth } from 'hooks'
import { AuthContext } from '@components/providers'

const Admin: FC = () => {
	const router = useRouter()
	const [auth, setAuth] = useContext(AuthContext)

	useEffect(() => {}, [])

	return (
		<>
			<Layout>
				<Container contain="xl">
					<StyledContentBlock>
						{auth && auth.user === null ? (
							<StyledH2>Nice Try!</StyledH2>
						) : (
							<StyledH2>Admin</StyledH2>
						)}
					</StyledContentBlock>
				</Container>
			</Layout>
		</>
	)
}

export default Admin
