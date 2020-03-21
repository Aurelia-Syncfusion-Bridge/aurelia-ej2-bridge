import { EmitType } from '@syncfusion/ej2-base';
import { IconPosition } from '@syncfusion/ej2-buttons';
import { AnimationSettingsModel, ProgressButton, ProgressButtonModel, ProgressEventArgs, SpinSettingsModel, SpinPosition } from '@syncfusion/ej2-splitbuttons'
import { EjComponentModel } from '@aurelia-ej2-bridge/base';
import { bindable, bindingMode } from 'aurelia-framework';

export class EjProgressButtonModel extends EjComponentModel<ProgressButton> implements ProgressButtonModel {
    
    /* SpinSettingsModel Implementation */

    /**
     * Specifies the template content to be displayed in a spinner.
     * @default null
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    spinTemplate?: string;

    /**
     * Sets the width of a spinner.
     * @default '16'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    spinWidth?: string | number = 16;

    /**
     * Specifies the position of a spinner in the progress button. The possible values are:
     * * Left: The spinner will be positioned to the left of the text content.
     * * Right: The spinner will be positioned to the right of the text content.
     * * Top: The spinner will be positioned at the top of the text content.
     * * Bottom: The spinner will be positioned at the bottom of the text content.
     * * Center: The spinner will be positioned at the center of the progress button.
     * @default 'Left'
     * @aspType Syncfusion.EJ2.SplitButtons.SpinPosition
     * @blazorType Syncfusion.EJ2.SplitButtons.SpinPosition
     * @isEnumeration true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    spinPosition?: SpinPosition = 'Left';


    /* AnimationSettingsModel Implementation */

    /**
     * Specifies the duration taken to animate.
     * @default 400
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    animationDuration?: number = 400;

    /**
     * Specifies the effect of animation.
     * @default 'None'
     * @aspType Syncfusion.EJ2.SplitButtons.AnimationEffect
     * @blazorType Syncfusion.EJ2.SplitButtons.AnimationEffect
     * @isEnumeration true
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    animationEffect?: AnimationEffect;

    /**
     * Specifies the animation timing function.
     * @default 'ease'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    animationEasing?: string = 'ease';


    /* ProgressButtonModel Implementation */

    /**
     * Enables or disables the background filler UI in the progress button.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enableProgress?: boolean;

    /**
     * Specifies the duration of progression in the progress button.
     * @default 2000
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    duration?: number;

    /**
     * Positions an icon in the progress button. The possible values are:
     * * Left: The icon will be positioned to the left of the text content.
     * * Right: The icon will be positioned to the right of the text content.
     * * Top: The icon will be positioned at the top of the text content.
     * * Bottom: The icon will be positioned at the bottom of the text content.
     * @default "Left"
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    iconPosition?: IconPosition = "Left";

    /**
     * Defines class/multiple classes separated by a space for the progress button that is used to include an icon.
     * Progress button can also include font icon and sprite image.
     * @default ""
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    iconCss?: string = "";

    /**
     * Enables or disables the progress button.
     * @default false.
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    disabled?: boolean = false;

    /**
     * Allows the appearance of the progress button to be enhanced and visually appealing when set to `true`.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    isPrimary?: boolean = false;

    /**
     * Specifies the root CSS class of the progress button that allows customization of component’s appearance.
     * The progress button types, styles, and size can be achieved by using this property.
     * @default ""
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    cssClass?: string = "";

    /**
     * Defines the text `content` of the progress button element.
     * @default ""
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    content?: string = "";

    /**
     * Makes the progress button toggle, when set to `true`. When you click it, the state changes from normal to active.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    isToggle?: boolean = false;

    /**
     * Defines whether to allow the cross-scripting site or not.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enableHtmlSanitizer?: boolean = false;

    /**
     * Specifies a spinner and its related properties.
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    spinSettings?: SpinSettingsModel = {
        position: this.spinPosition,
        template: this.spinTemplate,
        width: this.spinWidth
    };

    /**
     * Specifies the animation settings.
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    animationSettings?: AnimationSettingsModel;

    /**
     * Triggers once the component rendering is completed.
     * @event
     * @blazorProperty 'Created'
     */
    created?: EmitType<Event>;

    /**
     * Triggers when the progress starts.
     * @event
     * @blazorProperty 'OnBegin'
     */
    begin?: EmitType<ProgressEventArgs>;

    /**
     * Triggers in specified intervals.
     * @event
     * @blazorProperty 'Progressing'
     */
    progress?: EmitType<ProgressEventArgs>;

    /**
     * Triggers when the progress is completed.
     * @event
     * @blazorProperty 'OnEnd'
     */
    end?: EmitType<ProgressEventArgs>;

    /**
     * Triggers when the progress is incomplete.
     * @event
     * @blazorProperty 'OnFailure'
     */
    fail?: EmitType<Event>;

}