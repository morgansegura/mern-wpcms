import styled from 'styled-components'
import * as style from 'styles/config/utilities'
// [Config]
import { IContainer } from './Container.interfaces'

export const Container = styled.div<IContainer>`
	${(props: IContainer) => props.contain === 'xs' && style.container.xs}
	${(props: IContainer) => props.contain === 'sm' && style.container.sm}
	${(props: IContainer) => props.contain === 'md' && style.container.md}
	${(props: IContainer) => props.contain === 'lg' && style.container.lg}
	${(props: IContainer) => props.contain === 'xl' && style.container.xl}
	${(props: IContainer) => props.contain === 'xxl' && style.container.xxl}
	${(props: IContainer) => props.contain === 'full' && `width: 100%`}
`
