describe('window 객체 Stub 테스트', () => {
  const windowObjectStub = (url:string, stub:object) => {
    cy.on('window:before:load', (win) => {
      win.__location = {
        ...stub
      }
    })

    cy.intercept('GET', url, (req) => {
      req.continue((res) => {
        res.body = res.body.replaceAll('location', 'window.__location')
      })
    })
  }

  it('구글 플레이 스토어 이동 테스트',()=>{
    const windowLocation = {
      replace: cy.stub().as('replace'),
    }
    const playStore = 'http://play.google.com'
    const pageUrl = '/window-object-test'
    const pageDownLoadUrl = 'http://localhost:5173/src/pages/WindowObjectTest.tsx?t=*'

    windowObjectStub(pageDownLoadUrl,windowLocation)
    cy.visit(pageUrl)

    //클릭
    cy.get('#replace_test').click()

    //검증
    cy.get('@replace').should(
      'have.been.calledOnceWith',
      playStore
    )
  })
})