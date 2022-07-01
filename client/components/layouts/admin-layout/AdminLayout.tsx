import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from 'hooks'
import { authService } from 'api'
// [Core]
import { Drawer, DrawerProvider } from '@core/navigation'

// [Components]
import { Header, Footer } from '@components/layouts'
import { IconChevronDown, IconClose, IconThumbTack } from '@components/icons'
import { DrawerMenu } from '@components/menus'
// [Interfaces]
import { IAdminLayout } from './AdminLayout.interfaces'
// [Styles]
import * as ac from 'core/surfaces/accordion/Accordion.styled'
import * as s from '@components/layouts/layout/Layout.styled'

const AdminLayout: FC<IAdminLayout> = ({ children, role }) => {
	const { roleBasedRedirect, hasAdminAccess, authRedirect } = useAuth()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (hasAdminAccess()) {
			getCurrentAdmin()
		} else {
			roleBasedRedirect()
		}
	}, [])

	const getCurrentAdmin = async () => {
		await authService
			.getCurrentAdmin()
			.then(res => {
				if (res.error) {
					authRedirect('/')
				}
			})
			.catch(err => {
				console.log('Error:', err.statusText)
				roleBasedRedirect()
			})
			.then(() => {
				setLoading(false)
			})
	}

	if (loading) {
		return <>Loading...</>
	}

	const authMenu = [
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
					direction="bottom"
					content={
						<s.LayoutContainer>
							<Header />
							<main>{children}</main>
							<Footer />
						</s.LayoutContainer>
					}
					menu={<DrawerMenu items={authMenu} />}
					closeIcon={<IconClose />}
				></Drawer>
			</DrawerProvider>
		</s.Layout>
	)
}

export default AdminLayout
