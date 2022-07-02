import { FC } from 'react'

// [Core]
import { Container } from '@core/layout'

// [Components]
import { AdminLayout } from '@components/layouts'
import { CreateCategoryForm } from '@components/forms'

const CategoriesPage: FC = () => {
	return (
		<>
			<AdminLayout>
				<Container contain="xxl">
					<Container contain="xl">
						<CreateCategoryForm />
					</Container>
				</Container>
			</AdminLayout>
		</>
	)
}

export default CategoriesPage
