// tests/demo_invalid_fast.js

const { test, expect } = require('@playwright/test');
const { HomePage } = require('../Pages/HomePage');
const { FlightsPage } = require('../Pages/FlightsPage');
const { PurchasePage } = require('../Pages/PurchasePage');
const { ConfirmationPage } = require('../Pages/ConfirmationPage');

// Import test data with invalid city names
const flightData = require('../data/flightData_invalid1.json');
const passengerInfo = require('../data/passengerInfo1.json');
const paymentInfo = require('../data/paymentInfo1.json');

// This test uses invalid data and should fail quickly when cities are not present
// in the dropdown lists.
test('Fail fast with invalid flight data on BlazeDemo', async ({ page }) => {
  // Reduce Playwright's default timeout so errors surface quickly
  page.setDefaultTimeout(5000);

  const { departureCity, destinationCity } = flightData;

  const homePage = new HomePage(page);
  const flightsPage = new FlightsPage(page);
  const purchasePage = new PurchasePage(page);
  const confirmationPage = new ConfirmationPage(page);

  await homePage.goto();
  await homePage.verifyHomePageLoaded();

  // Expect selecting an invalid departure city to throw immediately
  await expect(homePage.selectDepartureCity(departureCity)).rejects.toThrow();

  // Attempting destination selection should also throw
  await expect(homePage.selectDestinationCity(destinationCity)).rejects.toThrow();
});
