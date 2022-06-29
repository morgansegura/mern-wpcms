import { FC, useEffect, useState } from 'react'
import { pathConfig as path } from 'api'
import { useAuth } from 'hooks'
// [Core]
import { Box, Col, Container, Grid } from '@core/layout'
import { Typography } from '@core/data-display'
// [Components]
import { Layout } from '@components/layouts'
import { CreateCategoryForm, GetCategories } from '@components/forms'

const CategoriesPage: FC = () => {
	return (
		<>
			<Layout>
				<Container contain="xl">
					<Grid>
						<Col start={'1'} end={'9'}>
							<Box pt="1">
								<Typography as="h3" variant="h4" children="Categories" />
							</Box>
							<Box mt="0.5">
								<Typography as="p" variant="p" children="Add New Category" />
							</Box>
							<Box mb={[{ sm: '3' }, { md: '2' }]} pt={[{ sm: '12' }]}>
								<CreateCategoryForm />
							</Box>
						</Col>
						<Col start={'9'} end={'13'}>
							<Box m-md="8" mt-xl="3" mb="1">
								<Typography as="h4" variant="h4">
									Your Categories
								</Typography>
							</Box>
							<Box ml-xl="1">
								<GetCategories />
							</Box>
						</Col>
					</Grid>
				</Container>
			</Layout>
		</>
	)
}

export default CategoriesPage
