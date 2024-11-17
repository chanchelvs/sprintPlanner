import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStoryComponent } from './components/dashboard/add-story/add-story.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SprintCalculatorComponent } from './components/dashboard/sprint-calculator/sprint-calculator.component';
import { SprintListingComponent } from './components/dashboard/sprint-listing/sprint-listing.component';
import { StoryListingComponent } from './components/dashboard/story-listing/story-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStoryComponent,
    StoryListingComponent,
    SprintCalculatorComponent,
    SprintListingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
