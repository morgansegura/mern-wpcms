import React from 'react'
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
import { AuthIcon, PostsIcon } from '@components/icons'

const DrawerMenu: React.FC = () => {
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
				<StyledDrawerMenuTitle>
					<StyledDrawerMenuIcon>
						<AuthIcon />
					</StyledDrawerMenuIcon>
					Admin Settings
				</StyledDrawerMenuTitle>
			),
			key: 'posts-title',
		},
		{
			label: (
				<StyledDrawerMenuItem>
					<Link href="/">
						<a>Auth Link1</a>
					</Link>
				</StyledDrawerMenuItem>
			),
			key: 'link2',
		},
		{
			label: (
				<StyledDrawerMenuItem>
					<SignOut />
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
							<Menu mode="stacked" items={authItems} />
						</StyledDrawerMenu>
					</>
				)}
			</StyledDrawerMenuContainer>
		</>
	)
}

export default DrawerMenu
