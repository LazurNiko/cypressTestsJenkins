describe('real world test', function() {
    
  it('Sends status message to Telegram channel', function() {
    cy.request("https://api.telegram.org/bot5295216330:AAFMTbK_HgtZwk-GGaB0iJX39DC2M39dmOA/sendMessage?chat_id=@alert_RealCon&text=" + Cypress.env('message') + "Please observe the results at: https://jenkins.-...");
  })
})

