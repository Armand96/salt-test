import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './content/home/home.component';
import { VideoComponent } from './content/video/video.component';
import { PeopleComponent } from './content/people/people.component';
import { DocumentsComponent } from './content/documents/documents.component';
import { EventsComponent } from './content/events/events.component';
import { CommoditiesComponent } from './content/commodities/commodities.component';
import { FavoritesComponent } from './content/favorites/favorites.component';
import { ChannelsComponent } from './content/channels/channels.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    VideoComponent,
    PeopleComponent,
    DocumentsComponent,
    EventsComponent,
    CommoditiesComponent,
    FavoritesComponent,
    ChannelsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
