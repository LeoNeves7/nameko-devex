import { describe, expect, it } from 'vitest'
import { render, fireEvent, type RenderResult } from '@testing-library/svelte'

import BaseCurrencyInput from '../BaseCurrencyInput.svelte'

describe('BaseCurrencyInput', () => {
	type SutTypes = {
		sut: RenderResult
	}

	interface MakeSutProps {
		id: string
		value: number
		label: string
	}

	const makeSut = ({
		id = '',
		value = 0,
		label = '',
	}: MakeSutProps): SutTypes => {
		const sut = render(BaseCurrencyInput, {
			props: {
				id,
				value,
				label,
			},
		})

		return { sut }
	}

	it('should render correctly', () => {
		const { sut } = makeSut({ id: 'test-id', label: 'Test label', value: 10 })
		const { getByTestId, getByLabelText } = sut
		const input = getByTestId('base-currency')
		const label = getByLabelText('Test label')

		expect(input).toBeDefined()
		expect(label).toBeDefined()
	})

	it('should have the value defined', () => {
		const { sut } = makeSut({ id: 'test-id', label: 'Test label', value: 10 })
		const { getByTestId } = sut
		const input = getByTestId('base-currency').querySelector('input')

		expect(input.value).toBeDefined()
	})

	it('should have the id match the prop', () => {
		const { sut } = makeSut({ id: 'test-id', label: 'Test label', value: 10 })
		const { getByTestId } = sut
		const input = getByTestId('base-currency').querySelector('input')

		expect(input.id).toBe('test-id')
	})

	it('should change the value', async () => {
		const { sut } = makeSut({ id: 'test-id', label: 'Test label', value: 10 })
		const { getByTestId } = sut
		const input = getByTestId('base-currency').querySelector('input')

		expect(input.value).toBe('10')

		await fireEvent.input(input, { target: { value: '20' } })

		expect(input.value).toBe('20')
	})
})
