import { FC } from 'react'
// [Core]
import { Container } from 'core/layout'
// [Components]
import { Layout } from '@components/layouts'
// [Config]
import { DefaultLayoutProps } from '@config/interfaces'

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
	return (
		<>
			<Layout>
				<Container contain="xl">{children}</Container>
			</Layout>
		</>
	)
}

export default DefaultLayout
