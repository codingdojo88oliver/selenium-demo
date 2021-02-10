const chai                  = require('chai');
const expect                = chai.expect;
const chrome = require('selenium-webdriver/chrome');
const {Builder, By, Capabilities} = require('selenium-webdriver');

const caps = new Capabilities();
caps.setPageLoadStrategy("normal");

let driver;

describe('Login feature', function(){
    this.timeout(30000);
    it("some test here", async function(){
        try {
            driver = await new Builder().
                setChromeOptions(new chrome.Options().addArguments(['--headless','--disable-web-security', '--allow-running-insecure-content']).headless().windowSize({
                    width: 1907,
                    height: 1057
                })).
                forBrowser('chrome').
                usingServer('http://selenium_chrome:4444/wd/hub').
                build();
    
            // Navigate to Url
            // await driver.get("http://host.docker.internal:3001");
            await driver.get("http://app:3000");
            let message = await driver.findElement(By.id("title")).getText();
            console.log("The message is", message);
            expect(message).to.equal('Hello Docker');
        } catch (e) {
            console.log(e);
            throw new Error("error");
        } finally {
            if(driver){
                await driver.quit();
            }
        }        
    })
});