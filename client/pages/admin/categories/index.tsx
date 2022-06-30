import { FC, useEffect, useState } from 'react'

// [Core]
import { Container } from '@core/layout'
import { Typography } from '@core/data-display'
// [Components]
import { AdminLayout } from '@components/layouts'
import { CreateCategorCategoriesLayout } from '@components/forms'

const CategoriesPage: FC = () => {
	return (
		<>
			<AdminLayout>
				<Container contain="xxl">
					<Container contain="xl">
						<CreateCategorCategoriesLayout />
					</Container>
				</Container>
			</AdminLayout>
		</>
	)
}

export default CategoriesPage
