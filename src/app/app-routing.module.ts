import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './pages/home/home1/home1.component';
import { AboutUs1Component } from './pages/about/about-us1/about-us1.component';
import { ServicesComponent } from './pages/services/services.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { TenidoComponent } from './pages/tenido/tenido.component';
import { AcabadoComponent } from './pages/acabado/acabado.component';
import { TermoficadoComponent } from './pages/termoficado/termoficado.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  { path: '', component: Home1Component},
  { path: 'inicio', component: Home1Component},
  { path: 'conocenos', component: AboutUs1Component},
  { path: 'servicios', component: ServicesComponent},
  { path: 'tecnologia', component: FaqComponent},
  { path: 'contacto', component: ContactComponent},
  { path: 'equipo', component: TeamComponent},
  { path: 'gobierno', component: CorporateComponent},
  { path: 'tenido', component: TenidoComponent},
  { path: 'acabado', component: AcabadoComponent},
  { path: 'servicios2022', component: ServiciosComponent},
  { path: 'termoficado', component: TermoficadoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes,  { useHash: true} ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
