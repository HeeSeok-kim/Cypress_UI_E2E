describe('window 객체 Stub 테스트', () => {
  const windowObjectStub = (url:string) => {
    cy.on('window:before:load', (win) => {
      win.__location = {
        replace: cy.stub().as('replace')
      }

      Object.defineProperty(win.__location,'href', {
        get: () => '',
        set: cy.stub().as('href')
      })
    })

    cy.intercept('GET', url, (req) => {
      req.continue((res) => {
        res.body = res.body.replaceAll('location', 'window.__location')
      })
    })
  }

  beforeEach(()=>{
    const pageDownLoadUrl = 'http://localhost:5173/src/pages/WindowObjectTest.tsx*'
    const pageUrl = '/window-object-test'

    // windowObjectStub(pageDownLoadUrl)
    cy.visit(pageUrl)
  })

  it('구글 플레이 스토어 딥링크 테스트(http 사용)',()=>{
    const playStore = 'http://play.google.com/store/apps/details?id=com.nhn.android.search&hl=ko'

    //클릭
    cy.get('#httpProtocol').click()

    cy.origin(playStore,()=>{
      cy.url().should('include','google')
    })


    //검증
    // cy.get('@replace').should(
    //   'have.been.calledOnceWith',
    //   playStore
    // )
  })

  it('구글 플레이 스토어 딥링크 테스트(market scheme 사용)', () => {
    const market = 'market://details?id=com.nhn.android.search&hl=ko'
    cy.get('#market').click()

    cy.get('@href').should(
      'have.been.calledOnceWith',
      market
    )
  })

  it('앱 스토어 딥링크 테스트',()=>{
    const playStore = 'http://play.google.com/store/apps/details?id=com.nhn.android.search&hl=ko'

    //클릭
    cy.get('#httpProtocol').click()

    //검증
    cy.get('@replace').should(
      'have.been.calledOnceWith',
      playStore
    )
  })
})