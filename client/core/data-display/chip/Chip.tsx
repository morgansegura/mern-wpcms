import { FC } from 'react'

// [Interfaces]
import { IChip } from './Chip.interfaces'
// [Styles]
import * as s from './Chip.styled'

const Chip: FC<IChip> = ({ children }) => {
	return <s.ChipContainer>{children}</s.ChipContainer>
}

export default Chip
