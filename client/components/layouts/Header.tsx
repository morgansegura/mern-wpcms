import React from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
// import NProgress from 'nprogress'

// [Data]
import { siteMetadata } from 'helpers'
// [Core]
import { Container } from 'core/layouts'
// [Components]
import { Menu } from '@components/layouts'
import { Logo } from '@components/icons'
// [Config]
import { HeaderProps } from '@config/interfaces'
// [Styles]
import {
	StyledLogoBlock,
	StyledHeader,
	StyledHeaderContainer,
} from '@styles/components/layouts/StyledHeader'

// Router.events.on('routeChangeStart', NProgress.start)
// Router.events.on('routeChangeError', NProgress.done)
// Router.events.on('routeChangeComplete', NProgress.done)

const Header: React.FC<HeaderProps> = () => {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<StyledLogoBlock>
					<Link href="/">
						<a data-title={siteMetadata.companyName}>
							<Logo />
						</a>
					</Link>
				</StyledLogoBlock>
				<Menu />
			</StyledHeaderContainer>
		</StyledHeader>
	)
}

export default Header
