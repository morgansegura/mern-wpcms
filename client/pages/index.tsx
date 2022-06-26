import { FC } from 'react'
// [Core]
import { Container } from 'core/layout'
// [Components]
import { Layout } from '@components/layouts'

import {
	StyledContentBlock,
	StyledCopy,
	StyledCopyBold,
	StyledCopyLarge,
	StyledCopySmall,
	StyledCopySmallBold,
	StyledH1,
	StyledH2,
	StyledH3,
	StyledH4,
	StyledH5,
	StyledH6,
} from '@components/layouts'

const Home: FC = () => {
	return (
		<Layout>
			<Container contain="xl">
				<StyledContentBlock>
					<StyledH1>Home Page</StyledH1>
					<StyledCopy>Home Page</StyledCopy>
				</StyledContentBlock>
				<StyledContentBlock>
					<StyledH2>Second Block </StyledH2>
					<StyledCopy>Home Page</StyledCopy>
				</StyledContentBlock>
			</Container>
		</Layout>
	)
}

export default Home
