import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RoutersComponent } from './routers/routers.component';
import { RouterDetailComponent } from './router-detail/router-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { RouterSearchComponent } from './router-search/router-search.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    RoutersComponent,
    RouterDetailComponent,
    MessagesComponent,
    DashboardComponent,
    RouterSearchComponent,
    LoginComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
