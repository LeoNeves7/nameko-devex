import { expect, test } from '@playwright/test'

test.describe('page two', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/page-two')
	})

	test('page two components must be defined', async ({ page }) => {
		await page.goto('/page-two')

		expect(page.getByTestId('order-details-title')).toBeVisible()

		expect(page.getByTestId('orders-wrapper')).toBeDefined()

		expect(page.getByText('BACK')).toBeDefined()
	})

	test('back button should redirect to home page', async ({ page }) => {
		await page.goto('/page-two')

		const backButton = page.getByText('BACK')
		expect(backButton).toBeDefined()

		await backButton.click()

		await page.waitForURL('/')

		const currentURL = page.url()
		expect(currentURL).toBe('http://localhost:3000/')
	})
})
