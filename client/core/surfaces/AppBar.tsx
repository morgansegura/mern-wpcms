import React from 'react'
// [Core]
import { Container } from 'core/layouts'
// [config]
import { AppBarProps } from 'core/config/interfaces'
// [Styles]
import { StyledAppBar, StyledAppBarInner } from 'core/styles/surfaces'

const AppBar: React.FC<AppBarProps> = ({ children }) => {
	return (
		<StyledAppBar>
			<StyledAppBarInner>{children}</StyledAppBarInner>
		</StyledAppBar>
	)
}

export default AppBar
