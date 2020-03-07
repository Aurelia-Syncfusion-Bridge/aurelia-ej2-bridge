import { Aurelia, FrameworkConfiguration, PLATFORM } from 'aurelia-framework'
import * as environment from '../config/environment.json';

//import * as hw from '@aurelia-ej2-bridge/aurelia-ej-2-bridge-demo-plugin'

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))
    .plugin('@aurelia-ej-2-bridge/aurelia-ej-2-bridge-demo-plugin');

    //hw.configure(aurelia.container.get(FrameworkConfiguration));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
