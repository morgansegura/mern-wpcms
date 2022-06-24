import React from 'react'
import Link from 'next/link'
// [Components]
import { Menu } from 'core/navigation'
// [Config]
import { FooterProps } from '@config/interfaces'
// [Styles]
import { StyledFooter, StyledFooterContainer, StyledMenuItem } from '@styles/components/layouts'

const Footer: React.FC<FooterProps> = () => {
	const items = [
		{
			label: (
				<Link href="/">
					<a>Home</a>
				</Link>
			),
			key: 'home',
		},
	]
	return (
		<StyledFooter>
			<StyledFooterContainer>{/* <Menu items={items} /> */}</StyledFooterContainer>
		</StyledFooter>
	)
}

export default Footer
