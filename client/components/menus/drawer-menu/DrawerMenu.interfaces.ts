import { MouseEventHandler, ReactNode } from 'react'
import { TAccordionItem } from '@core/surfaces/accordion/Accordion.interfaces'

export interface IDrawerMenu {
	key?: string
	onClick?: MouseEventHandler<HTMLDivElement>
	open?: boolean
	close?: boolean
	items?: TAccordionItem[]
}
