import React, { useContext } from 'react'
// [Core]
import { Drawer } from 'core/navigation'
// [Components]
import { Header, Footer } from '@components/layouts'
// [Config]
import { LayoutProps } from '@config/interfaces'
// [Styles]
import { StyledLayout } from '@styles/components/layouts'
import { AuthContext } from '@components/providers'

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [auth, setAuth] = useContext(AuthContext)

	return (
		<>
			<StyledLayout>
				<Header />
				<main>{children}</main>
				<Footer />
			</StyledLayout>
			<Drawer>A Menu will go here</Drawer>
		</>
	)
}

export default Layout
