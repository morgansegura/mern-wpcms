import { FC, useContext, useEffect } from 'react'
import { AdminLayout, StyledContentBlock } from '@components/layouts'
import { Container } from 'core/layout'

import { Typography } from 'core/data-display'

const AdminPage: FC = () => {
	return (
		<>
			<AdminLayout>
				<Container contain="xl">
					<StyledContentBlock>
						<Typography as="h6" variant="h1">
							This is an H1
						</Typography>
						<Typography as="h2" variant="h2">
							This is an H2
						</Typography>
						<Typography variant="h3">This is an H3</Typography>
						<Typography variant="h4">This is an H4</Typography>
						<Typography variant="h5">This is an H5</Typography>
						<Typography variant="h6">This is an H6</Typography>
						<Typography variant="p">This is an p</Typography>
					</StyledContentBlock>
				</Container>
			</AdminLayout>
		</>
	)
}

export default AdminPage
