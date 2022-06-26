import { FC } from 'react'

// [Interfaces]
import { ISpeedDial } from './SpeedDial.interfaces'
// [Styles]
import * as s from './SpeedDialstyled'

const SpeedDial: FC<ISpeedDial> = ({ children }) => {
	return <s.SpeedDialContainer>{children}</s.SpeedDialContainer>
}

export default SpeedDial
