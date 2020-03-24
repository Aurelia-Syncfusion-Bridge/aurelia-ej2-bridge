import { EmitType } from '@syncfusion/ej2-base';
import { EjComponentModel } from "@aurelia-ej2-bridge/base";
import { QRCodeGenerator, QRCodeGeneratorModel, DisplayTextModel, QRCodeVersion, RenderingMode, ErrorCorrectionLevel, MarginModel } from "@syncfusion/ej2-barcode-generator";
import { bindable, bindingMode } from 'aurelia-framework';

export abstract class EjQRCodeGeneratorModel extends EjComponentModel<QRCodeGenerator> implements QRCodeGeneratorModel {

       /**
     * Defines the height of the QR code model.
     * @default '100%'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    height?: string | number;

    /**
     * Defines the width of the QR code model.
     * @default '100%'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    width?: string | number;

    /**
     * Defines the QR code rendering mode.
     * * SVG - Renders the bar-code objects as SVG elements
     * * Canvas - Renders the bar-code in a canvas
     * @default 'SVG'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    mode?: RenderingMode;

    /**
     * Defines the xDimension of the QR code model.
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    xDimension?: number;

    /**
     * Defines the error correction level of the QR code.
     * @blazorDefaultValueIgnore
     * @aspDefaultValueIgnore
     * @aspNumberEnum 
     * @blazorNumberEnum
     * @default undefined
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    errorCorrectionLevel?: ErrorCorrectionLevel;

    /**
     * Defines the margin properties for the QR code.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    margin?: MarginModel;

    /**
     * Defines the background color of the QR code.
     * @default 'white'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    backgroundColor?: string;

    /**
     * Triggers if you enter any invalid character.
     * @event
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    invalid?: EmitType<Object>;

    /**
     * Defines the forecolor of the QR code.
     * @default 'black'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    foreColor?: string;

    /**
     * Defines the text properties for the QR code.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    displayText?: DisplayTextModel;

    /**
     * * Defines the version of the QR code.
     * @aspDefaultValueIgnore
     * @blazorNumberEnum
     * @blazorDefaultValueIgnore
     * @aspNumberEnum 
     * @default undefined
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    version?: QRCodeVersion;

    /**
     * Defines the type of barcode to be rendered.
     * @default undefined
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value?: string;
}