import { createContext, FC, Fragment, useContext, useEffect, useRef, useState } from 'react'

// [Interfaces]
import {
	IAccordion,
	TAccordionItem,
	TAccordionContent,
	TAccordionTab,
	IAccordionProvider,
	IAccordionTrigger,
	IAccordionContext,
} from './Accordion.interfaces'
// [Styles]
import * as s from './Accordion.styled'

export const ActiveAccordionContext = createContext<any | null>(null)

export const AccordionProvider: FC<IAccordionProvider> = ({ children }) => {
	const [toggle, setToggle] = useState({
		open: false,
		close: true,
	})
	return (
		<ActiveAccordionContext.Provider value={[toggle, setToggle]}>
			{children}
		</ActiveAccordionContext.Provider>
	)
}

export const AccordionTrigger: FC<IAccordionTrigger> = ({ children, ref }) => {
	const triggerRef = useRef<HTMLDivElement>(null)
	const [toggle, setToggle] = useContext(ActiveAccordionContext)

	const toggleAccordion = () => {
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
		<s.AccordionTrigger
			ref={triggerRef}
			open={toggle.open}
			close={toggle.close}
			onClick={toggleAccordion}
		>
			{children}
		</s.AccordionTrigger>
	)
}

const AccordionTab: FC<TAccordionTab> = ({
	title,
	titleIcon,
	actionIcon,
	content,
	onClick,
	open,
	close,
}) => {
	return (
		<s.AccordionTab onClick={onClick} open={open} close={close}>
			<s.AccordionTabContainer>
				{titleIcon && <s.AccordionTabTitleIcon>{titleIcon}</s.AccordionTabTitleIcon>}
				{title && <s.AccordionTabTitle>{title}</s.AccordionTabTitle>}
				{actionIcon && (
					<s.AccordionTabActionIcon open={open} close={close}>
						{actionIcon}
					</s.AccordionTabActionIcon>
				)}
			</s.AccordionTabContainer>
			{content && <s.AccordionTabContent>{content}</s.AccordionTabContent>}
		</s.AccordionTab>
	)
}

const AccordionContext: FC<TAccordionItem> = ({ content, tab }) => {
	const [toggle, setToggle] = useState({ open: false, close: true })

	const toggleTabContent = () => {
		setToggle({ open: !toggle.open, close: !toggle.close })
	}

	return (
		<>
			<AccordionTab
				onClick={toggleTabContent}
				open={toggle.open}
				close={toggle.close}
				title={tab?.title}
				titleIcon={tab?.titleIcon}
				actionIcon={tab?.actionIcon}
				content={tab?.content}
			/>
			<s.AccordionContent open={toggle.open} close={toggle.close}>
				{content &&
					content.map((ac: any) => (
						<s.AccordionContentItem key={ac.key}>{ac?.data}</s.AccordionContentItem>
					))}
			</s.AccordionContent>
		</>
	)
}
const Accordion: FC<IAccordionContext> = ({ items }) => {
	return (
		<s.Accordion>
			<s.AccordionContainer>
				{items &&
					items.map((item: TAccordionItem) => (
						<AccordionContext key={item.key} tab={item.tab} content={item.content} />
					))}
			</s.AccordionContainer>
		</s.Accordion>
	)
}

export default Accordion
