import { enableRipple, isRippleEnabled } from '@syncfusion/ej2-base';

import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export * from './button/index';
export * from './check-box/index';
export * from './chips/index';
export * from './radio-button/index';
export * from './switch/index';

export function configure(config: FrameworkConfiguration) {

  config.globalResources([
    PLATFORM.moduleName('./button/ej-button'),
    PLATFORM.moduleName('./check-box/ej-checkbox'),
    PLATFORM.moduleName('./radio-button/ej-radio-button'),
    PLATFORM.moduleName('./switch/ej-switch')    
  ]);

  if (!isRippleEnabled) {
    enableRipple(true);
    console.log('========= RIPPLE ENABLED ===========');
  }
  
}

