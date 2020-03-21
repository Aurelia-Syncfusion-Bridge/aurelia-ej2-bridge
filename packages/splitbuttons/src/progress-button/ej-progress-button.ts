import { ProgressButton, ProgressButtonModel, SpinPosition, AnimationSettingsModel } from '@syncfusion/ej2-splitbuttons';
import { autoinject, inlineView, customElement } from 'aurelia-framework';
import { EjProgressButtonModel } from './ej-progress-button-model';
import { fireEventWithCustomInit, fireEvent } from '@aurelia-ej2-bridge/base';


@autoinject
@customElement('ej-progress-button')
@inlineView('<template><button></button></template>')
export class EjProgressButton extends EjProgressButtonModel implements ProgressButtonModel {

    constructor(private element: Element) {
        super();
    }

    attached() {
        this._wrapped = new ProgressButton({
            animationSettings: {
                duration: this.animationDuration,
                easing: this.animationEasing
            },
            begin: (pea) => { pea.percent
                fireEvent(this.element, 'begin', {
                    currentDuration: pea.currentDuration,
                    name: pea.name,
                    percent: pea.percent,
                    step: pea.step
                });
            },
            content: this.content,
            created: (e) => {
                fireEventWithCustomInit(this.element, "created", e);
            },
            cssClass: this.cssClass, 
            disabled: this.disabled,
            duration: this.duration,
            enableHtmlSanitizer: this.enableHtmlSanitizer,
            enableProgress: this.enableProgress,
            end: (pea) => {
                fireEvent(this.element, 'end', {
                    currentDuration: pea.currentDuration,
                    name: pea.name,
                    percent: pea.percent,
                    step: pea.step
                });                
            },
            fail: (e) => {
                fireEventWithCustomInit(this.element, "created", e);
            },
            iconCss: this.iconCss,
            iconPosition: this.iconPosition,
            isPrimary: this.isPrimary,
            isToggle: this.isToggle,
            progress: (pea) => {
                fireEvent(this.element, 'progress', {
                    currentDuration: pea.currentDuration,
                    name: pea.name,
                    percent: pea.percent,
                    step: pea.step
                });                
            },
            spinSettings: {
                position: this.spinPosition,
                template: this.spinTemplate,
                width: this.spinWidth
            }
        }, this.element.querySelector('button'));
    }

    detached() {
        this._wrapped.destroy();
    }
}