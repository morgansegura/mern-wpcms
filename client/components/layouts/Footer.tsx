import React from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'

// [Data]
import { siteMetadata } from 'helpers'
// [Components]
import { Menu } from '@components/layouts'
import { Logo } from '@components/icons'
// [Config]
import { HeaderProps } from '@config/interfaces'
// [Styles]
import { StyledFooter, StyledFooterContainer } from '@styles/components/layouts'

// Router.events.on('routeChangeStart', NProgress.start)
// Router.events.on('routeChangeError', NProgress.done)
// Router.events.on('routeChangeComplete', NProgress.done)

const Footer: React.FC<HeaderProps> = () => {
	return (
		<StyledFooter>
			<StyledFooterContainer>
				<Menu />
			</StyledFooterContainer>
		</StyledFooter>
	)
}

export default Footer
