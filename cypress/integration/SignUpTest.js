
import{SignUpForm} from'../support/pom_objects/SignUpPagePom'

describe('Sign up Test suite', function() {

      
    beforeEach('Go to apllication and click on coocke', function(){
        cy.visit('/');
        cy.get('#cookie_stop').click();
    });

    it('Navigate to SingUp page', function(){
        cy.get(SignUpForm.btnTopSignup).click();
        cy.get(SignUpForm.title).should('have.text', 'Signup');  
    });

    it('Create account, Insert valid data in all fields', function(){
        cy.get(SignUpForm.btnTopSignup).click();
       // cy.get('[placeholder="First Name"]').focus().click().type("First");
        cy.get(SignUpForm.firstName).click({force: true}).type("Second");
        cy.get(SignUpForm.lastName).click({force: true}).type("Last");
        cy.get(SignUpForm.phone).click({force: true}).type("381639");
        cy.get(SignUpForm.email).click({force: true}).type("Second@bg.com");
        cy.get(SignUpForm.password).click({force: true}).type("Test.321");
        cy.get(SignUpForm.typeAcc).click({force: true});
        cy.get(SignUpForm.btnSubmitSignup).click({force: true}); 
        cy.get(SignUpForm.alert).contains('Signup successfull please login.');
     });

     it('Create account with same email address', function(){
        cy.get(SignUpForm.btnTopSignup).click();
        cy.get(SignUpForm.firstName).click({force: true}).type("Second");
        cy.get(SignUpForm.lastName).click({force: true}).type("Last");
        cy.get(SignUpForm.phone).click({force: true}).type("381639");
        cy.get(SignUpForm.email).click({force: true}).type("Second@bg.com");
        cy.get(SignUpForm.password).click({force: true}).type("Test.321");
        cy.get(SignUpForm.typeAcc).click({force: true});
        cy.get(SignUpForm.btnSubmitSignup).click({force: true}); 
        cy.get(SignUpForm.alert).contains('Email already exist!');
     });
     


});