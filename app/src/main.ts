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
    .feature(PLATFORM.moduleName('resources/index'))
    .feature(PLATFORM.moduleName('resources/highlight/index'))
    .feature(PLATFORM.moduleName('resources/tab-component/index'))
    //.feature(PLATFORM.moduleName('resources/code-view/index'))
    .plugin(PLATFORM.moduleName('aurelia-dynamic-html'))
    .plugin(PLATFORM.moduleName('@aurelia-ej2-bridge/buttons'))
    .plugin(PLATFORM.moduleName('aurelia-validation'))
    ;

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'), document.body);
}

(async () => {
  initialize();
  const aurelia = new Aurelia(new WebpackLoader());
  await configure(aurelia);
})();
