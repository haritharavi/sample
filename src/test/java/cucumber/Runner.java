package cucumber;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/cucumber/cucum.feature",glue="cucumber",
plugin="html:target/htmlreport.html")
public class Runner {

}

