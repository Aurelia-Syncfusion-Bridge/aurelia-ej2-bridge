import { Loader, DOM, PLATFORM } from 'aurelia-framework';
import {registerLanguage} from 'highlight.js';
import {Hljs} from './hljs';

export class ConfigBuilder {

    static inject = [Loader];

    constructor(private loader: Loader) {}

    useAllLanguages(): ConfigBuilder {
        this.loader.loadModule(PLATFORM.moduleName('highlight.js/lib/highlight'));
        return this;
    }

    useLanguage(language: string): ConfigBuilder {
        this.loader.loadModule(PLATFORM.moduleName("highlight.js/lib/languages/" + language))
            .then(languageModule => registerLanguage(language, languageModule));
        return this;
    }

    setDefaultTheme() {
        this.loader.loadText(PLATFORM.moduleName("highlight.js/styles/vs2015.css")).then(text => {
            let oldStyleHeader: Node = Hljs.styleHeader;
            Hljs.styleHeader = DOM.injectStyles(text);
            if (oldStyleHeader == null) {
                document.getElementsByTagName("head")[0].appendChild(Hljs.styleHeader);
            }
        });
    }
}