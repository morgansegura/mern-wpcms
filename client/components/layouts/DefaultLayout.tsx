import React from 'react'
// [Core]
import { Container } from 'core/layouts'
// [Components]
import { Layout } from '@components/layouts'
// [Config]
import { DefaultLayoutProps } from '@config/interfaces'

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
	return (
		<>
			<Layout>
				<Container contain="xl">{children}</Container>
			</Layout>
		</>
	)
}

export default DefaultLayout
