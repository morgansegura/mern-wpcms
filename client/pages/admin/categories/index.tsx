import { FC, useEffect, useState } from 'react'
import { pathConfig as path } from 'api'
import { useAuth } from 'hooks'
// [Core]
import { Container } from 'core/layout'
// [Components]
import { Layout } from '@components/layouts/layout'

// [Styled]
import { StyledContentBlock, StyledH2 } from '@components/layouts/layout/Layout.styled'

const CategoriesPage: FC = () => {
	return (
		<>
			<Layout>
				<Container contain="xl">
					<StyledContentBlock>
						<StyledH2>Categories Page</StyledH2>
					</StyledContentBlock>
				</Container>
			</Layout>
		</>
	)
}

export default CategoriesPage
