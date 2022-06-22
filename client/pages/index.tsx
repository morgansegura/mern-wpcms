import React from 'react'
import { HomePageProps } from '@config/interfaces'
import { Menu } from '@components/layouts'

const Home: React.FC<HomePageProps> = () => {
	return (
		<div>
			<Menu />
			<h1>Home Page</h1>
		</div>
	)
}

export default Home
