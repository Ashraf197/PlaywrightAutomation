import { Page } from "playwright";
export default class LaunchUrl{

    constructor(public page: Page){}

    async LaunchApplication(url: string){
        
        await this.page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
        await this.page.goto(url, {waitUntil: "load"});
        
    }


}