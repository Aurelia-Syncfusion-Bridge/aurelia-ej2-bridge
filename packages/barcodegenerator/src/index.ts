import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export * from './barcode';

export function configure(config: FrameworkConfiguration) {

    config.globalResources([
        PLATFORM.moduleName('./barcode/ej-barcode')
    ]);
}