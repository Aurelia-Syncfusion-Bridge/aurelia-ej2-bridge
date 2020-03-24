import { EmitType } from '@syncfusion/ej2-base';
import { EjComponentModel } from "@aurelia-ej2-bridge/base";
import { DataMatrixGeneratorModel, DataMatrixGenerator, MarginModel, DisplayTextModel, DataMatrixEncoding, DataMatrixSize, RenderingMode } from "@syncfusion/ej2-barcode-generator";
import { bindable, bindingMode } from 'aurelia-framework';

export abstract class EjDataMatrixGeneratorModel extends EjComponentModel<DataMatrixGenerator> implements DataMatrixGeneratorModel {


    /**
     * Defines encoding type of the DataMatrix.
     * @default 'Auto'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    encoding?: DataMatrixEncoding;

    /**
     * Defines encoding type of the DataMatrix.
     * @default 'Auto'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    size?: DataMatrixSize;

    /**
     * Defines the DataMatrix rendering mode.
     * * SVG - Renders the bar-code objects as SVG elements
     * * Canvas - Renders the bar-code in a canvas
     * @default 'SVG'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    mode?: RenderingMode;

    /**
     * Defines the value of the DataMatrix to be rendered.
     * @default undefined
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    value?: string;

    /**
     * Defines the height of the DataMatrix.
     * @default '100%'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    height?: string | number;

    /**
     * Defines the width of the DataMatrix.
     * @default '100%'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    width?: string | number;

    /**
     * Defines the text properties for the DataMatrix.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    displayText?: DisplayTextModel;

    /**
     * Defines the margin properties for the DataMatrix.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    margin?: MarginModel;

    /**
     * Defines the background color of the DataMatrix.
     * @default 'white'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    backgroundColor?: string;

    /**
     * Triggers if we entered any invalid character
     * @event
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    invalid?: EmitType<Object>;

    /**
     * Defines the forecolor of the DataMatrix.
     * @default 'black'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    foreColor?: string;

    /**
     * Defines the xDimension of the DataMatrix.
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    xDimension?: number;
}