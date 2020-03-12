import { LehrerComponent } from './component/lehrer/lehrer.component';
import { PrintLayoutComponent } from './winterSportTag/anmelde-formular/print-layout/print-layout.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntranetLoginComponent } from './intranet-login/intranet-login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AnmeldeFormularComponent } from './winterSportTag/anmelde-formular/anmelde-formular.component';
import { CompanionComponent } from './components/companion/companion.component';



const routes: Routes = [
  { path: 'login', component: IntranetLoginComponent },
  { path: '', component: HomeComponent},
  { path: 'ws2020', component: AnmeldeFormularComponent},
  { path: 'print', component: PrintLayoutComponent},
  { path: 'begleitperson', component: CompanionComponent},
  {path: 'lehrer', component: LehrerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
