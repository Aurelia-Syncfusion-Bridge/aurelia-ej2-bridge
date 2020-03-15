import { observable, autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration, RouteConfig } from 'aurelia-router';
import { Sidebar, TreeView, NodeSelectEventArgs } from '@syncfusion/ej2-navigations';
import { routes, flatten } from './routes';

@autoinject
export class App {
  public router: Router;

  public message: string = 'David';

  @observable() 
  public jsRaw: string;

  public html: string;
  public context: any;

  constructor() { 
    this.jsRaw = initialJs;
    this.html = initialHTML;
  }

  public jsRawChanged(newValue: string, oldValue: string): void {
    const functionBody = `return ${newValue}`;
    // tslint:disable-next-line:no-function-constructor-with-string-args
    const ctorFactory = new Function(functionBody);
    const ctor = ctorFactory();
    this.context = new ctor();
  }

  configureRouter(config: RouterConfiguration, router: Router): void {

    this.router = router;
    config.title = 'Aurelia Syncfusion Bridge';

    config.map([ { route: '', redirect: routes[0].route.toString() },
                  ...<RouteConfig[]>flatten(routes, [])] );

    //config.mapUnknownRoutes('getting-started');
  }

  attached() {
    let sidebarMenu: Sidebar = new Sidebar({
      width: '260px',
      target: '.main-content',
      mediaQuery: '(min-width: 600px)',
    });
    sidebarMenu.appendTo('#sidebar-treeview');

    // Toggle the Sidebar
    document.getElementById('hamburger').onclick = (): void => {
        sidebarMenu.toggle();
    };

    // TreeView  initialization

    let mainTreeView: TreeView = new TreeView({
        fields: { dataSource: routes, id: 'route', text: 'title', child: 'children' },
        expandOn: 'Click',
        nodeSelected: (eargs: NodeSelectEventArgs) => {

          if (this.router.routes.find(route => route.route === eargs.nodeData.id).nav) {
            this.router.navigate(eargs.nodeData.id.toString());
          }

        }
    });

    mainTreeView.appendTo('#main-treeview');
  }

}

const initialJs = `class Foo {
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
  }
  submit() {
    alert('You submitted "' + this.firstName + ' ' + this.lastName + '"');
  }
}`;

const initialHTML = `
  <h1>Hello Viewer!</h1>
  <ej-button primary="true" click.delegate="submit()" content="message"></ej-button>
`;