import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export * from './tab-component/index';
export * from './code-view/index';
export * from './highlight';
export * from './monaco-editor';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./tab-component/tabs'), 
    PLATFORM.moduleName('./tab-component/tab-header'),
    PLATFORM.moduleName('./monaco-editor/monaco-editor'),
    PLATFORM.moduleName('./converters/json-stringify-value-converter'),
    //PLATFORM.moduleName('./code-view/code-view'),
    PLATFORM.moduleName('./highlight/hljs')]);

    
  

}