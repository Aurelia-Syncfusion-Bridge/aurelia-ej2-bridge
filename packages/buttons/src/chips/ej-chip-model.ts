import { bindable, bindingMode } from 'aurelia-framework';
import { ChipModel, Chip } from '@syncfusion/ej2-buttons';
import { EjComponentModel } from '../../base/ej-component-model';
import { Component } from '@syncfusion/ej2-base';

export class EjChipModel extends EjComponentModel<Component<HTMLElement>> implements ChipModel {

  /**
   * This text property helps to render ChipList component.
   * @default ''
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  text?: string;

  /**
   * This avatarText property helps to customize avatar content.
   * @default ''
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  avatarText?: string;

    /**
   * This avatarIconCss property helps to customize avatar element.
   * @default ''
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  avatarIconCss?: string;

  /**
   * This leadingIconCss property helps to customize leading icon element.
   * @default ''
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  leadingIconCss?: string;

  /**
   * This trailingIconCss property helps to customize trailing icon element.
   * @default ''
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  trailingIconCss?: string;

  /**
   * This cssClass property helps to customize ChipList component.
   * @default ''
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  cssClass?: string;

  /**
   * This enabled property helps to enable/disable ChipList component.
   * @default true
   * @blazorDefaultValue null
   * @blazorType bool?
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  enabled?: boolean;
}
