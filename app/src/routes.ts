import { PLATFORM } from 'aurelia-pal';


export type RouteDescriptor = { [key: string]: Object };

function hasChildren(node) {
  return (typeof node === 'object')
      && (typeof node.children !== 'undefined')
      && (node.children.length > 0);
}

export function flatten (routes: RouteDescriptor[], output: RouteDescriptor[]) {

  routes.forEach(route => {
    output.push(route);
    if (hasChildren(route)){
      return flatten(<Array<RouteDescriptor>>route.children, output);
    }
  });
  return [...output];
}

export const routes: RouteDescriptor[] = [
  {
    route: 'test', name: 'test', title: 'Test', moduleId: PLATFORM.moduleName('test'), iconCss: 'icon-microchip icon', nav: true
  },
  // {
  //   route: 'introduction', name: 'introduction', title: 'Introduction', moduleId: PLATFORM.moduleName('./introduction'), iconCss: 'icon-microchip icon', nav: true
  // },
  // {
  //   route: 'getting-started', name: 'getting-started', title: 'Getting Started', moduleId: PLATFORM.moduleName('./getting-started'), iconCss: 'icon-microchip icon', nav: true
  // },
  // {
  //   route: 'components', name: 'components', title: 'Components', moduleId: PLATFORM.moduleName('./components'), iconCss: 'icon-microchip icon', nav: false,
  //   children: [
  //       { route: 'button-getting-started', name: 'button-getting-started', title: 'Buttons', moduleId: PLATFORM.moduleName('./components/button/button-getting-started'), iconCss: 'icon-microchip icon', nav: true}
  //     , { route: 'button-types-and-styles', name: 'button-types-and-styles', title: 'Buttons Types and Styles', moduleId: PLATFORM.moduleName('./components/button/button-types-and-styles'), iconCss: 'icon-microchip icon', nav: true}
      //   {
      //      route: 'editors', name: 'components-editors', title: 'Editors', moduleId: PLATFORM.moduleName('./components/editors'), iconCss: 'icon-microchip icon', nav: false,
      //      children: [
      //        { route: 'buttons', name: 'components-editors-buttons', title: 'Buttons', moduleId: PLATFORM.moduleName('./components/editors/buttons/default'), iconCss: 'icon-microchip icon', nav: true}
      //      ]
      //   },
      //   {
      //     route: 'dropdowns', name: 'components-dropdowns', title: 'DropDowns', moduleId: PLATFORM.moduleName('./components/dropdowns'), iconCss: 'icon-microchip icon', nav: false,
      //     children: [
      //       { route: 'auto-complete', name: 'components-dropdowns-auto-complete', title: 'AutoComplete', moduleId: PLATFORM.moduleName('./components/dropdowns/auto-complete/default'), iconCss: 'icon-microchip icon', nav: true}
      //     ]
      //  }
  //     ]
  // }
];
