import { inlineView, autoinject, customElement } from 'aurelia-framework';
import { EjMaskedTextBoxModel } from './ej-masked-textbox-model';
import { MaskedTextBoxModel, MaskedTextBox } from '@syncfusion/ej2-inputs';

@autoinject
@customElement('ej-masked-textbox')
@inlineView('<template><input/></template>')
export class EjMaskedTextBox extends EjMaskedTextBoxModel implements MaskedTextBoxModel {

  // tslint:disable-next-line: no-parameter-properties
  constructor(private element: Element) {
    super();
  }

  attached() {
    this._wrapped = new MaskedTextBox({
      blur: this.blur,
      change: this.change,
      cssClass: this.cssClass,
      customCharacters: this.customCharacters,
      destroyed: this.destroyed,
      enablePersistence: this.enablePersistence,
      enableRtl: this.enableRtl,
      enabled: this.enabled,
      floatLabelType: this.floatLabelType,
      focus: this.focus,
      htmlAttributes: this.htmlAttributes,
      locale: this.locale,
      mask: this.mask,
      promptChar: this.promptChar,
      placeholder: this.placeholder,
      readonly: this.readonly,
      showClearButton: this.showClearButton,
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
