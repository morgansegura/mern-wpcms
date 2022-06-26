import { FC } from 'react'

// [Interfaces]
import { IImageList } from './ImageList.interfaces'
// [Styles]
import * as s from './ImageList.styled'

const ImageList: FC<IImageList> = ({ children, contain }) => {
	return <s.ImageList contain={contain}>{children}</s.ImageList>
}

export default ImageList
