import React, { useContext } from 'react'

// [Core]
import { Drawer, DrawerProvider } from 'core/navigation'
// [Components]
import { AuthContext } from '@components/providers'
import { Header, Footer, DrawerMenu } from '@components/layouts'
// [Config]
import { LayoutProps } from '@config/interfaces'
// [Styles]
import { StyledLayout } from '@styles/components/layouts'

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [auth, setAuth] = useContext(AuthContext)

	return (
		<>
			<DrawerProvider>
				<Drawer
					content={
						<StyledLayout>
							<Header />
							<main>{children}</main>
							<Footer />
						</StyledLayout>
					}
					menu={<DrawerMenu />}
				></Drawer>
			</DrawerProvider>
		</>
	)
}

export default Layout
