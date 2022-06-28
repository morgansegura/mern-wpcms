import { FC } from 'react'
// [Core]
import { Container } from '@core/layout'
import { Typography } from '@core/data-display/typography'
import { Box } from '@core/layout/box'
// [Components]
import { Layout } from '@components/layouts'

const Home: FC = () => {
	return (
		<Layout>
			<Container contain="xl">
				<Box mt="3" m="16">
					<Typography as="h1" variant="h1">
						Home Page
					</Typography>
				</Box>
			</Container>
		</Layout>
	)
}

export default Home
