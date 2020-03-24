import { DataMatrixGeneratorModel, DataMatrixGenerator } from "@syncfusion/ej2-barcode-generator";
import { EjDataMatrixGeneratorModel } from ".";
import { autoinject, customElement, inlineView } from "aurelia-framework";

@autoinject
@customElement('ej-datamatrix')
@inlineView(`<template><div></div></template>`)
export class EjDataMatrixGenerator extends EjDataMatrixGeneratorModel implements DataMatrixGeneratorModel {

    constructor(private element: Element) {
        super();
    }

    attached() {
        this._wrapped = new DataMatrixGenerator({
            backgroundColor: this.backgroundColor,
            displayText: this.displayText,
            enablePersistence: this.enablePersistence,
            enableRtl: this.enableRtl,
            encoding: this.encoding,
            foreColor: this.foreColor,
            height: this.height,
            invalid: this.invalid,
            locale:this.locale,
            margin: this.margin,
            mode: this.mode,
            size: this.size,
            value: this.value,
            width: this.width,
            xDimension: this.xDimension
        }, this.element.querySelector('div'));
    }

    detached() {
        this._wrapped.destroy();
    }
}