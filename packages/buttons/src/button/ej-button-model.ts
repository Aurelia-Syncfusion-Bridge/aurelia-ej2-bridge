import { bindingMode, bindable } from 'aurelia-framework';
import { EjComponentModel } from '../../base/ej-component-model';
import { ButtonModel, IconPosition, Button } from '@syncfusion/ej2-buttons';

/**
 * Interface for a class Button
 */
export class EjButtonModel extends EjComponentModel<Button> implements ButtonModel {

    /**
     * Positions the icon before/after the text content in the Button.
     * The possible values are:
     * * Left: The icon will be positioned to the left of the text content.
     * * Right: The icon will be positioned to the right of the text content.
     * @default "left"
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    iconPosition?: IconPosition = 'Left';

    /**
     * Defines class/multiple classes separated by a space for the Button that is used to include an icon.
     * Buttons can also include font icon and sprite image.
     * @default ""
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    iconCss?: string;
    iconCssChanged(value: any) {
      if (this._wrapped) {
        this._wrapped.iconCss = value;
      }
    }

    /**
     * Specifies a value that indicates whether the Button is `disabled` or not.
     * @default false.
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    disabled?: boolean;

    /**
     * Allows the appearance of the Button to be enhanced and visually appealing when set to `true`.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    isPrimary?: boolean;

    /**
     * Defines class/multiple classes separated by a space in the Button element. The Button types, styles, and
     * size can be defined by using
     * [`this`](http://ej2.syncfusion.com/documentation/button/howto.html?lang=typescript#create-a-block-button).
     * {% codeBlock src='button/cssClass/index.md' %}{% endcodeBlock %}
     * @default ""
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    cssClass?: string;
    cssClassChanged(value: any) {
      if (this._wrapped) {
        this._wrapped.cssClass = value;
      }
    }

    /**
     * Defines the text `content` of the Button element.
     * {% codeBlock src='button/content/index.md' %}{% endcodeBlock %}
     * @default ""
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    content?: string;
    contentChanged(value) {
      if (this._wrapped) {
        this._wrapped.content = value;
      }
    }

    /**
     * Makes the Button toggle, when set to `true`. When you click it, the state changes from normal to active.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    isToggle?: boolean;


    /**
     * Defines whether to allow the cross-scripting site or not.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enableHtmlSanitizer?: boolean;
    enableHtmlSanitizerChanged (value: any) {
      if (this._wrapped) {
        this._wrapped.enableHtmlSanitizer = value;
      }
    }
}
