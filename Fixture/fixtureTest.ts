import { test as automationTest } from "@playwright/test";
import BasicInfo from "../Pages/BasicInformation";
import LaunchUrl from "../Pages/LaunchUrl";


type pages = {

    launch: LaunchUrl;
    basicInfo : BasicInfo;
    
}

const automation = automationTest.extend<pages>({

    launch: async ({page}, use) => {
        await use(new LaunchUrl(page));
    },

    basicInfo: async ({page}, use) => {
        await use(new BasicInfo(page));
    }
    
})

export const test = automation;
export const expect = automation.expect;