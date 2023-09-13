import { describe, expect, it } from 'vitest'
import { render, type RenderResult } from '@testing-library/svelte'

import BaseIconCard from '../BaseIconCard.svelte'

describe('BaseIconCard', () => {
	type SutTypes = {
		sut: RenderResult
	}

	interface MakeSutProps {
		text: string
		selected: boolean
	}

	const makeSut = ({ text = '', selected = false }: MakeSutProps): SutTypes => {
		const sut = render(BaseIconCard, {
			props: {
				text,
				selected,
			},
		})

		return { sut }
	}

	it('should render correctly', () => {
		const { sut } = makeSut({ text: 'Any text', selected: false })
		const { getByTestId } = sut
		const iconCard = getByTestId('base-icon-card')

		expect(iconCard).toBeDefined()
	})

	it('should have the text defined', () => {
		const { sut } = makeSut({ text: 'Any text', selected: false })
		const { getByTestId } = sut
		const h2 = getByTestId('base-icon-card').querySelector('h2')

		expect(h2.textContent).toBe('Any text')
	})

	it('should render HTML content in the slot', () => {
		const { sut } = makeSut({ text: 'Any text', selected: false })
		const { getByTestId } = sut
		const slotContent = '<span>Custom HTML</span>'
		const iconCard = getByTestId('base-icon-card')

		iconCard.innerHTML = slotContent

		expect(iconCard.innerHTML).toContain(slotContent)
	})

	it('should apply the card-active class when selected is true', () => {
		const { sut } = makeSut({ text: 'Any text', selected: true })
		const { getByTestId } = sut
		const iconCard = getByTestId('base-icon-card')

		expect(iconCard.classList.contains('card-active')).toBe(true)
	})
})
