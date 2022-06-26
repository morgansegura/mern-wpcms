import { FC, useEffect, useState } from 'react'
import { pathConfig as path } from 'api'
import { StyledContentBlock, StyledH2 } from '@styles/components/layouts'
import { DefaultLayout } from '@components/layouts'
import { Container } from 'core/layout'
import { useAuth } from 'hooks'
import LoadingScreen from '@components/layouts/LoadingScreen'

const CategoriesPage: FC = () => {
	const { hasAuth, authRedirect } = useAuth()
	const [roleCheck, setRoleCheck] = useState(hasAuth)

	const whoAreYou = () => {
		console.log({ hasAuth })
		if (!roleCheck) {
			authRedirect(`${path.base.landing.href}`)
		}
	}

	useEffect(() => {
		whoAreYou()
	}, [hasAuth])

	return (
		<>
			<DefaultLayout>
				<Container contain="xl">
					<StyledContentBlock>
						{hasAuth ? <StyledH2>Categories Page</StyledH2> : <LoadingScreen type="default" />}
					</StyledContentBlock>
				</Container>
			</DefaultLayout>
		</>
	)
}

export default CategoriesPage
