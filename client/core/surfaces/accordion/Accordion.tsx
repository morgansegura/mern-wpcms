import { FC, useState } from 'react'

// [Styles]
import * as s from './Accordion.styled'

// [Icons]

// [Interfaces]
import { IAccordion, IAccordionTab, IAccordionContent } from './Accordion.interfaces'
import { ChevronRight } from 'core/data-display/icons'

const AccordionContent: FC<IAccordion> = ({ content }) => {
	return <s.AccordionContentContainer></s.AccordionContentContainer>
}

const AccordionTab: FC<IAccordionTab> = ({ tab }) => {
	return (
		<s.AccordionTabContainer>
			{tab}
			<ChevronRight />
		</s.AccordionTabContainer>
	)
}

const Accordion: FC<IAccordion> = ({ tab, content }) => {
	const [toggle, setToggle] = useState(false)

	return (
		<s.AccordionContainer>
			<AccordionTab />
			<AccordionContent content={content} />
		</s.AccordionContainer>
	)
}

export default Accordion
