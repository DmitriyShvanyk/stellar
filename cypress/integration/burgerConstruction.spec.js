describe('Build burger', () => {
    Cypress.Cookies.debug(true)

    before(() => {
        cy.visit('http://localhost:3000')
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('token')
    })

    it('should open main page', () => {
        cy.contains('Log In')
        cy.contains('Assemble a burger')
    })

    it('should go to the login page', () => {
        cy.get('a').contains('Log In').click()
        cy.contains('Log In')
    })

    it('should be logged in', () => {
        Cypress.Cookies.debug(true)
        cy.get('.form--login input[type=email]').type('burger.react123@gmail.com')
        cy.get('.form--login input[type=password]').type('12345')
        cy.get('.form--login .form__submit button').contains('Log In').click()
        cy.contains('Private cabinet')
        cy.contains('Assemble a burger')
    })

    it('must transfer items to constructor', () => {
        // price 1255 * 2 = 2510
        cy.get('[class*=burger-ingredient_burgerIngredient__name__]').contains('Флюоресцентная булка R2-D3').trigger('dragstart')
        cy.get('[class*=burger-constructor_burgerConstructor__preview__').contains('Добавить ингредиенты').trigger('drop')

        // price 15 + 15 = 30
        cy.get('[class*=burger-ingredient_burgerIngredient__name__]').contains('Соус традиционный галактический').trigger('dragstart')
        cy.get('[class*=burger-constructor_burgerConstructor__preview__').contains('Добавить начинку').trigger('drop')

        cy.get('[class*=burger-ingredient_burgerIngredient__name__]').contains('Соус традиционный галактический').trigger('dragstart')
        cy.get('[class*=burger-constructor_burgerConstructor__body__').contains('Соус традиционный галактический').trigger('drop')

        // price 988
        cy.get('[class*=burger-ingredient_burgerIngredient__name__]').contains('Филе Люминесцентного тетраодонтимформа').trigger('dragstart')
        cy.get('[class*=burger-constructor_burgerConstructor__body__').contains('Соус традиционный галактический').trigger('drop')


        // price 4400
        cy.get('[class*=burger-ingredient_burgerIngredient__name__]').contains('Мини-салат Экзо-Плантаго').trigger('dragstart')
        cy.get('[class*=burger-constructor_burgerConstructor__body__').contains('Филе Люминесцентного тетраодонтимформа').trigger('drop')

        // total price
        cy.get('[class*=total-price_totalPrice__').contains('7394')
    })

    it('have to send the order', () => {
        cy.get('[class*=burger-constructor_burgerConstructor__order__] button').contains('Checkout').click()
        cy.contains('order ID', { timeout: 5000 })
    })

    it('should close the order modal', () => {
        cy.get('[class*=modal_modal__close__]').click()
    })

    it('should open feed page', () => {
        cy.get('.nav-link').contains('Order feed').click()
    })

    it('should open profile page', () => {
        cy.get('[class*=menu_menu__link__]').contains('Profile').click({ force: true })
    })
})