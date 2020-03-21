import { SliderModel, Slider } from "@syncfusion/ej2-inputs";
import { EjSliderModel } from "./ej-slider-model";
import { autoinject, customElement, inlineView } from "aurelia-framework";

@autoinject
@customElement('ej-slider')
@inlineView('<template><div></div></template>')
export class EjSlider extends EjSliderModel implements SliderModel {

    constructor(private element: Element) {
      super();
    }

    attached() {
        this._wrapped = new Slider({
            colorRange: this.colorRange,
            cssClass: this.cssClass,
            enableAnimation: this.enableAnimation,
            enableHtmlSanitizer: this.enableHtmlSanitizer,
            enablePersistence: this.enablePersistence,
            enableRtl: this.enableRtl,
            enabled: this.enabled,
            limits: this.limits,
            locale: this.locale,
            max: this.max,
            min: this.min,
            orientation: this.orientation,
            readonly: this.readonly,
            renderedTicks: this.renderedTicks,
            showButtons: this.showButtons,
            step: this.step,
            ticks: this.ticks,
            tooltip: this.tooltip,
            type: this.type,
            value: this.value
        }, this.element.querySelector('div'));
    }

    detached() {
        this._wrapped.destroy();
    }
}