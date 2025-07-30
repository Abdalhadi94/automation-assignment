const CheckoutPage = {
  // Define selectors
  addToCart: ':nth-child(2) > .h-100 > .ga-4 > div > .v-btn',
  checkoutButton: 'a.v-btn',
  paymentMethodTitle: 'button.v-expansion-panel-title',
  paymentMethodWallet: '.flex-grow-1 > .align-center > .d-flex > .text-black-900',
  visaPaymentMethod: '[src="https://cdn.himam.com/checkout-logos/visa.svg"]',
  tamaraPaymentMethod: 'img[src*="tamara.svg"]',
  tabbyPaymentMethod: 'img[src*="tabby-2.svg"]',
  ccNameInput: '#mysr-cc-name',
  ccNumberInput: '#mysr-cc-number',
  ccExpInput: 'input[autocomplete="cc-exp"]',
  ccvInput: 'input[autocomplete="cc-csc"]',
  payButton: '.mysr-form-button',
  visaOption: 'img[src*="visa.svg"]',
 // moysarSubmitButton: 'input[type="submit"][value="Submit"]'
};

export default CheckoutPage;
