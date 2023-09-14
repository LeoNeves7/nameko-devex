import { describe, expect, it } from 'vitest'
import { render, type RenderResult } from '@testing-library/svelte'

import BaseToast from '../BaseToast.svelte'

describe('BaseToast', () => {
	type SutTypes = {
		sut: RenderResult
	}

	interface MakeSutProps {
		message: string
		type: 'success' | 'error'
	}

	const makeSut = ({
		message = '',
		type = 'success',
	}: MakeSutProps): SutTypes => {
		const sut = render(BaseToast, {
			props: {
				message,
				type,
			},
		})

		return { sut }
	}

	it('should renders correctly', () => {
		const { sut } = makeSut({ message: 'test message', type: 'success' })
		const { getByTestId } = sut
		const toast = getByTestId('base-toast')

		expect(toast).toBeDefined()
	})

	it('should contain the correct text', () => {
		const anyText = 'Any text'
		const { sut } = makeSut({ message: 'Any text', type: 'success' })
		const { getByText } = sut
		const text = getByText(anyText)

		expect(text).toBeDefined()
	})

	it('should contain the correct class', () => {
		const toastClass = 'bg-red'
		const { sut } = makeSut({ message: 'test message', type: 'error' })
		const { getByTestId } = sut
		const toast = getByTestId('base-toast').getAttribute('class')

		expect(toast).contain(toastClass)
	})
})
