import React from 'react'
// [Components]
import { Menu } from '@components/layouts'
// [Config]
import { HomePageProps } from '@config/interfaces'
// [Styles]
import { StyledContainer } from 'core/styles'

const HomePageLayout: React.FC<HomePageProps> = ({ children }) => {
	return (
		<StyledContainer contain="xxl">
			<StyledContainer contain="xl">
				<Menu />
				{children}
			</StyledContainer>
		</StyledContainer>
	)
}

export default HomePageLayout
