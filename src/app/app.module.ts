import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { TelcoMenuesComponent } from './telco-menues/telco-menues.component';
import { SmartServicesHomeComponent } from './smart-services-home/smart-services-home.component';
import {SmartServicesCapabilitiesComponent} from './smart-services-capabilities/smart-services-capabilities.component';
import { ValueIntegrationComponent } from './value-integration/value-integration.component';
import { ValueIntegrationCapabilitiesComponent } from './value-integration-capabilities/value-integration-capabilities.component';
import { DigitalExperianceComponent } from './digital-experiance/digital-experiance.component';
import { DigitalExperianceCapabilitiesComponent } from './digital-experiance-capabilities/digital-experiance-capabilities.component';

const _appRoutes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'menu', component: TelcoMenuesComponent},

  { path: 'smartService', component: SmartServicesHomeComponent},
  { path: 'smartServiceCapabilities', component: SmartServicesCapabilitiesComponent},

  { path: 'digitalExperiance', component: DigitalExperianceComponent},
  { path: 'digitalExperianceCapabilities', component: DigitalExperianceCapabilitiesComponent},

  { path: 'valueIntegraion', component: ValueIntegrationComponent},
  { path: 'valueIntegraionCapabilities', component: ValueIntegrationCapabilitiesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TelcoMenuesComponent,
    SmartServicesHomeComponent,
    SmartServicesCapabilitiesComponent,
    ValueIntegrationComponent,
    ValueIntegrationCapabilitiesComponent,
    DigitalExperianceComponent,
    DigitalExperianceCapabilitiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(_appRoutes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
