import { FC } from 'react'

// [Interfaces]
import { IBackdrop } from './Backdrop.interfaces'
// [Styles]
import * as s from './Backdrop.styled'

const Backdrop: FC<IBackdrop> = ({ children, close, open, onClick }) => {
	return (
		<s.Backdrop onClick={onClick} open={open} close={close}>
			{children}
		</s.Backdrop>
	)
}

export default Backdrop
