import { enableRipple } from '@syncfusion/ej2-base';
import { EjSwitchModel } from './ej-switch-model';
import { SwitchModel, Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { customElement, bindable, autoinject, inlineView } from 'aurelia-framework';

@autoinject
@customElement('ej-switch')
@inlineView('<template><input type="checkbox" name.bind="name" checked.bind="checked" value.bind="value" disabled.bind="disabled"/></template>')
export class EjSwitch extends EjSwitchModel implements SwitchModel {

  @bindable public enabled: boolean | string = true;


  // tslint:disable-next-line: no-parameter-properties
  constructor(private element: Element) {
    super();
  }

  attached() {

    this.change = (e: ChangeEventArgs) => {
      this.checked = e.checked;
    };

    this._wrapped = new Switch({
      change: this.change,
      checked: this.checked,
      cssClass: this.cssClass,
      disabled: !(this.enabled === true || this.enabled === 'true'),
      enablePersistence: this.enablePersistence,
      enableRtl: this.enableRtl,
      locale: this.locale,
      offLabel: this.offLabel,
      name: this.name,
      onLabel: this.onLabel,
      value: this.value
    },
      this.element.querySelector('input'));
  }

}
