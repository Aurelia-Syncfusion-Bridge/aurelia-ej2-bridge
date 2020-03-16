import { enableRipple, isRippleEnabled } from '@syncfusion/ej2-base';
import { FrameworkConfiguration } from 'aurelia-framework';

export * from './ej-component-model';
export * from './events';

export function configure(_config: FrameworkConfiguration) {
    if (!isRippleEnabled) {
        enableRipple(true);
        console.log('========= RIPPLE ENABLED ===========');
    }
}