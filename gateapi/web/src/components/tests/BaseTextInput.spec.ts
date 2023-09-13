import { describe, expect, it } from 'vitest'
import { render, fireEvent, type RenderResult } from '@testing-library/svelte'

import BaseTextInput from '../BaseTextInput.svelte'

describe('BaseTextInput', () => {
	type SutTypes = {
		sut: RenderResult
	}

	interface MakeSutProps {
		id: string
		value: string | number
		label: string
		placeholder?: string
		inputType?: 'text' | 'number'
		readOnly?: boolean
	}

	const makeSut = ({
		id = '',
		value = '',
		label = '',
		placeholder = '',
		inputType = 'text',
		readOnly = false,
	}: MakeSutProps): SutTypes => {
		const sut = render(BaseTextInput, {
			props: {
				id,
				value,
				label,
				placeholder,
				inputType,
				readOnly,
			},
		})

		return { sut }
	}

	it('should render correctly', () => {
		const { sut } = makeSut({
			id: 'test-id',
			label: 'Test label',
			value: 'Any value',
		})
		const { getByTestId, getByLabelText } = sut
		const input = getByTestId('base-text-input')
		const label = getByLabelText('Test label')

		expect(input).toBeDefined()
		expect(label).toBeDefined()
	})

	it('should have the provided id', () => {
		const { sut } = makeSut({
			id: 'test-id',
			label: 'Test label',
			value: 'Any value',
		})
		const { getByTestId } = sut
		const container = getByTestId('base-text-input')
		const input = container.querySelector('input')
		const label = container.querySelector('label')

		expect(label.getAttribute('for')).toBe('test-id')
		expect(input.getAttribute('id')).toBe('test-id')
	})

	it('should have the provided value and update when fired', async () => {
		const { sut } = makeSut({
			id: 'test-id',
			label: 'Test label',
			value: 'Any value',
		})

		const { getByTestId } = sut
		const input = getByTestId('base-text-input').querySelector('input')

		expect(input.value).toBe('Any value')

		await fireEvent.input(input, { target: { value: 'New value' } })

		expect(input.value).toBe('New value')
	})

	it('should have the provided placeholder', () => {
		const { sut } = makeSut({
			id: 'test-id',
			label: 'Test label',
			value: '',
			placeholder: 'Test placeholder',
		})
		const { getByTestId } = sut
		const input = getByTestId('base-text-input').querySelector('input')

		expect(input.getAttribute('placeholder')).toBe('Test placeholder')
	})

	it('should render input type text when inputType is text', () => {
		const { sut } = makeSut({
			id: 'test-id',
			label: 'Test label',
			value: '',
			inputType: 'text',
		})
		const { getByTestId } = sut
		const input = getByTestId('base-text-input').querySelector('input')

		expect(input.getAttribute('type')).toBe('text')
	})

	it('should render input type number when inputType is number', () => {
		const { sut } = makeSut({
			id: 'test-id',
			label: 'Test label',
			value: '',
			inputType: 'number',
		})
		const { getByTestId } = sut
		const input = getByTestId('base-text-input').querySelector('input')

		expect(input.getAttribute('type')).toBe('number')
	})

	it('should disable the input when readOnly is true', () => {
		const { sut } = makeSut({
			id: 'test-id',
			label: 'Test label',
			value: 'Any value',
			readOnly: true,
		})
		const { getByTestId } = sut
		const input = getByTestId('base-text-input').querySelector('input')

		expect(input.disabled).toBe(true)
	})
})
