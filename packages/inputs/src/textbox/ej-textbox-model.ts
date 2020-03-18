import { bindable, bindingMode } from 'aurelia-framework';
import { EmitType } from "@syncfusion/ej2-base";
import { FocusInEventArgs, FocusOutEventArgs, ChangedEventArgs, InputEventArgs, FloatLabelType, TextBoxModel, TextBox } from "@syncfusion/ej2-inputs";
import { EjComponentModel } from '@aurelia-ej2-bridge/base';

export abstract class EjTextBoxModel extends EjComponentModel<TextBox> implements TextBoxModel {

  /**
   * Specifies the behavior of the TextBox such as text, password, email, etc.
   * @default 'text'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  type?: string = 'text';

  /**
   * Specifies the boolean value whether the TextBox allows user to change the text.
   * @default false
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  readonly?: boolean;

  /**
   * Sets the content of the TextBox.
   * @default null
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  value?: string;

  /**
   * Specifies the floating label behavior of the TextBox that the placeholder text floats above the TextBox based on the below values.
   * Possible values are:
   * * `Never` - The placeholder text should not be float ever.
   * * `Always` - The placeholder text floats above the TextBox always.
   * * `Auto` - The placeholder text floats above the TextBox while focusing or enter a value in Textbox.
   * @default Never
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  floatLabelType?: FloatLabelType = 'Never';

  /**
   * Specifies the CSS class value that is appended to wrapper of Textbox.
   * @default ''
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  cssClass?: string = '';

  /**
   * Specifies the text that is shown as a hint/placeholder until the user focus or enter a value in Textbox.
   * The property is depending on the floatLabelType property.
   * @default null
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  placeholder?: string;

  /**
   * Specifies whether the browser is allow to automatically enter or select a value for the textbox.
   * By default, autocomplete is enabled for textbox.
   * Possible values are:
   * `on` - Specifies that autocomplete is enabled.
   * `off` - Specifies that autocomplete is disabled.
   * @default 'on'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  autocomplete?: string = 'on';

  /**
   * You can add the additional html attributes such as disabled, value etc., to the element.
   * If you configured both property and equivalent html attribute then the component considers the property value.
   * @default {}
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  htmlAttributes?: { [key: string]: string; };

  /**
   * Specifies a boolean value that enable or disable the multiline on the TextBox.
   * The TextBox changes from single line to multiline when enable this multiline mode.
   * @default false
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  multiline?: boolean;

  /**
   * Specifies a Boolean value that indicates whether the TextBox allow user to interact with it.
   * @default true
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  enabled?: boolean;
  enabledChanged(value: any) {
    if (this._wrapped) {
      this._wrapped.enabled = (value === true || value === 'true');
    }
  }

  /**
   * Specifies a Boolean value that indicates whether the clear button is displayed in Textbox.
   * @default false
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  showClearButton?: boolean;
  showClearButtonChanged(value: any) {
    if (this._wrapped) {
      this._wrapped.showClearButton = (value === true || value === 'true');
    }
  }

  /**
   * Enable or disable persisting TextBox state between page reloads. If enabled, the `value` state will be persisted.
   * @default false
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  enablePersistence?: boolean;

  /**
   * Specifies the width of the Textbox component.
   * @default null
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  width?: number | string;
  widthChanged(value: any) {
    if (this._wrapped) {
      this._wrapped.width = value;
    }
  }
  /**
   * Triggers when the TextBox component is created.
   * @event
   * @blazorProperty 'Created'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  created?: EmitType<Object>;

  /**
   * Triggers when the TextBox component is destroyed.
   * @event
   * @blazorProperty 'Destroyed'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  destroyed?: EmitType<Object>;

  /**
   * Triggers when the content of TextBox has changed and gets focus-out.
   * @event
   * @blazorProperty 'ValueChange'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  change?: EmitType<ChangedEventArgs>;

  /**
   * Triggers when the TextBox has focus-out.
   * @event
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  blur?: EmitType<FocusOutEventArgs>;

  /**
   * Triggers when the TextBox gets focus.
   * @event
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  focus?: EmitType<FocusInEventArgs>;

  /**
   * Triggers each time when the value of TextBox has changed.
   * @event
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  input?: EmitType<InputEventArgs>;

}
