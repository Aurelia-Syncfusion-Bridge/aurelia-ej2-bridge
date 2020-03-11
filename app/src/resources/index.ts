import { PLATFORM } from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';

export * from './tab-component/index';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./tab-component/tabs'), 
    PLATFORM.moduleName('./tab-component/tab-header'),
    PLATFORM.moduleName('./monaco-editor/monaco-editor')]);
}