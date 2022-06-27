import { FC, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { pathConfig as path } from 'api'
import { Layout, StyledContentBlock, StyledH2 } from '@components/layouts'
import { Container } from 'core/layout'
import { useAuth } from 'hooks'
import { AuthContext } from '@components/providers'
import { Typography } from 'core/data-display'

const Admin: FC = () => {
	const router = useRouter()
	const [auth, setAuth] = useContext(AuthContext)

	useEffect(() => {}, [])

	return (
		<>
			<Layout>
				<Container contain="xl">
					<StyledContentBlock>
						<Typography as="h6" view="h1">
							This is an H1
						</Typography>
						<Typography as="h2" view="h2">
							This is an H2
						</Typography>
						<Typography view="h3">This is an H3</Typography>
						<Typography view="h4">This is an H4</Typography>
						<Typography view="h5">This is an H5</Typography>
						<Typography view="h6">This is an H6</Typography>
						<Typography view="p">This is an p</Typography>
					</StyledContentBlock>
				</Container>
			</Layout>
		</>
	)
}

export default Admin
