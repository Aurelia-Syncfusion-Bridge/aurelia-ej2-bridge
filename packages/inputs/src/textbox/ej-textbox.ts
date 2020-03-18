import { customElement, bindable, autoinject, inlineView } from 'aurelia-framework';
import { EjTextBoxModel } from './ej-textbox-model';
import { TextBoxModel, TextBox } from '@syncfusion/ej2-inputs';

@autoinject
@customElement('ej-textbox')
@inlineView('<template><input value.two-way="value"></input></template>')
export class EjTextbox extends EjTextBoxModel implements TextBoxModel {

  constructor(private element: Element) {
    super();
  }

  attached() {
    this._wrapped = new TextBox({
      autocomplete: this.autocomplete,
      //blur: this.blur,
      //change: this.change,
      cssClass: this.cssClass,
      destroyed: this.destroyed,
      enablePersistence: this.enablePersistence,
      enableRtl: this.enableRtl,
      enabled: this.enabled,
      floatLabelType: this.floatLabelType,
      focus: this.focus,
      htmlAttributes: this.htmlAttributes,
      input: this.input,
      locale: this.locale,
      multiline: this.multiline,
      placeholder: this.placeholder,
      readonly: this.readonly,
      showClearButton: this.showClearButton,
      type: this.type,
      value: this.value,
      width: this.width
    }, this.element.querySelector('input'));

    this._wrapped.input = (e) => {
      if (this.showClearButton
          && (<HTMLElement>e.event.target).tagName.toLowerCase() === 'span'
          && e.event.type === 'mousedown') {

        this.value = '';

      }
    };

  }

  detached() {
    this._wrapped.destroy();
  }
}
