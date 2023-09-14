import { test, expect } from '@playwright/test'

test.describe('home', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:3000/')
	})

	test('home components must be visible', async ({ page }) => {
		const homeLink = page.getByText('Home')
		const propertyDetailsLink = page.getByText('Property details')
		const pageTwoLink = page.getByText('PageTwo')

		await expect(homeLink).toBeVisible()
		await expect(propertyDetailsLink).toBeVisible()
		await expect(pageTwoLink).toBeVisible()
	})

	test('property details link click must redirect to property details page', async ({
		page,
	}) => {
		const propertyDetailsLink = page.getByText('Property details')

		await propertyDetailsLink.click()
		await page.waitForURL('/property-details')

		const currentURL = page.url()
		expect(currentURL).toBe('http://localhost:3000/property-details')
	})

	test('page two link click must redirect to property details page', async ({
		page,
	}) => {
		const pageTwoLink = page.getByText('PageTwo')

		await pageTwoLink.click()
		await page.waitForURL('/page-two')

		const currentURL = page.url()
		expect(currentURL).toBe('http://localhost:3000/page-two')
	})
})
