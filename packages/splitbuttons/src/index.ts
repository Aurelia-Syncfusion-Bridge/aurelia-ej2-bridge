import { isRippleEnabled, enableRipple } from '@syncfusion/ej2-base';
import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';


export function configure(config: FrameworkConfiguration) {

    config.globalResources([
        PLATFORM.moduleName('./progress-button/ej-progress-button')
    ]);
  
    if (!isRippleEnabled) {
      enableRipple(true);
      console.log('========= RIPPLE ENABLED ===========');
    }
    
  }