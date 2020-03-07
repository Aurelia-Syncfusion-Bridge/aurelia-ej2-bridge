import { bindable, bindingMode } from 'aurelia-framework';
import { EmitType } from '@syncfusion/ej2-base';
import { Switch, SwitchModel, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { EjComponentModel } from '../../base/ej-component-model';

/**
 * Interface for a class Switch
 */
export class EjSwitchModel extends EjComponentModel<Switch> implements SwitchModel{

    /**
     * Triggers when Switch state has been changed by user interaction.
     * @event
     * @blazorProperty 'ValueChange'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    change?: EmitType<ChangeEventArgs>;

    /**
     * Specifies a value that indicates whether the Switch is `checked` or not.
     * When set to `true`, the Switch will be in `checked` state.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    checked?: boolean;
    checkedChanged(value: any) {
      if (this._wrapped) {
        this._wrapped.checked = value === true || value === 'true';
      }
    }


    /**
     * You can add custom styles to the Switch by using this property.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    cssClass?: string;

    /**
     * Specifies a value that indicates whether the Switch is `disabled` or not.
     * When set to `true`, the Switch will be in `disabled` state.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    disabled?: boolean;

    /**
     * Defines `name` attribute for the Switch.
     * It is used to reference form data (Switch value) after a form is submitted.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    name?: string;

    /**
     * Specifies a text that indicates the Switch is in checked state.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    onLabel?: string;

    /**
     * Specifies a text that indicates the Switch is in unchecked state.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    offLabel?: string;

    /**
     * Defines `value` attribute for the Switch.
     * It is a form data passed to the server when submitting the form.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value?: string;

}
