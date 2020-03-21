import { isRippleEnabled, enableRipple } from '@syncfusion/ej2-base';
import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';

export * from './textbox/index';

export function configure(config: FrameworkConfiguration) {

    config.globalResources([
      PLATFORM.moduleName('./textbox/ej-textbox'),
      PLATFORM.moduleName('./maskedtextbox/ej-masked-textbox'),
      PLATFORM.moduleName('./numerictextbox/ej-numerictextbox'),
      PLATFORM.moduleName('./color-picker/ej-color-picker')
    ]);
  
    if (!isRippleEnabled) {
      enableRipple(true);
      console.log('========= RIPPLE ENABLED ===========');
    }
    
  }