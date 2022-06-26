import { FC } from 'react'
import Link from 'next/link'
// [Hooks]
import { useAuth } from 'hooks'
// [Core]
import { Menu } from 'core/navigation'
// [Components]
import { SignOut } from '@components/inputs'
// [Styles]
import {
	StyledDrawerMenu,
	StyledDrawerMenuContainer,
	StyledDrawerMenuItem,
	StyledDrawerMenuTitle,
	StyledDrawerMenuIcon,
} from '@styles/components/layouts'
// [Icons]
import { AuthIcon, PostsIcon } from '@components/data-display/icons'

const DrawerMenu: FC = () => {
	const { hasAuth } = useAuth()

	const unauthItems = [
		{
			label: <StyledDrawerMenuTitle>authLinks</StyledDrawerMenuTitle>,
			key: 'title',
		},
		{
			label: (
				<StyledDrawerMenuItem>
					<Link href="/">
						<a>Auth Link1</a>
					</Link>
				</StyledDrawerMenuItem>
			),
			key: 'link1',
		},
	]
	const authItems = [
		{
			label: (
				<StyledDrawerMenuTitle>
					<StyledDrawerMenuIcon>
						<PostsIcon />
					</StyledDrawerMenuIcon>
					Posts
				</StyledDrawerMenuTitle>
			),
			key: 'posts-title',
		},
		{
			label: (
				<StyledDrawerMenuItem>
					<Link href="/admin/posts">
						<a>Posts</a>
					</Link>
				</StyledDrawerMenuItem>
			),
			key: 'Posts',
		},
		{
			label: (
				<StyledDrawerMenuTitle>
					<StyledDrawerMenuIcon>
						<AuthIcon />
					</StyledDrawerMenuIcon>
					Admin Settings
				</StyledDrawerMenuTitle>
			),
			key: 'admin-title',
		},
		{
			label: (
				<StyledDrawerMenuItem>
					<Link href="/">
						<a>Signout</a>
					</Link>
				</StyledDrawerMenuItem>
			),
			key: 'signout',
		},
	]

	return (
		<>
			<StyledDrawerMenuContainer>
				{!hasAuth ? (
					<>
						<StyledDrawerMenu>
							<Menu mode="stacked" items={unauthItems} />
						</StyledDrawerMenu>
					</>
				) : (
					<>
						<StyledDrawerMenu>
							<Menu mode="stacked-accordion" items={authItems} />
						</StyledDrawerMenu>
					</>
				)}
			</StyledDrawerMenuContainer>
		</>
	)
}

export default DrawerMenu
