import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MiddleHeaderComponent } from './middle-header/middle-header.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { FooterComponent } from './footer/footer.component';
import { UnderFooterComponent } from './under-footer/under-footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PricesComponent } from './prices/prices.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleHeaderComponent,
    NavHeaderComponent,
    FooterComponent,
    UnderFooterComponent,
    MainContentComponent,
    FeedbacksComponent,
    PricesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
