import { bindable, bindingMode } from 'aurelia-framework';
import { EmitType } from '@syncfusion/ej2-base';
import { FloatLabelType } from '@syncfusion/ej2-inputs';
import { ChangeEventArgs, NumericFocusEventArgs, NumericBlurEventArgs, NumericTextBox, NumericTextBoxModel } from '@syncfusion/ej2-inputs';
import { EjComponentModel } from '@aurelia-ej2-bridge/base';

/**
 * Interface for a class NumericTextBox
 */
export abstract class EjNumericTextBoxModel extends EjComponentModel<NumericTextBox> implements NumericTextBoxModel{

    /**
     * Gets or Sets the CSS classes to root element of the NumericTextBox which helps to customize the
     * complete UI styles for the NumericTextBox component.
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    cssClass?: string;

    /**
     * Sets the value of the NumericTextBox.
     * @default null
     * @aspType object
     * @isGenericType true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value?: number;

    /**
     * Specifies a minimum value that is allowed a user can enter.
     * For more information on min, refer to
     * [min](../../numerictextbox/getting-started/#range-validation).
     * @default null
     * @aspType object
     * @isGenericType true
     * @blazorDefaultValue EjsBase.GetNumericValue<TValue>("MinValue")
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    min?: number;

    /**
     * Specifies a maximum value that is allowed a user can enter.
     * For more information on max, refer to
     * [max](../../numerictextbox/getting-started/#range-validation).
     * @default null
     * @aspType object
     * @isGenericType true
     * @blazorDefaultValue EjsBase.GetNumericValue<TValue>("MaxValue")
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    max?: number;

    /**
     * Specifies the incremental or decremental step size for the NumericTextBox.
     * For more information on step, refer to
     * [step](../../numerictextbox/getting-started/#range-validation).
     * @default 1
     * @isGenericType true
     * @blazorDefaultValue EjsBase.GetNumericValue<TValue>("Step")
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    step?: number;

    /**
     * Specifies the width of the NumericTextBox.
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
     * Gets or sets the string shown as a hint/placeholder when the NumericTextBox is empty.
     * It acts as a label and floats above the NumericTextBox based on the
     * <b><a href="#floatlabeltype" target="_blank">floatLabelType.</a></b>
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    placeholder?: string;

    /**
     * You can add the additional html attributes such as disabled, value etc., to the element.
     * If you configured both property and equivalent html attribute then the component considers the property value.
     * @default {}
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    htmlAttributes?: { [key: string]: string; };

    /**
     * Specifies whether the up and down spin buttons should be displayed in NumericTextBox.
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    showSpinButton?: boolean;

    /**
     * Sets a value that enables or disables the readonly state on the NumericTextBox. If it is true,
     * NumericTextBox will not allow your input.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    readonly?: boolean;

    /**
     * Sets a value that enables or disables the NumericTextBox control.
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enabled?: boolean;

    /**
     * Specifies whether to show or hide the clear icon.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    showClearButton?: boolean;

    /**
     * Enable or disable persisting NumericTextBox state between page reloads. If enabled, the `value` state will be persisted.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enablePersistence?: boolean;

    /**
     * Specifies the number format that indicates the display format for the value of the NumericTextBox.
     * For more information on formats, refer to
     * [formats](../../numerictextbox/formats/#standard-formats).
     * @default 'n2'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    format?: string;

    /**
     * Specifies the number precision applied to the textbox value when the NumericTextBox is focused.
     * For more information on decimals, refer to
     * [decimals](../../numerictextbox/formats/#precision-of-numbers).
     * @default null
     * @isBlazorNullableType true
     * @blazorDefaultValue
     * @blazorType int
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    decimals?: number;

    /**
     * Specifies the currency code to use in currency formatting.
     * Possible values are the ISO 4217 currency codes, such as 'USD' for the US dollar,'EUR' for the euro.
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    currency?: string;

    /**
     * Specifies the currency code to use in currency formatting.
     * Possible values are the ISO 4217 currency codes, such as 'USD' for the US dollar,'EUR' for the euro.
     * @default null
     * @private
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    currencyCode?: string;

    /**
     * Specifies a value that indicates whether the NumericTextBox control allows the value for the specified range.
     * * If it is true, the input value will be restricted between the min and max range.
     * The typed value gets modified to fit the range on focused out state.
     * ```html
     * <input type='text' id="numeric"/>
     * ```
     * ```typescript
     * <script>
     *   var numericObj = new NumericTextBox({ min: 10, max: 20, value: 15 });
     *   numericObj.appendTo("#numeric");
     * </script>
     * ```
     * * Else, it allows any value even out of range value,
     * At that time of wrong value entered, the error class will be added to the component to highlight the error.
     * ```html
     * <input type='text' id="numeric"/>
     * ```
     * ```typescript
     * <script>
     *   var numericObj = new NumericTextBox({ strictMode: false, min: 10, max: 20, value: 15 });
     *   numericObj.appendTo("#numeric");
     * </script>
     * ```
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    strictMode?: boolean;

    /**
     * Specifies whether the decimals length should be restricted during typing.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    validateDecimalOnType?: boolean;

    /**
     * The <b><a href="#placeholder" target="_blank">placeholder</a></b> acts as a label
     * and floats above the NumericTextBox based on the below values.
     * Possible values are:
     * * `Never` - Never floats the label in the NumericTextBox when the placeholder is available.
     * * `Always` - The floating label always floats above the NumericTextBox.
     * * `Auto` - The floating label floats above the NumericTextBox after focusing it or when enters the value in it.
     * @default Never
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    floatLabelType?: FloatLabelType;

    /**
     * Triggers when the NumericTextBox component is created.
     * @event
     * @blazorProperty 'Created'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    created?: EmitType<Object>;

    /**
     * Triggers when the NumericTextBox component is destroyed.
     * @event
     * @blazorProperty 'Destroyed'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    destroyed?: EmitType<Object>;

    /**
     * Triggers when the value of the NumericTextBox changes.
     * @event
     * @blazorProperty 'ValueChange'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    change?: EmitType<ChangeEventArgs> ;
    // = (e) => {
    //    this._wrapped.value = e.value;
    // }

    /**
     * Triggers when the NumericTextBox got focus in.
     * @event
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    focus?: EmitType<NumericFocusEventArgs>;

    /**
     * Triggers when the NumericTextBox got focus out.
     * @event
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    blur?: EmitType<NumericBlurEventArgs>;

}
