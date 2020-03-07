import { EjCheckBoxModel } from './ej-check-box-model';
import {
  bindable,
  autoinject,
  inlineView,
  customElement,
  TaskQueue,
  bindingMode,
} from 'aurelia-framework';
import { CheckBox, CheckBoxModel } from '@syncfusion/ej2-buttons';

@autoinject
@customElement('ej-checkbox')
@inlineView('<template><input type="checkbox"  name.bind="name" checked.bind="checked" value.bind="value" disabled.bind="disabled"/></template>')
export class EjCheckbox extends EjCheckBoxModel implements CheckBoxModel {


  constructor(private element: Element) {
    super();
  }

  attached() {
    this._wrapped = new CheckBox({
      change: this.change,
      checked: this.checked,
      cssClass: this.cssClass,
      disabled: this.disabled,
      enableHtmlSanitizer: this.enableHtmlSanitizer,
      enablePersistence: this.enablePersistence,
      enableRtl: this.enableRtl,
      htmlAttributes: this.htmlAttributes,
      indeterminate: this.indeterminate,
      label: this.label,
      labelPosition: this.labelPosition,
      locale: this.locale,
      name: this.name,
      value: this.value
    }, this.element.querySelector('input'));

  }

  detached() {
    this._wrapped.destroy();
  }

}
