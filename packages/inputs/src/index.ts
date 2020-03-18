import { isRippleEnabled, enableRipple } from '@syncfusion/ej2-base';
import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';

export * from './textbox/index';

export function configure(config: FrameworkConfiguration) {

    config.globalResources([
      PLATFORM.moduleName('./textbox/ej-textbox')
    ]);
  
    if (!isRippleEnabled) {
      enableRipple(true);
      console.log('========= RIPPLE ENABLED ===========');
    }
    
  }