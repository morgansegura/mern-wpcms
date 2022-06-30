import { FC } from 'react'

// [Interfaces]
import { IBox } from './Box.interfaces'
// [Styles]
import * as s from './Box.styled'

const Box: FC<IBox> = ({
	children,
	as = 'div',
	m,
	my,
	mx,
	mt,
	mr,
	mb,
	ml,
	p,
	py,
	px,
	pt,
	pr,
	pb,
	pl,
	flex,
	row,
	column,
	align,
	justify,
}) => {
	return (
		<s.Box
			as={as}
			m={m}
			my={my}
			mx={mx}
			mt={mt}
			mr={mr}
			mb={mb}
			ml={ml}
			p={p}
			py={py}
			px={px}
			pt={pt}
			pr={pr}
			pb={pb}
			pl={pl}
			flex={flex}
			row={row}
			column={column}
			align={align}
			justify={justify}
		>
			{children}
		</s.Box>
	)
}

export default Box
