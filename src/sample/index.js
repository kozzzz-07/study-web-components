import { MyAlertModule } from "./components/index.js";

MyAlertModule.prepareFortemplate().then(() => {
  MyAlertModule.defineMyAlertElement();
});
