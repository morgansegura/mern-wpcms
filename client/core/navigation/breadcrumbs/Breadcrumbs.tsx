import { FC } from 'react'

// [Interfaces]
import { IBreadcrumbs } from './Breadcrumbs.interfaces'
// [Styles]
import * as s from './Breadcrumbs.styled'

const Breadcrumbs: FC<IBreadcrumbs> = ({ children }) => {
	return <s.BreadcrumbsContainer>{children}</s.BreadcrumbsContainer>
}

export default Breadcrumbs
