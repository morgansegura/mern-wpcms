import { createContext, FC, useContext, useEffect, useRef, useState } from 'react'

import { Backdrop } from 'core/feedback'
import { LongArrowLeft } from 'core/data-display'
// [Interfaces]
import { IDrawer, IDrawerTrigger, IDrawerProvider } from './Drawer.interfaces'
// [Styles]
import * as s from './Drawer.styled'

export const ActiveDrawerContext = createContext<any | null>(null)

export const DrawerProvider: FC<IDrawerProvider> = ({ children }) => {
	const [toggle, setToggle] = useState({
		open: false,
		close: true,
	})
	return (
		<ActiveDrawerContext.Provider value={[toggle, setToggle]}>
			{children}
		</ActiveDrawerContext.Provider>
	)
}

export const DrawerTrigger: FC<IDrawerTrigger> = ({ children }) => {
	const triggerRef = useRef<HTMLDivElement>(null)
	const [toggle, setToggle] = useContext(ActiveDrawerContext)

	const toggleDrawer = () => {
		setToggle({
			open: !toggle.open,
			close: !toggle.close,
		})
	}

	const keyPressBlur = () => {
		setToggle({
			open: false,
			close: true,
		})
	}

	useEffect(() => {
		const close = (e: any) => {
			if (e.keyCode === 27) {
				keyPressBlur()
			}
		}
		window.addEventListener('keydown', close)
		return () => window.removeEventListener('keydown', close)
	}, [])

	return (
		<s.DrawerTrigger
			ref={triggerRef}
			open={toggle.open}
			close={toggle.close}
			onClick={toggleDrawer}
		>
			{children}
		</s.DrawerTrigger>
	)
}

const Drawer: FC<IDrawer> = ({ content, menu }) => {
	const [toggle, setToggle] = useContext(ActiveDrawerContext)
	return (
		<>
			<s.DrawerFrame open={toggle.open} close={toggle.close}>
				{content}
			</s.DrawerFrame>
			<Backdrop
				onClick={() => setToggle({ open: false, close: true })}
				open={toggle.open}
				close={toggle.close}
			/>
			<s.DrawerContainer
				open={toggle.open}
				close={toggle.close}
				onClick={() => setToggle({ open: false, close: true })}
			>
				<s.DrawerMenuClose onClick={() => setToggle({ open: false, close: true })}>
					<LongArrowLeft />
				</s.DrawerMenuClose>
				{menu}
			</s.DrawerContainer>
		</>
	)
}

export default Drawer
