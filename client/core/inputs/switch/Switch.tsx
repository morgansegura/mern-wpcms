import { FC } from 'react'

// [Interfaces]
import { ISwitch } from './Switch.interfaces'
// [Styles]
import * as s from './Switch.styled'

const Switch: FC<ISwitch> = ({ children }) => {
	return <s.SwitchContainer>{children}</s.SwitchContainer>
}

export default Switch
