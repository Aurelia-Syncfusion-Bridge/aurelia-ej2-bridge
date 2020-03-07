import { bindable, bindingMode } from 'aurelia-framework';
import { EmitType } from '@syncfusion/ej2-base';
import { RadioButtonModel, ChangeArgs, RadioLabelPosition, RadioButton } from '@syncfusion/ej2-buttons';
import { EjComponentModel } from '../../base/ej-component-model';


/**
 * Interface for a class RadioButton
 */
export abstract class EjRadioButtonModel extends EjComponentModel<RadioButton> implements RadioButtonModel{

    /**
     * Event trigger when the RadioButton state has been changed by user interaction.
     * @event
     * @blazorProperty 'ValueChange'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    change?: EmitType<ChangeArgs>;

    /**
     * Specifies a value that indicates whether the RadioButton is `checked` or not.
     * When set to `true`, the RadioButton will be in `checked` state.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    checked?: boolean;

    /**
     * Defines class/multiple classes separated by a space in the RadioButton element.
     * You can add custom styles to the RadioButton by using this property.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    cssClass?: string;

    /**
     * Specifies a value that indicates whether the RadioButton is `disabled` or not.
     * When set to `true`, the RadioButton will be in `disabled` state.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    disabled?: boolean;

    /**
     * Defines the caption for the RadioButton, that describes the purpose of the RadioButton.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    label?: string;

    /**
     * Positions label `before`/`after` the RadioButton.
     * The possible values are:
     * * Before: The label is positioned to left of the RadioButton.
     * * After: The label is positioned to right of the RadioButton.
     * @default 'After'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    labelPosition?: RadioLabelPosition;

    /**
     * Defines `name` attribute for the RadioButton.
     * It is used to reference form data (RadioButton value) after a form is submitted.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    name?: string;

    /**
     * Defines `value` attribute for the RadioButton.
     * It is a form data passed to the server when submitting the form.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value?: string;

    /**
     * Defines whether to allow the cross-scripting site or not.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enableHtmlSanitizer?: boolean;

}
