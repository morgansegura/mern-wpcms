import { FC } from 'react'

// [Interfaces]
import { ISlider } from './Slider.interfaces'
// [Styles]
import * as s from './Slider.styled'

const Slider: FC<ISlider> = ({ children }) => {
	return <s.SliderContainer>{children}</s.SliderContainer>
}

export default Slider
