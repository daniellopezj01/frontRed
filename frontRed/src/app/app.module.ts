import {  RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ContainerComponent } from './components/container/container.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { HomePublicationComponent } from './components/home-publication/home-publication.component';
import { InsertPublicationComponent } from './components/insert-publication/insert-publication.component';
import { MatLinkPreviewModule } from '@angular-material-extensions/link-preview';
import { EmbedVideo } from 'ngx-embed-video';
import { Select2Module } from 'ng2-select2';
import { MeetPeopleComponent } from './components/meet-people/meet-people.component';
<<<<<<< HEAD
import { TrenPubsComponent } from './components/tren-pubs/tren-pubs.component';
=======
import { UpdatePersonComponent } from './components/update-person/update-person.component';
>>>>>>> 2bc3b3b8ba6dcf3d87c6fc4d3cbcd384bfdae78c


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PruebaComponent,
    ContainerComponent,
    FirstPageComponent,
    NavbarHomeComponent,
    HomePublicationComponent,
    InsertPublicationComponent,
    MeetPeopleComponent,
<<<<<<< HEAD
    TrenPubsComponent
=======
    UpdatePersonComponent
>>>>>>> 2bc3b3b8ba6dcf3d87c6fc4d3cbcd384bfdae78c
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatLinkPreviewModule.forRoot(),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EmbedVideo.forRoot(),
    Select2Module
    
  ], entryComponents:[
    InsertPublicationComponent,UpdatePersonComponent
  ],
  providers: [{provide:APP_BASE_HREF,useValue:''}],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
