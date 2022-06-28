import { FC, useEffect, useState } from 'react'
import { pathConfig as path } from 'api'
import { useAuth } from 'hooks'
// [Core]
import { Container } from 'core/layout'
// [Components]

import { CreateCategoryForm, Layout, StyledContentBlock } from '@components/layouts'
import { Typography } from 'core/data-display'

// [Styled]
import * as s from '@components/layouts/layout/Layout.styled'

const CategoriesPage: FC = () => {
	return (
		<>
			<Layout>
				<Container contain="xl">
					<s.Grid>
						<s.Col start={1} end={9}>
							<Typography as="h3" view="h4" children="Categories" />
							<Typography as="p" view="p" children="Add New Category" />
							<CreateCategoryForm />
						</s.Col>
						<s.Col start={9} end={13}>
							Other content
						</s.Col>
					</s.Grid>
				</Container>
			</Layout>
		</>
	)
}

export default CategoriesPage
