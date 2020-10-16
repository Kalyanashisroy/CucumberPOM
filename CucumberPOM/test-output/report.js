$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Workspace/CucumberPOM/src/main/java/features/freecrm.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Application Test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Free CRM Home Page Test",
  "description": "",
  "id": "free-crm-application-test;validate-free-crm-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "home is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "validate logged in username",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 8320402317,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 83\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027KALYAN\u0027, ip: \u0027192.168.43.25\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x003D9443+2724931]\n\tOrdinal0 [0x002D8421+1672225]\n\tOrdinal0 [0x001C0339+525113]\n\tOrdinal0 [0x00150B77+68471]\n\tOrdinal0 [0x0014D32C+54060]\n\tOrdinal0 [0x0016CC37+183351]\n\tOrdinal0 [0x0016CA3D+182845]\n\tOrdinal0 [0x0016A94B+174411]\n\tOrdinal0 [0x00152528+75048]\n\tOrdinal0 [0x001535A0+79264]\n\tOrdinal0 [0x00153539+79161]\n\tOrdinal0 [0x002ED4D7+1758423]\n\tGetHandleVerifier [0x004F5D96+1050070]\n\tGetHandleVerifier [0x004F5AE1+1049377]\n\tGetHandleVerifier [0x00500927+1093991]\n\tGetHandleVerifier [0x004F6396+1051606]\n\tOrdinal0 [0x002E59D6+1726934]\n\tOrdinal0 [0x002EEA4B+1763915]\n\tOrdinal0 [0x002EEBB3+1764275]\n\tOrdinal0 [0x00304AD5+1854165]\n\tBaseThreadInitThunk [0x75517C04+36]\n\tRtlInitializeExceptionChain [0x777AAD2F+143]\n\tRtlInitializeExceptionChain [0x777AACFA+90]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat util.TestBase.initialization(TestBase.java:30)\r\n\tat stepDefinitions.HomePageSteps.user_opens_browser(HomePageSteps.java:11)\r\n\tat ✽.Given user opens browser(D:/Workspace/CucumberPOM/src/main/java/features/freecrm.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.home_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_username()"
});
formatter.result({
  "status": "skipped"
});
});