import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GoodsComponent } from './components/goods/goods.component';
import { AboutComponent } from './components/about/about.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import {AnimateLogoDirective} from './directives/animate-logo.directive';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoodsComponent,
    AboutComponent,
    ReviewsComponent,
    ContactComponent,
    FooterComponent,
    AnimateLogoDirective
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
