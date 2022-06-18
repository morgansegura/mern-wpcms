import { css } from 'styled-components'
import { normalize } from '@styles/config/normalize'
// import { reset } from '@styles/config/reset'
import { root } from '@styles/config/root'
import { setup } from '@styles/config/setup'
import { nprogress } from '@styles/vendors/nprogress'
// import 'antd/dist/antd.css'

export const GlobalStyle = css`
	${normalize};
	${setup};
	${root};
	${nprogress};
`
