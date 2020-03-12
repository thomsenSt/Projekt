import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntranetLoginComponent } from './intranet-login/intranet-login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportModule } from './material-import/material-import.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AnmeldeFormularComponent } from './winterSportTag/anmelde-formular/anmelde-formular.component';
import { HttpClientModule } from '@angular/common/http';
import { PrintLayoutComponent } from './winterSportTag/anmelde-formular/print-layout/print-layout.component';
import { CompanionComponent } from './components/companion/companion.component';
import { FormsModule } from '@angular/forms';
import { LehrerComponent } from './component/lehrer/lehrer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntranetLoginComponent,
    HomeComponent,
    AnmeldeFormularComponent,
    PrintLayoutComponent,
    CompanionComponent,
    LehrerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialImportModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
