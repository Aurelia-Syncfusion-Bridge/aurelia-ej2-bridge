import { bindable, bindingMode } from 'aurelia-framework';
import { ComponentModel, Component } from '@syncfusion/ej2-base';

export abstract class EjComponentModel<T extends Component<HTMLElement>> implements ComponentModel {

  protected _wrapped: T;
  /**
     * Enable or disable persisting component's state between page reloads.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    public enablePersistence?: boolean;
    private enablePersistenceChanged(newValue: boolean) {
      if (this._wrapped) {
        this._wrapped.enablePersistence = newValue;
      }
    }

    /**
     * Enable or disable rendering component in right to left direction.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    public enableRtl?: boolean;
    private enableRtlChanged(newValue: boolean) {
      if (this._wrapped) {
        this._wrapped.enableRtl = newValue;
      }
    }

    /**
     * Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
     * @default ''
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    public locale?: string;
    localeChanged(newValue) {
      if (this._wrapped) {
        this._wrapped.locale = newValue;
      }
    }

}


