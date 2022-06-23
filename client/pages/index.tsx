import React from 'react'
// [Core]
import { Container } from 'core/layouts'
// [Components]
import { DefaultLayout } from '@components/layouts'

const Home: React.FC = () => {
	return (
		<DefaultLayout>
			<Container contain="xl">
				<h1>Home Page</h1>
			</Container>
		</DefaultLayout>
	)
}

export default Home
