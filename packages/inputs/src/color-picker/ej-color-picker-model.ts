import { EmitType } from '@syncfusion/ej2-base';
import { ColorPickerModel, ColorPickerMode, ColorPickerEventArgs, PaletteTileEventArgs, BeforeOpenCloseEventArgs, OpenEventArgs, ModeSwitchEventArgs, ColorPicker } from "@syncfusion/ej2-inputs";
import { EjComponentModel } from '@aurelia-ej2-bridge/base';
import { bindable } from 'aurelia-framework';
import { bindingMode } from 'aurelia-binding';


export abstract class EjColorPickerModel extends EjComponentModel<ColorPicker> implements ColorPickerModel {

        /**
     * It is used to set the color value for ColorPicker. It should be specified as Hex code.
     * @default '#008000ff'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value?: string;

    /**
     * This property sets the CSS classes to root element of the ColorPicker
     *  which helps to customize the UI styles.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    cssClass?: string;

    /**
     * It is used to enable / disable ColorPicker component. If it is disabled the ColorPicker popup won’t open.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    disabled?: boolean;

    /**
     * It is used to render the ColorPicker with the specified mode.
     * @default 'Picker'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    mode?: ColorPickerMode;

    /**
     * It is used to show / hide the mode switcher button of ColorPicker component.
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    modeSwitcher?: boolean;

    /**
     * It is used to load custom colors to palette.
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    presetColors?: { [key: string]: string[] };

    /**
     * It is used to show / hide the control buttons (apply / cancel) of  ColorPicker component.
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    showButtons?: boolean;

    /**
     * It is used to render the ColorPicker palette with specified columns.
     * @default 10
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    columns?: number;

    /**
     * It is used to render the ColorPicker component as inline.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    inline?: boolean;

    /**
     * It is used to enable / disable the no color option of ColorPicker component.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    noColor?: boolean;

    /**
     * To enable or disable persisting component's state between page reloads and it is extended from component class.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enablePersistence?: boolean;

    /**
     * It is used to enable / disable the opacity option of ColorPicker component.
     * @default true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enableOpacity?: boolean;

    /**
     * Triggers while selecting the color in picker / palette, when showButtons property is enabled.
     * @event
     * @blazorProperty 'Selected'
     */
    select?: EmitType<ColorPickerEventArgs>;

    /**
     * Triggers while changing the colors. It will be triggered based on the showButtons property.
     * If the property is false, the event will be triggered while selecting the colors.
     * If the property is true, the event will be triggered while apply the selected color.
     * @event
     * @blazorProperty 'ValueChange'
     */
    change?: EmitType<ColorPickerEventArgs>;

    /**
     * Trigger while rendering each palette tile.
     * @event 
     * @blazorProperty 'OnTileRender'
     */
    beforeTileRender?: EmitType<PaletteTileEventArgs>;

    /**
     * Triggers before opening the ColorPicker popup.
     * @event
     * @blazorProperty 'OnOpen'
     */
    beforeOpen?: EmitType<BeforeOpenCloseEventArgs>;

    /**
     * Triggers while opening the ColorPicker popup.
     * @event
     * @blazorProperty 'Opened'
     */
    open?: EmitType<OpenEventArgs>;

    /**
     * Triggers before closing the ColorPicker popup.
     * @event
     * @blazorProperty 'OnClose'
     */
    beforeClose?: EmitType<BeforeOpenCloseEventArgs>;

    /**
     * Triggers before Switching between ColorPicker mode.
     * @event
     * @blazorProperty 'OnModeSwitch'
     */
    beforeModeSwitch?: EmitType<ModeSwitchEventArgs>;

    /**
     * Triggers after Switching between ColorPicker mode.
     * @event
     * @blazorProperty 'ModeSwitched'
     */
    onModeSwitch?: EmitType<ModeSwitchEventArgs>;

    /**
     * Triggers once the component rendering is completed.
     * @event
     * @blazorProperty 'Created'
     */
    created?: EmitType<Event>;
}