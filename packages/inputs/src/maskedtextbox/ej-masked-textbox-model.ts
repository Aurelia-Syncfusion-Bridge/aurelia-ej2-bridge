import { bindable, bindingMode } from 'aurelia-framework';
import { EmitType } from '@syncfusion/ej2-base';
import { FloatLabelType, MaskChangeEventArgs, MaskFocusEventArgs, MaskBlurEventArgs, MaskedTextBoxModel, MaskedTextBox} from "@syncfusion/ej2-inputs";
import { EjComponentModel } from '@aurelia-ej2-bridge/base';

/**
 * Interface for a class MaskedTextBox
 */
export abstract class EjMaskedTextBoxModel extends EjComponentModel<MaskedTextBox> implements MaskedTextBoxModel{

    /**
     * Gets or sets the CSS classes to root element of the MaskedTextBox which helps to customize the
     * complete UI styles for the MaskedTextBox component.
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    cssClass?: string;

    /**
     * Sets the width of the MaskedTextBox.
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    width?: number | string;

    /**
     * Gets or sets the string shown as a hint/placeholder when the MaskedTextBox is empty.
     * It acts as a label and floats above the MaskedTextBox based on the
     * <b><a href="#floatlabeltype" target="_blank">floatLabelType.</a></b>
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    placeholder?: string;

    /**
     * The <b><a href="#placeholder" target="_blank">placeholder</a></b> acts as a label
     * and floats above the MaskedTextBox based on the below values.
     * Possible values are:
     * * Never - The floating label will not be enable when the placeholder is available.
     * * Always - The floating label always floats above the MaskedTextBox.
     * * Auto - The floating label floats above the MaskedTextBox after focusing it or when enters the value in it.
     * @default Never
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    floatLabelType?: FloatLabelType;

    /**
     * You can add the additional html attributes such as disabled, value etc., to the element.
     * If you configured both property and equivalent html attribute then the component considers the property value.
     * @default {}
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    htmlAttributes?: { [key: string]: string; };

    /**
     * Sets a value that enables or disables the MaskedTextBox component.
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enabled?: boolean;

    /**
     * Specifies the boolean value whether the Masked TextBox allows the user to change the text.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    readonly?: boolean;

    /**
     * Specifies whether to show or hide the clear icon.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    showClearButton?: boolean;

    /**
     * Sets a value that enables or disables the persisting state of the MaskedTextBox after reloading the page.
     * If enabled, the 'value' state will be persisted.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enablePersistence?: boolean;

    /**
     * Sets a value that masks the MaskedTextBox to allow/validate the user input.
     * * Mask allows [`standard mask elements`](../../maskedtextbox/mask-configuration/#standard-mask-elements)
     * </b>, <b>[`custom characters`](../../maskedtextbox/mask-configuration/#custom-characters)</b> and
     * <b>[`regular expression`](../../maskedtextbox/mask-configuration/#regular-expression)</b> as mask
     * elements.
     * For more information on mask, refer to
     * [mask](../../maskedtextbox/mask-configuration/#standard-mask-elements).
     * * If the mask value is empty, the MaskedTextBox will behave as an input element with text type.
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    mask?: string;

    /**
     * Gets or sets a value that will be shown as a prompting symbol for the masked value.
     * The symbol used to show input positions in the MaskedTextBox.
     * For more information on prompt-character, refer to
     * [prompt-character](../../maskedtextbox/mask-configuration/#prompt-character).
     * @default '_'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    promptChar?: string;

    /**
     * Gets or sets the value of the MaskedTextBox. It is a raw value of the MaskedTextBox excluding literals
     * and prompt characters. By using `getMaskedValue` property, you can get the value of MaskedTextBox with the masked format.
     * ```html
     * <input id="mask" type="text" />
     * ```
     * ```typescript
     * <script>
     * var maskObj = new MaskedTextBox({ mask: "(999) 9999-999", value: "8674321756" });
     * maskObj.appendTo('#mask');
     * </script>
     * ```
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value?: string;

    /**
     * Sets the collection of values to be mapped for non-mask elements(literals)
     * which have been set in the mask of MaskedTextBox.
     * * In the below example, non-mask elements "P" accepts values
     * "P" , "A" , "p" , "a" and "M" accepts values "M", "m" mentioned in the custom characters collection.
     * ```html
     * <input id="mask" type="text" />
     * ```
     * ```typescript
     * <script>
     * var customChar = { P: 'P,A,p,a', M: 'M,m'};
     * var maskObj = new MaskedTextBox({ mask: "99 : 99 PM", customCharacters: customChar });
     * maskObj.appendTo('#mask');
     * </script>
     * ```
     * For more information on customCharacters, refer to
     * [customCharacters](../../maskedtextbox/mask-configuration/#custom-characters).
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    customCharacters?: { [x: string]: Object };

    /**
     * Triggers when the MaskedTextBox component is created.
     * @event
     * @blazorProperty 'Created'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    created?: EmitType<Object>;

    /**
     * Triggers when the MaskedTextBox component is destroyed.
     * @event
     * @blazorProperty 'Destroyed'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    destroyed?: EmitType<Object>;

    /**
     * Triggers when the value of the MaskedTextBox changes.
     * @event
     * @blazorProperty 'ValueChange'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    change?: EmitType <MaskChangeEventArgs>;

    /**
     * Triggers when the MaskedTextBox got focus in.
     * @event
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    focus?: EmitType<MaskFocusEventArgs>;

    /**
     * Triggers when the MaskedTextBox got focus out.
     * @event
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    blur?: EmitType<MaskBlurEventArgs>;

}
