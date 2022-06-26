import { FC } from 'react'
import Link from 'next/link'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import { useAuth } from 'hooks'

// [Core]
import { DrawerTrigger, Menu } from 'core/navigation'
import { IconHamburger } from 'core/data-display'
// [Components]
import { Logo } from '@components/logo'
import siteMetadata from '@helpers/siteMetadata'
import { ToggleColorMode } from '@components/providers/ThemesProvider'
// [Interfaces]
import { IHeader } from './Header.interfaces'
// [Styles]
import * as s from './Header.styled'

Router.events.on('routeChangeStart', NProgress.start)
Router.events.on('routeChangeError', NProgress.done)
Router.events.on('routeChangeComplete', NProgress.done)

const HeaderMenu: FC = () => {
	const { hasAuth } = useAuth()

	const unauthItems = [
		{
			label: (
				<s.HeaderMenuItem>
					<Link href="/signin">
						<a>Signin</a>
					</Link>
				</s.HeaderMenuItem>
			),
			key: 'signin',
		},
		{
			label: (
				<s.HeaderMenuItem>
					<Link href="/signup">
						<a>Signup</a>
					</Link>
				</s.HeaderMenuItem>
			),
			key: 'signup',
		},
		{
			label: (
				<s.HeaderMenuItem>
					<s.HeaderSVG>
						<ToggleColorMode theme="light" />
					</s.HeaderSVG>
				</s.HeaderMenuItem>
			),
			key: 'open-drawer',
		},
	]
	const authItems = [
		{
			label: (
				<s.HeaderMenuItem>
					<s.HeaderSVG>
						<ToggleColorMode theme="light" />
					</s.HeaderSVG>
				</s.HeaderMenuItem>
			),
			key: 'open-drawer',
		},
		{
			label: (
				<s.HeaderMenuItem>
					<s.HeaderSVG>
						<DrawerTrigger>
							<IconHamburger />
						</DrawerTrigger>
					</s.HeaderSVG>
				</s.HeaderMenuItem>
			),
			key: 'toggle-color',
		},
	]

	return <>{!hasAuth ? <Menu items={unauthItems} /> : <Menu items={authItems} />}</>
}

const Header: FC<IHeader> = () => {
	return (
		<s.Header>
			<s.HeaderContainer>
				<s.LogoBlock>
					<Link href="/">
						<a data-title={siteMetadata.companyName}>
							<Logo />
						</a>
					</Link>
				</s.LogoBlock>
				<HeaderMenu />
			</s.HeaderContainer>
		</s.Header>
	)
}

export default Header
