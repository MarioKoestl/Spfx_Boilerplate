import { ITest } from "../model/ITest";

export default class Service {
    public getData(): ITest {
        var test: ITest = {
            sepp: "sdf"
        };
        return test;
    }
}
