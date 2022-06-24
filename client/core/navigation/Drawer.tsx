import React from 'react'

// [Config]
import { DrawerFrameProps, DrawerProps, DrawerTriggerProps } from 'core/config/interfaces'
// [Styles]
import {
	StyledDrawerContainer,
	StyledDrawerTrigger,
	StyledDrawerFrame,
	StyledDrawerMenuClose,
} from 'core/styles/navigation'
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
		<StyledDrawerTrigger
			ref={triggerRef}
			open={toggle.open}
			close={toggle.close}
			onClick={toggleDrawer}
		>
			{children}
		</StyledDrawerTrigger>
	)
}

export const DrawerFrame: React.FC<DrawerFrameProps> = ({ children }) => {
	const [toggle, setToggle] = React.useContext(ActiveDrawerContext)
	return (
		<>
			<StyledDrawerFrame open={toggle.open} close={toggle.close}>
				{children}
			</StyledDrawerFrame>
			<StyledBackdrop
				onClick={() => setToggle({ open: false, close: true })}
				open={toggle.open}
				close={toggle.close}
			/>
		</>
	)
}

const Drawer: React.FC<DrawerProps> = ({ children }) => {
	const [toggle, setToggle] = React.useContext(ActiveDrawerContext)
	return (
		<StyledDrawerContainer open={toggle.open} close={toggle.close}>
			<StyledDrawerMenuClose onClick={() => setToggle({ open: false, close: true })}>
				<FaLongArrowAltLeft />
			</StyledDrawerMenuClose>
			{children}
		</StyledDrawerContainer>
	)
}

export default Drawer
