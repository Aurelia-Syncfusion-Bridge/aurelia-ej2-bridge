import { QRCodeGeneratorModel, QRCodeGenerator } from "@syncfusion/ej2-barcode-generator";
import { EjQRCodeGeneratorModel } from "./ej-qrcode-model";
import { autoinject, customElement, inlineView } from "aurelia-framework";


@autoinject
@customElement('ej-qrcode')
@inlineView(`<template><div></div></template>`)
export class EjQRCodeGenerator extends EjQRCodeGeneratorModel implements QRCodeGeneratorModel {

    constructor(private element: Element) {
        super();
    }

    attached() {
        this._wrapped = new QRCodeGenerator({
            backgroundColor: this.backgroundColor,
            displayText: this.displayText,
            enablePersistence: this.enablePersistence,
            enableRtl: this.enableRtl,
            errorCorrectionLevel: this.errorCorrectionLevel,
            foreColor: this.foreColor,
            height: this.height,
            invalid: this.invalid,
            locale:this.locale,
            margin: this.margin,
            mode: this.mode,
            value: this.value,
            version: this.version,
            width: this.width,
            xDimension: this.xDimension
        }, this.element.querySelector('div'));
    }

    detached() {
        this._wrapped.destroy();
    }
}