import { describe, expect, it } from 'vitest'
import { render, type RenderResult } from '@testing-library/svelte'

import BaseErrorMessage from '../BaseErrorMessage.svelte'

describe('BaseErrorMessage', () => {
	type SutTypes = {
		sut: RenderResult
	}

	interface MakeSutProps {
		text: string
	}

	const makeSut = ({ text = '' }: MakeSutProps): SutTypes => {
		const sut = render(BaseErrorMessage, {
			props: {
				text,
			},
		})

		return { sut }
	}

	it('should renders correctly', () => {
		const { sut } = makeSut({ text: 'test message' })
		const { getByTestId } = sut
		const toast = getByTestId('base-error-message')

		expect(toast).toBeDefined()
	})

	it('should contain the correct text', () => {
		const anyText = 'Any text'
		const { sut } = makeSut({ text: 'Any text' })
		const { getByText } = sut
		const text = getByText(anyText)

		expect(text).toBeDefined()
	})
})
