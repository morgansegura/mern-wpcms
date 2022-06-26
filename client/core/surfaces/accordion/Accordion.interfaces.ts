import { ReactNode } from 'react'

export interface IAccordionTab {
	tab?: ReactNode[] | ReactNode
}
export interface IAccordionContent {
	content?: ReactNode[] | ReactNode
}

export interface IAccordion {
	tab?: IAccordionTab
	content?: IAccordionContent
}
