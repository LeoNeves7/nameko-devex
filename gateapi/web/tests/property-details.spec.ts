import { expect, test } from '@playwright/test'

test.describe('property details', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/property-details')
	})

	test('property details components must be defined', async ({ page }) => {
		await expect(page.getByText('Property details')).toBeVisible()

		const propertyNameInput = await page.$('#property-name')
		expect(propertyNameInput).toBeDefined()

		const addressInput = await page.$('#address')
		expect(addressInput).toBeDefined()

		const image = page.locator('img')
		expect(image).toBeDefined()

		expect(page.getByTestId('property-type-section')).toBeDefined()

		expect(page.getByTestId('unit-info-section')).toBeDefined()

		expect(page.getByText('BACK')).toBeDefined()

		expect(page.getByText('CONTINUE')).toBeDefined()
	})

	test('back button should redirect to home page', async ({ page }) => {
		await page.goto('/property-details')

		const backButton = page.getByText('BACK')
		expect(backButton).toBeDefined()

		await backButton.click()

		await page.waitForURL('/')

		const currentURL = page.url()
		expect(currentURL).toBe('http://localhost:3000/')
	})
})
