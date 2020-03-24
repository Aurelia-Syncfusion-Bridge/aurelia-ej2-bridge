import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export * from './barcode';
export * from './datamatrix';


export function configure(config: FrameworkConfiguration) {

    config.globalResources([
        PLATFORM.moduleName('./barcode/ej-barcode'),
        PLATFORM.moduleName('./datamatrix/ej-datamatrix')
    ]);
}