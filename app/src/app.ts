import { inject } from 'aurelia-dependency-injection';
import { RouterConfiguration, Router } from 'aurelia-router';
import { routes } from './routes';

export class App {
  public router: Router;

  public message: string = 'David';

  constructor() { }

  

  // public configureRouter(config: RouterConfiguration, router: Router) {
  //   this.router = router;

  //   config.options.root = '/';

  //   config.map(routes);
  // }
}
