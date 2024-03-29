import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FakeApiInterceptor } from './services/fake-api.interceptor';
import { HomepageComponent } from './screens/homepage/homepage.component';
import { NewsListingPageComponent } from './screens/news-listing-page/news-listing-page.component';
import { NewsDetailPageComponent } from './screens/news-detail-page/news-detail-page.component';

import { environment } from 'src/environments/environment';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { PrivacyPolicyPageComponent } from './screens/privacy-policy-page/privacy-policy-page.component';
import { ContactPageComponent } from './screens/contact-page/contact-page.component';
import { NotFoundPageComponent } from './screens/not-found-page/not-found-page.component';
import { LoginPageComponent } from './screens/login-page/login-page.component';
import { RegisterPageComponent } from './screens/register-page/register-page.component';
import { ApplyLoanFormComponent } from './components/apply-loan/apply-loan.component';
import { ApplyLoanComponent } from './screens/apply-loan/apply-loan.component';
import { VerifyTaxIdDirective } from './directives/verify-tax-id.directive';
import { TaxidFormatDirective } from './directives/taxid-format.directive';
import { ApplyAccountReactiveFormComponent } from './components/apply-account-reactive-form/apply-account-reactive-form.component';
import { AccessInterceptor } from './services/access.interceptor';


// All prod and non prod
const interceptors = [
  { provide : HTTP_INTERCEPTORS, useClass : AccessInterceptor, multi : true }
];

if (!environment.production) {
  // non prod
  interceptors.push({provide: HTTP_INTERCEPTORS, useClass: FakeApiInterceptor, multi: true})
}
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
    UnderlineDirective,
    UppercasePipe,
    HomepageComponent,
    NewsListingPageComponent,
    NewsDetailPageComponent,
    UsersTableComponent,
    PrivacyPolicyPageComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ApplyLoanComponent,
    ApplyLoanFormComponent,
    VerifyTaxIdDirective,
    TaxidFormatDirective,
    ApplyAccountReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    //{provide: HTTP_INTERCEPTORS, useClass : FakeApiInterceptor, multi:true}
    ...interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
