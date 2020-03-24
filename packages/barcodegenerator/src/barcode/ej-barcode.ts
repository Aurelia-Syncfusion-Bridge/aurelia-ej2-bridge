import { BarcodeGeneratorModel } from '@syncfusion/ej2-barcode-generator';
import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';
import { autoinject, customElement, inlineView } from "aurelia-framework";
import { EjBarcodGeneratorModel } from "./ej-barcode-model";
import { EjComponentModel } from "@aurelia-ej2-bridge/base";

@autoinject
@customElement('ej-barcode')
@inlineView(`<template><div></div></template>`)
export class EjBarcode extends EjBarcodGeneratorModel implements BarcodeGeneratorModel {

    constructor(private element: Element) {
        super();
    }

    attached() {
        this._wrapped = new BarcodeGenerator({
            backgroundColor: this.backgroundColor,
            displayText: this.displayText,
            enableCheckSum: this.enableCheckSum,
            enablePersistence: this.enablePersistence,
            enableRtl: this.enableRtl,
            foreColor: this.foreColor,
            height: this.height,
            invalid: this.invalid,
            locale:this.locale,
            margin: this.margin,
            mode: this.mode,
            type: this.type,
            value: this.value,
            width: this.width
        }, this.element.querySelector('div'));
    }
}