import { Page } from "playwright";
import { runInContext } from "vm";
import * as data from "../TestData/TestIntitialization.json";
import { expect } from "playwright/test";



export default class BasicInformation{

    firtName = this.page.getByLabel('First Name');
    lastName = this.page.getByLabel('Last Name');
    email = this.page.getByLabel('Email Address');
    street = this.page.getByLabel('Street Address');
    city = this.page.getByLabel('City');
    zipCode = this.page.getByLabel('Zip Code');
    next = this.page.getByRole('button', { name: 'Next' });
    question1 = this.page.locator("//label[contains(.,'In the last year')]/following-sibling::div/label[@class='btn btn-default btn-lg btn-tcc'][2]");
    question2 = this.page.locator("//label[contains(.,'In the last two year')]/following-sibling::div/label[@class='btn btn-default btn-lg btn-tcc'][2]");
    question3 = this.page.locator("//label[contains(.,'Are you a veteran of the U.S.')]/following-sibling::div/label[@class='btn btn-default btn-lg btn-tcc'][2]");
    question4 = this.page.locator("//label[contains(.,'Are you a person who has a disability?')]/following-sibling::div/label[@class='btn btn-default btn-lg btn-tcc'][2]");
    question5 = this.page.locator("//label[contains(.,'Have you ever been convicted')]/following-sibling::div/label[@class='btn btn-default btn-lg btn-tcc'][2]");
    question6 = this.page.locator("//label[contains(.,'Are you unemployed?')]/following-sibling::div/label[@class='btn btn-default btn-lg btn-tcc'][2]");
    validateName = this.page.locator("//input[@class='form-control textbox-tcc']");
    submit = this.page.getByRole('button', { name: 'Submit form' });
    

    constructor(public page: Page){}

    async BasicInformationPage(){

        await this.firtName.fill(data.firtName);
        await this.lastName.fill(data.lastName);
        await this.email.fill(data.email);
        await this.street.fill(data.street);
        await this.city.fill(data.city);
        await this.zipCode.fill(data.zipCode);
        await this.next.click();
        await this.page.waitForLoadState();

    }

    async Questionnaires(){

        await this.question1.click();
        await this.question2.click();
        await this.question3.click();
        await this.question4.click();
        await this.question5.click();
        await this.question6.click();
        await this.next.click();
        await this.page.waitForLoadState();
    }

    async ValidateNameAndSubmit(){

        await this.validateName.click();
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.press('Control+C');  
        const nameValidation = await this.page.evaluate(() => navigator.clipboard.readText());
        this.page.on('dialog', (dialog) => dialog.accept());  
        console.log(nameValidation);
        await expect(nameValidation).toEqual("Tony Stark");
        await this.submit.click();
        console.log("Name Validation Successfull");            
        await this.page.waitForLoadState();
    }

    async ValidateUrl(){
                
        const currentUrl = this.page.url();
        console.log(currentUrl);

        await expect(currentUrl).toContain(data.verifyUrl);
        console.log("Post Redirection URL Validated Successfully ==>> " + currentUrl);
    }


}