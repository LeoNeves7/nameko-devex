import { describe, expect, it } from 'vitest'
import { render, type RenderResult } from '@testing-library/svelte'

import BaseButton from '../BaseButton.svelte'

describe('BaseButton', () => {
	type SutTypes = {
		sut: RenderResult
	}

	interface MakeSutProps {
		text: string
		type: 'primary' | 'secondary'
	}

	const makeSut = ({ text = '', type = 'primary' }: MakeSutProps): SutTypes => {
		const sut = render(BaseButton, {
			props: {
				text,
				type,
			},
		})

		return { sut }
	}

	it('should renders correctly', () => {
		const { sut } = makeSut({ text: 'test', type: 'primary' })
		const { getByTestId } = sut
		const button = getByTestId('base-button')

		expect(button).toBeDefined()
	})

	it('should contain the correct text', () => {
		const anyText = 'Any text'
		const { sut } = makeSut({ text: 'Any text', type: 'primary' })
		const { getByText } = sut
		const text = getByText(anyText)

		expect(text).toBeDefined()
	})
})
