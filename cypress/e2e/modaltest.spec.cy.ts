describe('모달 테스트',()=>{
  const element = {
    oneDayCloseBtn:'#oneDayCloseBtn',
    closeBtn:'#closeBtn',
    modal: '#modal'
  }

  beforeEach(()=>{
    cy.visit('/')
    cy.get('#modal-test').click()

  })

  it('모달창 확인',()=>{
    const { modal, closeBtn, oneDayCloseBtn} = element

    //모달이 존재하는지 확인
    cy.get(modal).should('exist')

    //모달 본문 텍스트 검증
    cy.get('p').contains('공지사항').should('exist').should('be.visible')
    cy.get('p').contains('여기에 공지 내용을 작성하세요.').should('exist').should('be.visible')

    //모달 버튼 텍스트 검증
    cy.get(oneDayCloseBtn).should('be.visible').and('contain', '오늘 하루 열지 않기');
    cy.get(closeBtn).should('be.visible').and('contain','닫기')
  })

  it('닫기 버튼을 누르고 페이지에 다시 접근 했을때 모달이 정상적으로 보여지는지 검증',()=>{
    const { modal,closeBtn, } = element

    //모달이 존재하는지 확인
    cy.get(modal).should('exist')

    //모달 닫기 버튼 클릭
    cy.get(closeBtn).click()

    //모달 종료 확인
    cy.get(modal).should('not.exist')
    
    //새로고침
    cy.reload()
    
    //모달이 다시 보여진다.
    cy.get(modal).should('exist')

  })


  it('오늘 하루 열지 않기 클릭 검증 ', () => {
    const { modal,oneDayCloseBtn, } = element

    //모달이 존재하는지 확인
    cy.get(modal).should('exist')
    
    //오늘 하루 열지 않기 버튼 클릭
    cy.get(oneDayCloseBtn).click()

    //모달 종료 확인
    cy.get(modal).should('not.exist')

    //쿠키가 있는지 검증
    cy.getCookie('hideNoticeModal').should('exist')

    //페이지에 다시 접근 했을때 모달이 열리지 않는지 검증
    cy.reload()
    cy.get(modal).should('not.exist')
  })

})