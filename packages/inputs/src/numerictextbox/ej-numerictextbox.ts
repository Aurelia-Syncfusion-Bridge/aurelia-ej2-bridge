import { autoinject, inlineView, customElement } from 'aurelia-framework';
import { EjNumericTextBoxModel } from "./ej-numerictextbox-model";
import { NumericTextBoxModel, NumericTextBox } from "@syncfusion/ej2-inputs";

@autoinject
@customElement('ej-numeric-textbox')
@inlineView('<template><input/></template>')
export class EjNumericTextBox extends EjNumericTextBoxModel implements NumericTextBoxModel {

  // tslint:disable-next-line: no-parameter-properties
  constructor(private element: Element) {
    super();
  }

  attached() {
    this._wrapped = new NumericTextBox({

      blur: this.blur,
      change: this.change,
      cssClass: this.cssClass,
      currency: this.currency,
      currencyCode: this.currencyCode,
      decimals: this.decimals,
      destroyed: this.destroyed,
      enablePersistence: this.enablePersistence,
      enableRtl: this.enableRtl,
      enabled: this.enabled,
      floatLabelType: this.floatLabelType,
      focus: this.focus,
      format: this.format,
      htmlAttributes: this.htmlAttributes,
      locale: this.locale,
      max: +this.max,
      min: +this.min,
      placeholder: this.placeholder,
      readonly: this.readonly,
      showClearButton: this.showClearButton,
      showSpinButton: this.showSpinButton,
      step: +this.step,
      strictMode: this.strictMode,
      validateDecimalOnType: this.validateDecimalOnType,
      value: this.value,
      width: this.width
    },
    this.element.querySelector('input'));

    this._wrapped.change = (e) => {
      this.value = this._wrapped.value;
    };
  }

  detached() {
    this._wrapped.destroy();
  }
}
