import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntranetLoginComponent } from './intranet-login/intranet-login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AnmeldeFormularComponent } from './winterSportTag/anmelde-formular/anmelde-formular.component';


const routes: Routes = [
  { path: 'login', component: IntranetLoginComponent },
  { path: '', component: HomeComponent},
  { path: 'ws2020', component: AnmeldeFormularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
