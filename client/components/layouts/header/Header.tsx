import { FC } from 'react'
import Link from 'next/link'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import siteMetadata from '@helpers/siteMetadata'

// [Components]
import { Logo } from '@components/logo'
import { HeaderMenu } from '@components/layouts'
// [Interfaces]
import { IHeader } from './Header.interfaces'
// [Styles]
import * as s from './Header.styled'

Router.events.on('routeChangeStart', NProgress.start)
Router.events.on('routeChangeError', NProgress.done)
Router.events.on('routeChangeComplete', NProgress.done)

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
