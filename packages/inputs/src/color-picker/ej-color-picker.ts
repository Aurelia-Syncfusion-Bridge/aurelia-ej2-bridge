import { autoinject, customElement, inlineView, bindable, bindingMode } from "aurelia-framework";
import { EjColorPickerModel } from "./ej-color-picker-model";
import { ColorPickerModel, ColorPicker } from "@syncfusion/ej2-inputs";

@autoinject
@customElement('ej-color-picker')
@inlineView(`<template><input type="color"></template>`)
export class EjColorPicker extends EjColorPickerModel implements ColorPickerModel {

    constructor(private element: Element) {
        super();
    }

    attached() {
        this._wrapped = new ColorPicker({
            columns: this.columns,
            cssClass: this.cssClass,
            disabled: this.disabled,
            enableOpacity: this.enableOpacity,
            enablePersistence: this.enablePersistence,
            enableRtl: this.enableRtl,
            inline: this.inline,
            locale: this.locale,
            mode: this.mode,
            modeSwitcher: this.modeSwitcher,
            noColor: this.noColor,
            presetColors: this.presetColors,
            showButtons: this.showButtons,
            value: this.value,
        }, this.element.querySelector('input'));
    }

    detached() {
        this._wrapped.destroy();
    }

}