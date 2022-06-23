import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'
import { math, rem } from 'polished'
// [Config]
import { ContainerProps } from 'core/config/interfaces'

export const StyledContainer = styled.div<ContainerProps>`
	${(props: ContainerProps) => props.contain === 'xs' && style.container.xs}
	${(props: ContainerProps) => props.contain === 'sm' && style.container.sm}
	${(props: ContainerProps) => props.contain === 'md' && style.container.md}
	${(props: ContainerProps) => props.contain === 'lg' && style.container.lg}
	${(props: ContainerProps) => props.contain === 'xl' && style.container.xl}
	${(props: ContainerProps) => props.contain === 'xxl' && style.container.xxl}
	${(props: ContainerProps) => props.contain === 'full' && `width: 100%`}
`
