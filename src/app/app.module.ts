import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PublishdataComponent } from './publishdata/publishdata.component';
import { PublishdataresultComponent } from './publishdata/publishdataresult/publishdataresult.component';

const appRoutes: Routes = [
    {path: "dashboard", component: DashboardComponent},
    {path: "publishdata", component: PublishdataComponent},
    {path: "publishdatasuccessorerror", component: PublishdataresultComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PublishdataComponent,
    PublishdataresultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
