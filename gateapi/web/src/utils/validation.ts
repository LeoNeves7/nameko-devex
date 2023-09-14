interface IValidate {
	valid: boolean
	message: string
}

export const validateValue = (value: string | number): IValidate => {
	if (!value) {
		return {
			valid: false,
			message: 'Field is required',
		}
	}

	if (typeof value === 'number') {
		return {
			valid: value > 0,
			message: 'Value must be greater than 0',
		}
	}

	const textValue = value.trim()

	return {
		valid: textValue.length > 0,
		message: 'Value must not be empty',
	}
}
