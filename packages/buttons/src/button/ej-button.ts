import { EjButtonModel } from './ej-button-model';
import { bindable, autoinject, inlineView } from 'aurelia-framework';
import { Button, ButtonModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

@autoinject
@inlineView('<template><button></button></template>')
export class EjButton extends EjButtonModel implements ButtonModel {

  @bindable public primary: boolean | string = false;
  primaryChanged(value: any) {
    if (this._wrapped) {
      (<Button>this._wrapped).isPrimary = this.primary === true || this.primary === 'true';
    }
  }

  @bindable public toggle: boolean | string = false;
  toggleChanged(value: any) {
    if (this._wrapped) {
      (<Button>this._wrapped).isToggle = this.toggle === true || this.toggle  === 'true';
    }
  }
  @bindable public enabled: boolean | string = true;
  enabledChanged(value: any) {
    if (this._wrapped) {
      this._wrapped.disabled = !(this.enabled === true || this.enabled === 'true');
    }
  }

  // tslint:disable-next-line: no-parameter-properties
  constructor(private element: Element) {
    super();
  }

  attached() {
    enableRipple(true);
    this._wrapped = new Button({
        content: this.content,
        cssClass: this.cssClass,
        disabled: !(this.enabled === true || this.enabled === 'true'),
        enableHtmlSanitizer: this.enableHtmlSanitizer,
        enablePersistence: this.enablePersistence,
        enableRtl: this.enableRtl,
        iconCss: this.iconCss,
        iconPosition: this.iconPosition,
        isPrimary: this.primary === true || this.primary === 'true',
        isToggle: this.isToggle === true || this.toggle === 'true',
        locale: this.locale
      },
      this.element.querySelector('button'));


  }

  detached() {
    this._wrapped.destroy();
  }
}
