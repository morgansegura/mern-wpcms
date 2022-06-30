import { FC, useEffect, useState } from 'react'
import { useAuth } from 'hooks'
// [Core]
import { DrawerProvider, Drawer } from '@core/navigation/drawer'
// [Components]
import { Header, Footer } from '@components/layouts'
import { DrawerMenu } from '@components/menus'
import { IconChevronDown, IconClose, IconThumbTack } from '@components/icons'
// [Interfaces]
import { ILayout } from './Layout.interfaces'
// [Styles]
import * as ac from 'core/surfaces/accordion/Accordion.styled'
import * as s from './Layout.styled'
import Link from 'next/link'

const Layout: FC<ILayout> = ({ children }) => {
	const [loading, setLoading] = useState(true)

	const unauthMenu = [
		{
			key: 'posts',
			tab: {
				title: 'Posts',
				titleIcon: <IconThumbTack />,
				actionIcon: <IconChevronDown />,
			},

			content: [
				{
					key: 'posts-all',
					data: (
						<ac.AccordionTabContentMenuLink>
							<Link href="/admin/posts">
								<a>All Posts</a>
							</Link>
						</ac.AccordionTabContentMenuLink>
					),
				},
				{
					key: 'posts-new',
					data: (
						<ac.AccordionTabContentMenuLink>
							<Link href="/admin/posts/new">
								<a>Add New</a>
							</Link>
						</ac.AccordionTabContentMenuLink>
					),
				},
				{
					key: 'categories',
					data: (
						<>
							<ac.AccordionTabContentMenuLink>
								<Link href="/admin/categories">
									<a>Categories</a>
								</Link>
							</ac.AccordionTabContentMenuLink>
						</>
					),
				},
			],
		},
		{
			key: 'media',
			tab: {
				title: 'Media',
				titleIcon: <IconThumbTack />,
				actionIcon: <IconChevronDown />,
			},

			content: [
				{
					key: 'media-all',
					data: (
						<ac.AccordionTabContentMenuLink>
							<Link href="/admin/media">
								<a>Library</a>
							</Link>
						</ac.AccordionTabContentMenuLink>
					),
				},
				{
					key: 'media-new',
					data: (
						<ac.AccordionTabContentMenuLink>
							<Link href="/admin/media/new">
								<a>Add New</a>
							</Link>
						</ac.AccordionTabContentMenuLink>
					),
				},
			],
		},
		{
			key: 'comments',
			tab: {
				content: (
					<>
						<ac.AccordionTabContainer>
							<ac.AccordionTabTitleIcon>
								<IconThumbTack />
							</ac.AccordionTabTitleIcon>
							<ac.AccordionTabTitle>
								<Link href="/admin/comments">
									<a>Comments</a>
								</Link>
							</ac.AccordionTabTitle>
						</ac.AccordionTabContainer>
					</>
				),
			},
		},
		{
			key: 'users',
			tab: {
				title: 'Users',
				titleIcon: <IconThumbTack />,
				actionIcon: <IconChevronDown />,
			},
			content: [
				{
					key: 'users-all',
					data: (
						<ac.AccordionTabContentMenuLink>
							<Link href="/admin/users">
								<a>All Users</a>
							</Link>
						</ac.AccordionTabContentMenuLink>
					),
				},
				{
					key: 'users-new',
					data: (
						<ac.AccordionTabContentMenuLink>
							<Link href="/admin/users/new">
								<a>Add New</a>
							</Link>
						</ac.AccordionTabContentMenuLink>
					),
				},
			],
		},
	]

	return (
		<s.Layout>
			<DrawerProvider>
				<Drawer
					direction="left"
					content={
						<s.LayoutContainer>
							<Header />
							<main>{children}</main>
							<Footer />
						</s.LayoutContainer>
					}
					menu={<DrawerMenu items={unauthMenu} />}
					closeIcon={<IconClose />}
				></Drawer>
			</DrawerProvider>
		</s.Layout>
	)
}

export default Layout
