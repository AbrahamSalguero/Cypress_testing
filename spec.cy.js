describe('template spec', () => {



it('pruebas de login y transferencia de dinero', () =>{

  cy.visit('http://zero.webappsecurity.com/')
  cy.get("#onlineBankingMenu > div > strong").click()
  cy.get('#transfer_funds_link').click()
  cy.get("#user_login").type("username")
  cy.get("#user_password").type("password")
  cy.get("#user_remember_me").click()
  cy.get(".btn").click()
  cy.get("#tf_fromAccountId").select(3)
  cy.get("#tf_toAccountId").select(5)
  cy.get("#tf_amount").type(600)
  cy.get("#tf_description").type("Gastos de viajes")
  cy.get("#btn_submit").click()
  cy.get("#btn_submit").click()
  cy.get(".alert").should("be.visible")
  cy.get(".alert").contains("You successfully submitted your transaction")
  cy.get(".brand").click()

})

})