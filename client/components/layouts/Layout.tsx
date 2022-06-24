import React from 'react'

// [Core]
import { Drawer, DrawerProvider } from 'core/navigation'
// [Components]
import { Header, Footer, DrawerMenu } from '@components/layouts'
// [Config]
import { LayoutProps } from '@config/interfaces'
// [Styles]
import { StyledLayout } from '@styles/components/layouts'

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
