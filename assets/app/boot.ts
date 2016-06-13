///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from "./app.component";
import { HTTP_PROVIDERS } from '@angular/http';
import {ScrollSpyService} from 'ng2-scrollspy';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ScrollSpyService
]);
