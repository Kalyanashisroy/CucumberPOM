Feature: Free CRM Application Test

Scenario: Validate Free CRM Home Page Test

	Given user opens browser
	Then user is on login page
	Then user enters username and password
	Then user click on login button
	Then home is displayed
	Then validate home page title
	Then validate logged in username
	