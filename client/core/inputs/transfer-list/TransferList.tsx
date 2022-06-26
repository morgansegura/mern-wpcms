import { FC } from 'react'

// [Interfaces]
import { ITransferList } from './TransferList.interfaces'
// [Styles]
import * as s from './TransferList.styled'

const TransferList: FC<ITransferList> = ({ children }) => {
	return <s.TransferListContainer>{children}</s.TransferListContainer>
}

export default TransferList
