import CheckoutPage from "../support/CheckoutPage";
import CoursesPage from "../support/CheckoutPage"; 

describe('Payment Methods', () => {
  beforeEach(() => {
    cy.loginWithOTP('Abdulhadi2025@gmail.com', '$vsly{I4', ['1', '2', '3', '4']);
  });

  it('Verify available payment methods are displayed', () => {
    // Add item to cart
    cy.get(CheckoutPage.addToCart)
      .should('be.visible')
      .click({ force: true });

    // Verify navigation to the cart 
    cy.url().should('include', '/cart'); 

    cy.contains(CheckoutPage.checkoutButton, 'Checkout').click({ force: true });
    // Verify the payment methods are displayed "Wallet"

    cy.wait(1000); // Wait for the payment methods to load

    cy.contains('button', 'Payment Method').click();


    cy.get(CheckoutPage.paymentMethodWallet)
      .should('be.visible')

    // Verify the payment methods are displayed "Visa"
    cy.get(CheckoutPage.visaPaymentMethod)
      .should('be.visible')
    
    // Verify the payment methods are displayed "Tamara"
    cy.get(CheckoutPage.tamaraPaymentMethod)
      .should('be.visible')

    // Verify the payment methods are displayed "Tabby"
    cy.get(CheckoutPage.tabbyPaymentMethod)
      .should('be.visible')

  });


  it('Pay using Visa only', () => {
    // Add item to cart
    cy.get(CheckoutPage.addToCart)
      .should('be.visible')
      .click({ force: true });

    // Verify navigation to the cart 
    cy.url().should('include', '/cart');

    cy.contains(CheckoutPage.checkoutButton, 'Checkout').click({ force: true });

    // Select the "Visa" payment method
   // cy.get(CheckoutPage.visaOption).eq(0).click({ force: true });
  cy.get(CheckoutPage.visaOption).click({ force: true });

    cy.get(CheckoutPage.ccNameInput).type('Abdelhadi AlQudah', { force: true });
    cy.get(CheckoutPage.ccNumberInput).type('4242424242424242', { force: true });
    cy.get(CheckoutPage.ccExpInput).type('12/30', { force: true });
    cy.get(CheckoutPage.ccvInput).type('747', { force: true });
    cy.get(CheckoutPage.payButton).contains('Pay').click({ force: true });
    cy.wait(2000);


    // Handle the new origin (https://api.moyasar.com)
    cy.origin('https://api.moyasar.com', () => {
      cy.get('input[type="submit"][value="Submit"]') 
        .should('be.visible')
        .click({ force: true });
    });

    // Verify successful payment
    cy.get('.text-h5.mb-2').should('be.visible');


  });
});