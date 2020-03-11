import { observable } from 'aurelia-framework';
import { inject } from 'aurelia-dependency-injection';
import { RouterConfiguration, Router } from 'aurelia-router';
import { routes } from './routes';

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

  

  // public configureRouter(config: RouterConfiguration, router: Router) {
  //   this.router = router;

  //   config.options.root = '/';

  //   config.map(routes);
  // }
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
  <ej-button primary="true" content="message"></ej-button>
`;