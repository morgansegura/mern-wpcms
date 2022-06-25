import React from 'react'

// [Config]
import { DrawerFrameProps, DrawerProps, DrawerTriggerProps } from 'core/config/interfaces'
// [Styles]
import * as style from 'core/styles/navigation/StyledDrawer'
import { StyledBackdrop } from '@styles/components/layouts'
// [Icons]
import { FaLongArrowAltLeft } from 'react-icons/fa'

export const ActiveDrawerContext = React.createContext<any | null>(null)

export const DrawerProvider: React.FC<DrawerTriggerProps> = ({ children }) => {
	const [toggle, setToggle] = React.useState({
		open: false,
		close: true,
	})
	return (
		<ActiveDrawerContext.Provider value={[toggle, setToggle]}>
			{children}
		</ActiveDrawerContext.Provider>
	)
}

export const DrawerTrigger: React.FC<DrawerTriggerProps> = ({ children }) => {
	const triggerRef = React.useRef<HTMLDivElement>(null)
	const [toggle, setToggle] = React.useContext(ActiveDrawerContext)

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

	React.useEffect(() => {
		const close = (e: any) => {
			if (e.keyCode === 27) {
				keyPressBlur()
			}
		}
		window.addEventListener('keydown', close)
		return () => window.removeEventListener('keydown', close)
	}, [])

	return (
		<style.DrawerTrigger
			ref={triggerRef}
			open={toggle.open}
			close={toggle.close}
			onClick={toggleDrawer}
		>
			{children}
		</style.DrawerTrigger>
	)
}

const Drawer: React.FC<DrawerProps> = ({ content, menu }) => {
	const [toggle, setToggle] = React.useContext(ActiveDrawerContext)
	return (
		<>
			<style.DrawerFrame open={toggle.open} close={toggle.close}>
				{content}
			</style.DrawerFrame>
			<StyledBackdrop
				onClick={() => setToggle({ open: false, close: true })}
				open={toggle.open}
				close={toggle.close}
			/>
			<style.DrawerContainer
				open={toggle.open}
				close={toggle.close}
				onClick={() => setToggle({ open: false, close: true })}
			>
				<style.DrawerMenuClose onClick={() => setToggle({ open: false, close: true })}>
					<FaLongArrowAltLeft />
				</style.DrawerMenuClose>
				{menu}
			</style.DrawerContainer>
		</>
	)
}

export default Drawer
