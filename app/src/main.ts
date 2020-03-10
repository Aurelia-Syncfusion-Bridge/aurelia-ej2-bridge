import 'aurelia-polyfills';
import { initialize } from 'aurelia-pal-browser';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import { WebpackLoader } from 'aurelia-loader-webpack';

async function configure(aurelia: Aurelia): Promise<void> {
  //console.log(PLATFORM.moduleName('node_modules/@aurelia-ej2-bridge/buttons/dist/es2015'));
  aurelia
    .use
    .developmentLogging()
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@aurelia-ej2-bridge/base'))
    //.plugin(PLATFORM.moduleName('@aurelia-ej2-bridge/buttons'))
    .plugin(PLATFORM.moduleName('aurelia-validation'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'), document.body);
}

(async () => {
  initialize();
  const aurelia = new Aurelia(new WebpackLoader());
  await configure(aurelia);
})();
