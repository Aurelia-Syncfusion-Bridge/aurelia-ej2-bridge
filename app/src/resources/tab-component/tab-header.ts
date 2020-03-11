import { bindable } from "aurelia-framework";

export class TabHeader {
  @bindable tabId: any;
  @bindable isActive;
  @bindable name;
  @bindable tabSelector = id => {};
}

