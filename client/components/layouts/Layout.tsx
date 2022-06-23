import React from 'react'
// [Core]
import { Container } from 'core/layouts'
// [Components]
import { Header, Footer } from '@components/layouts'
// [Config]
import { LayoutProps } from '@config/interfaces'
// [Styles]
import { StyledLayout } from '@styles/components/layouts'

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<StyledLayout>
				<Header />
				<main>{children}</main>
				<Footer />
			</StyledLayout>
		</>
	)
}

export default Layout
