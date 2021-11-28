import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeListComponent } from './home-list/home-list.component';
import { DistancePipe } from './distance.pipe';
import { AboutComponent } from './about/about.component';
import { FrameworkComponent } from './framework/framework.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { MostRecentFirstPipe } from './most-recent-first.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    HomeListComponent,
    DistancePipe,
    FrameworkComponent,
    AboutComponent,
    HomepageComponent,
    PageHeaderComponent,
    SidebarComponent,
    HtmlLineBreaksPipe,
    RatingStarsComponent,
    LocationDetailsComponent,
    DetailsPageComponent,
    MostRecentFirstPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})

export class AppModule { }
