import {FrameworkConfiguration} from 'aurelia-framework';
import {ConfigBuilder} from './config-builder';

export function configure(aurelia: FrameworkConfiguration, configCallback?: (builder: ConfigBuilder) => void) {
    const builder: ConfigBuilder = aurelia.container.get(ConfigBuilder);
    builder.setDefaultTheme();
    if (configCallback && configCallback instanceof Function) {
        configCallback(builder);
    } else {
        builder.useAllLanguages();
    }
}


export * from './hljs';
