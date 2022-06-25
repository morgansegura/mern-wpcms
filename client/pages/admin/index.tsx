import React, { useContext, useEffect, useState } from 'react'
import { pathConfig as path } from 'api'
import { StyledContentBlock, StyledH2 } from '@styles/components/layouts'
import { DefaultLayout } from '@components/layouts'
import { Container } from 'core/layouts'
import { useAuth } from 'hooks'
import LoadingScreen from '@components/layouts/LoadingScreen'
import { AuthContext } from '@components/providers'

const Admin: React.FC = () => {
	const [auth, setAuth] = useContext(AuthContext)
	const { hasAuth, authRedirect } = useAuth()

	const whoAreYou = () => {
		if (!hasAuth) {
			authRedirect(`${path.base.landing.href}`)
		}
	}

	useEffect(() => {
		whoAreYou()
	}, [])

	return (
		<>
			<DefaultLayout>
				<Container contain="xl">
					<StyledContentBlock>
						{auth && auth.user !== null ? (
							<StyledH2>Admin Page</StyledH2>
						) : (
							<LoadingScreen type="default" />
						)}
					</StyledContentBlock>
				</Container>
			</DefaultLayout>
		</>
	)
}

export default Admin
