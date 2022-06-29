import { FC, useEffect, useState } from 'react'

// [Core]
import { Container } from '@core/layout'
import { Typography } from '@core/data-display'
// [Components]
import { Layout } from '@components/layouts'
import { CreateCategorCategoriesLayout } from '@components/forms'

const CategoriesPage: FC = () => {
	return (
		<>
			<Layout>
				<Container contain="xxl">
					<Container contain="xl">
						<CreateCategorCategoriesLayout />
					</Container>
				</Container>
			</Layout>
		</>
	)
}

export default CategoriesPage
