describe('visual 테스트',()=> {
  it('visual 테스트',()=>{
    cy.visit('/modal-test')
    cy.get('#modal > div').matchImageSnapshot('modal');
  })
})