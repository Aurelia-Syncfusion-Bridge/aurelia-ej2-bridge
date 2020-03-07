import { bindable, bindingMode } from 'aurelia-framework';
import { EmitType } from '@syncfusion/ej2-base';
import { Selection,ClickEventArgs,DeleteEventArgs, ChipModel, ChipList, ChipListModel } from '@syncfusion/ej2-buttons';
import { EjComponentModel } from '../../base/ej-component-model';

/**
 * Interface for a class ChipList
 */
export class EjChipListModel extends EjComponentModel<ChipList> implements ChipListModel {

    /**
     * This chips property helps to render ChipList component.
     * @default []
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    chips?: string[] | number[] | ChipModel[];

    /**
     * This text property helps to render Chip component.
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

    /**
     * This selectedChips property helps to select chip items.
     * @default []
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    selectedChips?: number[] | number;

    /**
     * This selection property enables chip selection type.
     * @default 'None'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    selection?: Selection;

    /**
     * This enableDelete property helps to enable delete functionality.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    enableDelete?: boolean;

    /**
     * This created event will get triggered once the component rendering is completed.
     * @event
     * @blazorProperty 'Created'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    created?: EmitType<Event>;

    /**
     * This click event will get triggered once the chip is clicked.
     * @event
     * @blazorProperty 'OnClick'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    click?: EmitType<ClickEventArgs>;

    /**
     * This delete event will get triggered before removing the chip.
     * @event
     * @blazorProperty 'OnDelete'
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    delete?: EmitType<DeleteEventArgs>;

}


