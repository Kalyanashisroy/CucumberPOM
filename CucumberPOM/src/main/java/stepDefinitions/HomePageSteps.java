package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.LoginPage;
import util.TestBase;

public class HomePageSteps extends TestBase{
	LoginPage loginpage=new LoginPage();
	
	@Given("^user opens browser$")
	public void user_opens_browser() throws Throwable {
	   TestBase.initialization();
	}

	@Then("^user is on login page$")
	public void user_is_on_login_page() throws Throwable {
		loginpage.validateLoginpageTitle();
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
	   
	}

	@Then("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
	  
	}

	@Then("^home is displayed$")
	public void home_is_displayed() throws Throwable {
	  
	}

	@Then("^validate home page title$")
	public void validate_home_page_title() throws Throwable {
	  
	}

	@Then("^validate logged in username$")
	public void validate_logged_in_username() throws Throwable {
	
	}



}
