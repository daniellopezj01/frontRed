import { InsertPublicationComponent } from './components/insert-publication/insert-publication.component';
import { HomePublicationComponent } from './components/home-publication/home-publication.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { MeetPeopleComponent } from './components/meet-people/meet-people.component';
import { TrenPubsComponent } from './components/tren-pubs/tren-pubs.component';

const routes: Routes = [
    { path: 'inicio', component: HomeComponent,  children: [
        { path: '', component:HomePublicationComponent, },
        { path: 'c', component:InsertPublicationComponent, },
        { path: 'p', component: PruebaComponent },
        { path: 'conocer', component: MeetPeopleComponent },
        { path: 'trending', component: TrenPubsComponent}
    ]},
    { path: '', component: FirstPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            scrollOffset: [0, 53]
        },
    )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
