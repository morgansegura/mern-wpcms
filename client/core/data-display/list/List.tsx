import { FC } from 'react'

// [Interfaces]
import { IList, IListItem, IListItemAvatar, IListItemText } from './List.interfaces'
// [Styles]
import * as s from './List.styled'

export const ListItem: FC<IListItem> = ({ children }) => {
	return <s.ListItem>{children}</s.ListItem>
}

export const ListItemAvatar: FC<IListItemAvatar> = ({ children }) => {
	return <s.ListItemAvatar>{children}</s.ListItemAvatar>
}

export const ListItemText: FC<IListItemText> = ({ primary, secondary }) => {
	return (
		<s.ListItemText>
			<s.ListItemTextPrimary>{primary}</s.ListItemTextPrimary>
			<s.ListItemTextSecondary>{secondary}</s.ListItemTextSecondary>
		</s.ListItemText>
	)
}

const List: FC<IList> = ({ children }) => {
	return <s.List>{children}</s.List>
}

export default List
