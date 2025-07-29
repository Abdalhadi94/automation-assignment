Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://expertsacademy-staging.web.app/auth/login');
  cy.wait(3700);
  cy.get('input.v-field__input[type="text"]').eq(0).type(email);
  cy.get('input.v-field__input[type="password"][autocomplete="password"]').type(password);
  cy.contains('span.v-btn__content', 'Continue').click();

});


Cypress.Commands.add('loginWithOTP', (email, password, otp) => {
  cy.login(email, password);
  cy.get('button').contains('Accept All').click({force: true});

  otp.forEach((digit, index) => {
    cy.get(`:nth-child(${index + 1}) > .v-field__field > .v-otp-input__field`).type(digit,{force: true });
  });

  cy.scrollTo('top');
  //cy.get('.v-toolbar__append > :nth-child(1) > .ga-2').should('be.visible');
});