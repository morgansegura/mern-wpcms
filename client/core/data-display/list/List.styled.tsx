import styled, { css } from 'styled-components'
import * as style from '@styles/config/utilities'

import { IList, IListItem, IListItemAvatar, IListItemText } from './List.interfaces'

export const List = styled.div<IList>``

export const ListItem = styled.div<IListItem>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: ${style.sp['1']};
	padding-bottom: ${style.sp['1']};

	a {
		color: inherit;
	}
`

export const ListItemText = styled.div<IListItemText>`
	flex: 1 0 auto;
	justify-self: center;

	${props =>
		props.primary &&
		css`
			${style.body.base};
		`}
	${props =>
		props.secondary &&
		css`
			${style.body.base};
		`}
`

export const ListItemTextPrimary = styled.p`
	${style.body.base};
`

export const ListItemTextSecondary = styled.p`
	${style.body.base};
`

export const ListItemIcons = styled.div<IListItemAvatar>`
	display: flex;
	gap: 10px;
	align-items: center;
	svg {
	}
`
export const ListItemIcon = styled.div<IListItemAvatar>`
	display: flex;
	cursor: pointer;
	svg {
	}
`

export const ListItemAvatar = styled.div<IListItemAvatar>``
