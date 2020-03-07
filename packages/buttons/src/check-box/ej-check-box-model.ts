import { bindable, bindingMode } from 'aurelia-framework';
import { EmitType } from '@syncfusion/ej2-base';
import {LabelPosition, ChangeEventArgs, CheckBoxModel, CheckBox} from '@syncfusion/ej2-buttons';
import { EjComponentModel } from '../../base/ej-component-model';

/**
 * Interface for a class CheckBox
 */
export abstract class EjCheckBoxModel extends EjComponentModel<CheckBox> implements CheckBoxModel {

    /**
     * Triggers when the CheckBox state has been changed by user interaction.
     * @event
     * @blazorProperty 'ValueChange'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    change?: EmitType<ChangeEventArgs>;

    /**
     * Specifies a value that indicates whether the CheckBox is `checked` or not.
     * When set to `true`, the CheckBox will be in `checked` state.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    public checked?: boolean = false;
    checkedChanged(value: any) {
      if (this._wrapped) {
        this._wrapped.checked = value === true || value === 'true';
      }
    }

    /**
     * Defines class/multiple classes separated by a space in the CheckBox element.
     * You can add custom styles to the CheckBox by using this property.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    cssClass?: string;

    /**
     * Specifies a value that indicates whether the CheckBox is `disabled` or not.
     * When set to `true`, the CheckBox will be in `disabled` state.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    public get disabled() {
      return (<CheckBox>this._wrapped).disabled;
    }

    public set disabled(value: any) {
      (<CheckBox>this._wrapped).disabled = value === true || value === 'true';
    }

    private disabledChanged(newValue: boolean, oldValue: any) {
      if (this._wrapped) {
        (<CheckBox>this._wrapped).disabled = newValue;
      }
    }

    /**
     * Specifies a value that indicates whether the CheckBox is in `indeterminate` state or not.
     * When set to `true`, the CheckBox will be in `indeterminate` state.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    indeterminate?: boolean;

    /**
     * Defines the caption for the CheckBox, that describes the purpose of the CheckBox.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    public label?: string;
    labelChanged(newValue) {
      if (this._wrapped) {
        (<CheckBox>this._wrapped).label = newValue;
      }
    }

    /**
     * Positions label `before`/`after` the CheckBox.
     * The possible values are:
     * * Before - The label is positioned to left of the CheckBox.
     * * After - The label is positioned to right of the CheckBox.
     * @default 'After'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    labelPosition?: LabelPosition;

    /**
     * Defines `name` attribute for the CheckBox.
     * It is used to reference form data (CheckBox value) after a form is submitted.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    name?: string;

    /**
     * Defines `value` attribute for the CheckBox.
     * It is a form data passed to the server when submitting the form.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value?: string;
    private valueChanged(newValue: any) {
        if (this._wrapped) {
          (<CheckBox>this._wrapped).value = newValue;
        }
    }
    /**
     * Defines whether to allow the cross-scripting site or not.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enableHtmlSanitizer?: boolean;

    /**
     * You can add the additional html attributes such as disabled, value etc., to the element.
     * If you configured both property and equivalent html attribute then the component considers the property value.
     * @default {}
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    htmlAttributes?: { [key: string]: string; };

}
