import { FC } from 'react'
import Link from 'next/link'
// [Components]
import { Menu } from 'core/navigation'
// [Config]
import { LoadingPageProps } from '@config/interfaces'
// [Styles]
import { StyledLoadingScreen } from '@styles/components/layouts'

const LoadingScreen: FC<LoadingPageProps> = () => {
	return <StyledLoadingScreen>...Loading</StyledLoadingScreen>
}

export default LoadingScreen
