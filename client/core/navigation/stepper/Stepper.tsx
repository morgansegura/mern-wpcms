import { FC } from 'react'

// [Interfaces]
import { IStepper } from './Stepper.interfaces'
// [Styles]
import * as s from './Stepper.styled'

const Stepper: FC<IStepper> = ({ children }) => {
	return <s.StepperContainer>{children}</s.StepperContainer>
}

export default Stepper
