import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AppLayoutModule } from './layout/app-layout.module';

import { EditorModule } from './editor/editor.module';
import { IdeaListModule } from './idea-list/idea-list.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    AppLayoutModule,
    EditorModule,
    IdeaListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
