import { FC } from 'react'
import Link from 'next/link'
import { useAuth } from 'hooks'
// [Core]
import { Drawer, DrawerProvider, Menu } from 'core/navigation'
// [Components]
import { Header, Footer } from '@components/layouts'
// [Interfaces]
import { ILayout } from './Layout.interfaces'
// [Styles]
import * as s from './Layout.styled'
import { IconAdmin, IconThumbTack } from 'core/data-display'

const DrawerMenu: FC = () => {
	const { hasAuth } = useAuth()

	const unauthItems = [
		{
			label: <s.StyledDrawerMenuTitle>authLinks</s.StyledDrawerMenuTitle>,
			key: 'title',
		},
		{
			label: (
				<s.StyledDrawerMenuItem>
					<Link href="/">
						<a>Auth Link1</a>
					</Link>
				</s.StyledDrawerMenuItem>
			),
			key: 'link1',
		},
	]
	const authItems = [
		{
			label: (
				<s.StyledDrawerMenuTitle>
					<s.StyledDrawerMenuIcon>
						<IconThumbTack />
					</s.StyledDrawerMenuIcon>
					Posts
				</s.StyledDrawerMenuTitle>
			),
			key: 'posts-title',
		},
		{
			label: (
				<s.StyledDrawerMenuItem>
					<Link href="/admin/posts">
						<a>Posts</a>
					</Link>
				</s.StyledDrawerMenuItem>
			),
			key: 'Posts',
		},
		{
			label: (
				<s.StyledDrawerMenuTitle>
					<s.StyledDrawerMenuIcon>
						<IconAdmin />
					</s.StyledDrawerMenuIcon>
					Admin Settings
				</s.StyledDrawerMenuTitle>
			),
			key: 'admin-title',
		},
		{
			label: (
				<s.StyledDrawerMenuItem>
					<Link href="/">
						<a>Signout</a>
					</Link>
				</s.StyledDrawerMenuItem>
			),
			key: 'signout',
		},
	]

	return (
		<>
			<s.StyledDrawerMenuContainer>
				{!hasAuth ? (
					<>
						<s.StyledDrawerMenu>
							<Menu mode="stacked" items={unauthItems} />
						</s.StyledDrawerMenu>
					</>
				) : (
					<>
						<s.StyledDrawerMenu>
							<Menu mode="stacked-accordion" items={authItems} />
						</s.StyledDrawerMenu>
					</>
				)}
			</s.StyledDrawerMenuContainer>
		</>
	)
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<>
			<DrawerProvider>
				<Drawer
					content={
						<s.Layout>
							<Header />
							<main>{children}</main>
							<Footer />
						</s.Layout>
					}
					menu={<DrawerMenu />}
				></Drawer>
			</DrawerProvider>
		</>
	)
}

export default Layout
