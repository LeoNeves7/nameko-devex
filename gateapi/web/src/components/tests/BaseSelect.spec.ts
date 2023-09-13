import { describe, expect, it } from 'vitest'
import { render, type RenderResult } from '@testing-library/svelte'

import BaseSelect from '../BaseSelect.svelte'

describe('BaseSelect', () => {
	type SutTypes = {
		sut: RenderResult
	}

	interface MakeSutProps {
		id: string
		options: { id: number; name: string }[]
		label: string
		icon?: ConstructorOfATypedSvelteComponent
	}

	const makeSut = ({
		id = '',
		options = [{ id: 0, name: '' }],
		label = '',
	}: MakeSutProps): SutTypes => {
		const sut = render(BaseSelect, {
			props: {
				id,
				options,
				label,
			},
		})

		return { sut }
	}

	it('should render correctly', () => {
		const { sut } = makeSut({
			id: 'test-id',
			label: 'Test label',
			options: [{ id: 1, name: 'Option test' }],
		})
		const { getByTestId, getByLabelText } = sut
		const input = getByTestId('base-select')
		const label = getByLabelText('Test label')

		expect(input).toBeDefined()
		expect(label).toBeDefined()
	})
})
