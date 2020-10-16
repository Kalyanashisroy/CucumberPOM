package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\Workspace\\CucumberPOM\\src\\main\\java\\features\\freecrm.feature",
		//The path of the features files or packages
        glue={"stepDefinitions"},//The path of the step definition
        //glue= {"CRMStepDefinitionContacts"},
        
        format= {"pretty","html:test-output","json:json_output/cucumber.json",
        "junit:junit_xml/cucumber.xml"},//To generate different type of reporting
        monochrome=true,//Display the console output in a proper readable format
        strict=true,//It will check if any step is not defined in step definition file.
        dryRun=false//To check the mapping is proper between feature file and step definition file.
		//tags= {"~@SmokeTest" , "~@RegressionTest","~@EndToEnd"}
		//ORed:tags={"@SmokeTest,@RegressionTest"}--execute all tests as @SmokeTest OR @RegressionTest
		//ANDed:tags={"@SmokeTest","@RegressionTest"}--execute all tests as @SmokeTest AND @RegressionTest
		//To ignoring tags you have to use special character(~) 
		)
public class TestRunner {

}
