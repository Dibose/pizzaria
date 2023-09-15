import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { BuildpizzaComponent } from './buildpizza/buildpizza.component';
import { PizzalistComponent } from './pizzalist/pizzalist.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from './connection.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StyleDirective } from './style.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    // BuildpizzaComponent,
    PizzalistComponent,
    CartComponent,
    PagenotfoundComponent,
    StyleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
