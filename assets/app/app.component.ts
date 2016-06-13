import { Component,Injectable,AfterViewInit } from '@angular/core';
import {ScrollSpyDirective,ScrollSpyService} from 'ng2-scrollspy';

@Injectable()
@Component({
    moduleId: module.id,
    selector: 'my-app',
    directives: [ScrollSpyDirective],
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(scrollSpyService: ScrollSpyService) {
        this.scrollSpyService = scrollSpyService;
    }


  ngAfterViewInit() {
    this.scrollSpyService.getObservable('window').subscribe((e: any) => {
        console.log('ScrollSpy::window: ', e);
    });
  }
}
