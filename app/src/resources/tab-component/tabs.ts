import {
  autoinject,
  bindable,
  BindingEngine,
  Container,
  processContent
} from "aurelia-framework";

function processTabs(compiler, resources, node: HTMLElement, instruction) {
  const headerTemplate = document.createElement("template");
  headerTemplate.setAttribute("replace-part", "header");

  const contentTemplate = document.createElement("template");
  contentTemplate.setAttribute("replace-part", "content");

  resources.registerElement(
    "tab-header",
    instruction.type["viewFactory"].resources.getElement("tab-header")
  );

  const tabs = Array.from(node.children/*.querySelectorAll("tab")*/);
  for (let i = 0; i < tabs.length; i++) {
    const tab: any = tabs[i];

    // add header
    const header = document.createElement("tab-header");
    header.setAttribute("tab-id", `${i}`);
    header.setAttribute("name", tab.getAttribute("header"));
    header.setAttribute("is-active.bind", `activeTabId=='${i}'`);
    header.setAttribute("tab-selector.bind", `showTab('${i}')`);
    headerTemplate.content.appendChild(header);

    // add content
    const content = document.createElement("div");
    content.setAttribute("if", `condition.bind: activeTabId==='${i}'; cache: false`);
    content.append(...Array.from((<Node>tab).childNodes));
    contentTemplate.content.appendChild(content);

    node.removeChild(tab);
  }

  // Activate the first tab
  const bindingEngine = Container.instance.get(BindingEngine);
  instruction.attributes = {
    ...instruction.attributes,
    "active-tab-id": bindingEngine.createBindingExpression("activeTabId", "'0'")
  };

  node.append(headerTemplate, contentTemplate);
  return true;
}

@autoinject
@processContent(processTabs)
export class Tabs {

  @bindable activeTabId;
  
  constructor(private element: Element){}
  
  showTab(tabId) {
    return () => {
      this.activeTabId = tabId;
      //this.element.
    };
  }
}
