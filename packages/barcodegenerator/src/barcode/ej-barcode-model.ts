import { EmitType } from '@syncfusion/ej2-base';
import { EjComponentModel } from '@aurelia-ej2-bridge/base';
import { BarcodeGenerator, BarcodeGeneratorModel, MarginModel, DisplayTextModel, RenderingMode, BarcodeType } from "@syncfusion/ej2-barcode-generator";
import { bindable, bindingMode } from 'aurelia-framework';

export abstract class EjBarcodGeneratorModel extends EjComponentModel<BarcodeGenerator> implements BarcodeGeneratorModel {

    /**
     * Defines the width of the barcode model.
     * ```html
     * <div id='barcode'/>
     * ```
     * ```typescript
     * let barcode: Barcode = new Barcode({
     * width:'1000px', height:'500px' });
     * barcode.appendTo('#barcode');
     * ```
     * @default '100%'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    width?: string | number;

    /**
     * Defines the height of the barcode model.
     * ```html
     * <div id='barcode'/>
     * ```
     * ```typescript
     * let barcode: Barcode = new Barcode({
     * height:'1000px', height:'500px' });
     * barcode.appendTo('#barcode');
     * ```
     * @default '100'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    height?: string | number;

    /**
     * Defines the barcode rendering mode.
     * * SVG - Renders the bar-code objects as SVG elements
     * * Canvas - Renders the bar-code in a canvas
     * @default 'SVG'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    mode?: RenderingMode;

    /**
     * Defines the type of barcode to be rendered.
     * @default 'Code128'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    type?: BarcodeType;

    /**
     * Defines the value of the barcode to be rendered.
     * @default undefined
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value?: string;

    /**
     * Defines the checksum for the barcode.
     * @default 'true'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enableCheckSum?: boolean;

    /**
     * Defines the text properties for the barcode.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    displayText?: DisplayTextModel;

    /**
     * Defines the margin properties for the barcode.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    margin?: MarginModel;

    /**
     * Defines the background color of the barcode.
     * @default 'white'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    backgroundColor?: string;

    /**
     * Defines the forecolor of the barcode.
     * @default 'black'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    foreColor?: string;

    /**
     * Triggers if you enter any invalid character.
     * @event
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    invalid?: EmitType<Object>;   
}