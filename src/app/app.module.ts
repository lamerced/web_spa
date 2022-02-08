import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './pages/home/home1/home1.component';
import { Specializations1Component } from './page_sections/home/home1/specializations1/specializations1.component';
import { About1Component } from './page_sections/home/home1/about1/about1.component';
import { OurValue1Component } from './page_sections/home/home1/our-value1/our-value1.component';
import { Mission1Component } from './page_sections/home/home1/mission1/mission1.component';
import { Services1Component } from './page_sections/home/home1/services1/services1.component';
import { Testimonials1Component } from './page_sections/home/home1/testimonials1/testimonials1.component';
import { Header1Component } from './page_sections/header1/header1.component';
import { Slider1Component } from './section_elements/sliders/slider1/slider1.component';
import { Footer1Component } from './page_sections/footer1/footer1.component';
import { About3Component } from './page_sections/home/home3/about3/about3.component';
import { Specializations3Component } from './page_sections/home/home3/specializations3/specializations3.component';
import { Services3Component } from './page_sections/home/home3/services3/services3.component';
import { Faq1Component } from './page_sections/home/home3/faq1/faq1.component';
import { Services4Component } from './page_sections/home/home4/services4/services4.component';
import { AboutUs1Component } from './pages/about/about-us1/about-us1.component';
import { Banner1Component } from './page_sections/banner1/banner1.component';
import { Specializations4Component } from './page_sections/about/specializations4/specializations4.component';
import { Team3Component } from './page_sections/about/team3/team3.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ServicesComponent } from './pages/services/services.component';
import { About5Component } from './page_sections/services/about5/about5.component';
import { GridBox1Component } from './section_elements/boxes/grid-box1/grid-box1.component';
import { GridBox2Component } from './section_elements/boxes/grid-box2/grid-box2.component';
import { TestimonialBox1Component } from './section_elements/boxes/testimonial-box1/testimonial-box1.component';
import { ServiceBox1Component } from './section_elements/boxes/service-box1/service-box1.component';
import { ServiceBox3Component } from './section_elements/boxes/service-box3/service-box3.component';
import { TeamBox2Component } from './section_elements/boxes/team-box2/team-box2.component';
import { LoaderDirective } from './directives/loader.directive';
import { LoaderComponent } from './section_elements/loader/loader.component';
import { SafePipe } from './pipes/safe.pipe';
import { TeamComponent } from './pages/team/team.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { TenidoComponent } from './pages/tenido/tenido.component';
import { AcabadoComponent } from './pages/acabado/acabado.component';
import { TermoficadoComponent } from './pages/termoficado/termoficado.component';
import { HomeServicesComponent } from './page_sections/home/home1/home-services/home-services.component';
import { ContactSubscriptionComponent } from './page_sections/home/home1/contact-subscription/contact-subscription.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Specializations1Component,
    About1Component,
    OurValue1Component,
    Mission1Component,
    Services1Component,
    Testimonials1Component,
    Header1Component,
    Slider1Component,
    Footer1Component,
    About3Component,
    Specializations3Component,
    Services3Component,
    Faq1Component,
    Services4Component,
    AboutUs1Component,
    Banner1Component,
    Specializations4Component,
    Team3Component,
    ContactComponent,
    FaqComponent,
    ServicesComponent,
    About5Component,
    GridBox1Component,
    GridBox2Component,
    TestimonialBox1Component,
    ServiceBox3Component,
    ServiceBox1Component,
    TeamBox2Component,
    LoaderDirective,
    LoaderComponent,
    SafePipe,
    TeamComponent,
    CorporateComponent,
    TenidoComponent,
    AcabadoComponent,
    TermoficadoComponent,
    HomeServicesComponent,
    ContactSubscriptionComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
