import styled, { css } from 'styled-components'
import * as style from 'styles/config/utilities'
import { math, rem } from 'polished'
// [Config]
import { ContainerProps } from '@config/interfaces'

export const StyledContainer = styled.div<ContainerProps>`
	${(props: ContainerProps) =>
		props.contain === 'xs' &&
		css`
			margin-right: auto;
			margin-left: auto;
			max-width: ${style.contain.xs};
		`}
	${(props: ContainerProps) =>
		props.contain === 'sm' &&
		css`
			margin-right: auto;
			margin-left: auto;
			max-width: ${style.contain.sm};
		`}
    ${(props: ContainerProps) =>
		props.contain === 'md' &&
		css`
			margin-right: auto;
			margin-left: auto;
			max-width: ${style.contain.md};
		`}
    ${(props: ContainerProps) =>
		props.contain === 'lg' &&
		`
        margin-right: auto;
        margin-left: auto;
        max-width: ${style.contain.lg};
    `};

	${(props: ContainerProps) =>
		props.contain === 'xl' &&
		css`
			max-width: ${rem(style.contain.xl)};
			margin-right: ${rem(style.sp['2'])};
			margin-left: ${rem(style.sp['2'])};

			${style.media.md`
                margin-right: ${rem(style.sp['5'])};
                margin-left: ${rem(style.sp['5'])};
            `}

			${style.media.xl`
                margin-right: ${rem(style.sp['14'])};
                margin-left: ${rem(style.sp['14'])};
            `}

            ${style.media.xxl`
                margin-right: ${rem(style.sp['20'])};
                margin-left: ${rem(style.sp['20'])};
                background: red;
            `}

            ${style.above(style.contain.offset)`
                max-width: ${math(`${rem(style.contain.xxl)} - ${rem(style.sp['40'])}`)};
                margin-right: auto;
                margin-left: auto;
            `}
		`}

	${(props: ContainerProps) =>
		props.contain === 'xxl' &&
		css`
			max-width: ${rem(style.contain.xl)};
			margin-right: ${rem(style.sp['1'])};
			margin-left: ${rem(style.sp['1'])};

			${style.media.md`
                margin-right: ${rem(style.sp['3'])};
                margin-left: ${rem(style.sp['3'])};
            `}

			${style.media.lg`
                margin-right: ${style.sp['6']};
                margin-left: ${style.sp['6']};
            `}

            ${style.media.xl`
                margin-right: ${rem(style.sp['8'])};
                margin-left: ${rem(style.sp['8'])};
            `}

            ${style.above(style.contain.offset)`
                margin-right: auto;
                margin-left: auto;
            `}

            ${style.above(style.contain.xxl)`
                max-width: ${style.contain.xxl};
                margin-right: ${rem(style.sp['1'])};
                margin-left: ${rem(style.sp['1'])};
            `}
		`}
`
