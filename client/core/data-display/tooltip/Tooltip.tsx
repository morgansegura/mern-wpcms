import { FC } from 'react'

// [Interfaces]
import { ITooltip } from './Tooltip.interfaces'
// [Styles]
import * as s from './Tooltip.styled'

const Tooltip: FC<ITooltip> = ({ children }) => {
	return <s.TooltipContainer>{children}</s.TooltipContainer>
}

export default Tooltip
