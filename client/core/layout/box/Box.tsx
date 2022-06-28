import { FC } from 'react'

// [Interfaces]
import { IBox } from './Box.interfaces'
// [Styles]
import * as s from './Box.styled'

/*
	- padding (T, R, B, L)
	- margin (T, R, B, L)
		- mt, mr, mb, ml

 */

const Box: FC<IBox> = ({ children, as = 'div', m = '', mt = '', p = 'unset' }) => {
	return (
		<s.Box as={as} m={m} mt={mt} p={p}>
			{children}
		</s.Box>
	)
}

export default Box
