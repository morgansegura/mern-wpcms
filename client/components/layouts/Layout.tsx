import React, { useContext } from 'react'
import Link from 'next/link'
// [Core]
import { Drawer, DrawerFrame, DrawerProvider } from 'core/navigation'
// [Components]
import { AuthContext } from '@components/providers'
import { Header, Footer } from '@components/layouts'
// [Config]
import { LayoutProps } from '@config/interfaces'
// [Styles]
import { StyledLayout } from '@styles/components/layouts'
import {
	StyledDrawerMenu,
	StyledDrawerMenuContainer,
	StyledDrawerMenuItem,
	StyledDrawerTitle,
} from 'core/styles/navigation'

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [auth, setAuth] = useContext(AuthContext)

	return (
		<>
			<DrawerProvider>
				<DrawerFrame>
					<StyledLayout>
						<Header />
						<main>{children}</main>
						<Footer />
					</StyledLayout>
				</DrawerFrame>
				<Drawer>
					<StyledDrawerMenuContainer>
						<StyledDrawerMenu>
							<StyledDrawerTitle>Title</StyledDrawerTitle>
							<StyledDrawerMenuItem>
								<Link href="/">
									<a>Link1</a>
								</Link>
							</StyledDrawerMenuItem>
							<StyledDrawerMenuItem>
								<Link href="/">
									<a>Link2</a>
								</Link>
							</StyledDrawerMenuItem>
							<StyledDrawerMenuItem>
								<Link href="/">
									<a>Link3</a>
								</Link>
							</StyledDrawerMenuItem>
						</StyledDrawerMenu>
						<StyledDrawerMenu>
							<StyledDrawerTitle>Title</StyledDrawerTitle>
							<StyledDrawerMenuItem>
								<Link href="/">
									<a>Link4</a>
								</Link>
							</StyledDrawerMenuItem>
							<StyledDrawerMenuItem>
								<Link href="/">
									<a>Link5</a>
								</Link>
							</StyledDrawerMenuItem>
							<StyledDrawerMenuItem>
								<Link href="/">
									<a>Link6</a>
								</Link>
							</StyledDrawerMenuItem>
						</StyledDrawerMenu>
					</StyledDrawerMenuContainer>
				</Drawer>
			</DrawerProvider>
		</>
	)
}

export default Layout
