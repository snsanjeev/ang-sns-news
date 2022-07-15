import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ArticleCalloutComponent } from './components/article-callout/article-callout.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ArticleCalloutsComponent } from './components/article-callouts/article-callouts.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LifecycleDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';
import { NewsTableComponent } from './components/news-table/news-table.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnderlineDirective } from './directives/underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ArticleCalloutComponent,
    GalleryComponent,
    ArticleCalloutsComponent,
    LoginFormComponent,
    LifecycleDemoComponent,
    NewsTableComponent,
    HighlightDirective,
    UnderlineDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
