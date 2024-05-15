import {test} from "../Fixture/fixtureTest";
import * as data from "../TestData/TestIntitialization.json";

test.describe('Surevey Engineer', async() => {
    test('SurveyEngineer_TaxInfo', async({launch, basicInfo,}) => {
        
        await launch.LaunchApplication(data.baseURL);
        await basicInfo.BasicInformationPage();
        await basicInfo.Questionnaires();
        await basicInfo.ValidateNameAndSubmit();
        await basicInfo.ValidateUrl();
    })
})
